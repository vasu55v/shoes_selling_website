from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.permissions import IsAdminUser
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password



# jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
# jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
# Create your views here.

class shoesListView(generics.ListAPIView):
    queryset=Shoes.objects.all()
    serializer_class=ShoesDetailSerializer
    permission_classes=[AllowAny]

class shoesView(generics.ListAPIView):
    queryset=Color_And_Photos.objects.all()
    serializer_class=ColorAndPhotosDetailSerializer
    permission_classes=[AllowAny]

    def get_queryset(self):
        qs=super().get_queryset()
        shoes_id=self.kwargs["pk"]
        qs=qs.filter(shoes=shoes_id)
        return qs
    
class shoesCreateView(generics.CreateAPIView):
    queryset=Shoes.objects.all()
    serializer_class=ShoesSerializer
    # permission_classes=[IsAuthenticated]
    permission_classes=[AllowAny]

class ShoesUpdateViewSet(generics.UpdateAPIView):
    queryset = Shoes.objects.all()
    serializer_class = ShoesSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes=[AllowAny]

class ShoesDeleteViewSet(generics.DestroyAPIView):
    queryset = Shoes.objects.all()
    serializer_class = ShoesSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes=[AllowAny]

class ColorAndPhotosListView(generics.ListAPIView):
    queryset=Color_And_Photos.objects.all()
    serializer_class=ColorAndPhotosDetailSerializer
    permission_classes=[AllowAny]


class ColorAndPhotosCreateView(generics.CreateAPIView):
    queryset=Color_And_Photos.objects.all()
    serializer_class=ColorAndPhotosSerializer
    # permission_classes=[IsAuthenticated]
    permission_classes=[AllowAny]

class ColorAndPhotosUpdateViewSet(generics.UpdateAPIView):
    queryset = Color_And_Photos.objects.all()
    serializer_class = ColorAndPhotosSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes=[AllowAny]

class ColorAndPhotosDeleteViewSet(generics.DestroyAPIView):
    queryset = Color_And_Photos.objects.all()
    serializer_class = ColorAndPhotosSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes=[AllowAny]


#****************************customer view****************************
@csrf_exempt
def customer_register_view(request):
    first_name=request.POST.get('first_name')
    last_name=request.POST.get('last_name')
    email=request.POST.get('email')
    username=request.POST.get('username')
    password=request.POST.get('password')
    address=request.POST.get('address')
    mobile_number=request.POST.get('mobile_number')
    profile_photo=request.FILES.get('profile_photo')
    
    try:
        user=User.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,                    
            username=username,
            password=make_password(password),
        )

        if user:
            try:
              customer = Customer.objects.create(
                user=user,
                mobile_number=mobile_number,
                address=address,
                profile_photo=profile_photo,
            )

              message = {
                    "bool": True,
                    "user": user.id,
                    "customer_id": customer.id,
                    "message": "Thanks for registration. Now you can login",
                }
            except IntegrityError:
                message={"bool":False,"message":"visitor user something went wrong....!"}

        else:
            message={"bool":False,"message":"oops something went wrong....!"}


    except IntegrityError:
         message={"bool":False,"message":"username already exist."}

    return JsonResponse(message)


class CreateCustomerView(generics.ListAPIView):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer
    permission_classes=[AllowAny]

class CustomerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Customer.objects.all()
    serializer_class=CustomerDetailSerializer
    permission_classes=[AllowAny]

class order_of_customer(generics.ListAPIView):
    queryset=Order_item.objects.all()
    serializer_class=OrderItemSerializer
    permission_classes=[AllowAny]

    def get_queryset(self):
        qs=super().get_queryset()
        customer_id = self.kwargs["pk"]
        qs=qs.filter(order__customer__id=customer_id)
        return qs
    
# class RegisterView(APIView):
#     def post(self,request):
#         username = request.data.get('username')
#         first_name = request.data.get('first_name')
#         last_name = request.data.get('last_name')
#         email = request.data.get('email')
#         mobile_number = request.data.get('mobile_number')
#         address = request.data.get('address')
#         profile_photo = request.data.get('profile_photo')
#         password = request.data.get('password')


#         user = User.objects.create_user(
#             username=username,
#             email=email,
#             password=password,
#             first_name=first_name,
#             last_name=last_name
#         )


#         user.Customer.mobile_number = mobile_number
#         user.Customer.profile_photo = profile_photo
#         user.Customer.address = address
#         user.Customer.save()

#         payload = jwt_payload_handler(user)
#         token = jwt_encode_handler(payload)

#         return Response({
#             'token': token,
#             'user_id': user.id,
#             'email': user.email
#         }, status=status.HTTP_201_CREATED)
    


#****************************vendor view****************************

class VendorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Vendor.objects.all()
    serializer_class=VendorSerializer
    permission_classes=[AllowAny]

    
def VendorPanelView(request):
    total_shoes=Shoes.objects.all().count()
    total_order = Order_item.objects.all().count()
    total_customer = (
        Order_item.objects.filter().values("order__customer").count()
    )

    msg = {
        "total_shoes": total_shoes,
        "total_order": total_order,
        "total_customer": total_customer,
    }

    return JsonResponse(msg)


@csrf_exempt
def VisitorUser_login(request):
    username=request.POST.get("username")
    password=request.POST.get("password")

    user=authenticate(username=username,password=password)
    if user:
        vendor_user=Vendor.objects.get(user=user)
        message={
            "bool":True,
            "user_id":user.id,
            "username":user.username,
            "vendor_user_id":vendor_user.id
        }
    else:
        message={"bool":False,"message":"Not Valid username or Password"}

    return JsonResponse(message)
    


#****************************category view****************************

class CategoryShoesView(generics.ListAPIView):
    queryset=Shoes.objects.all()
    serializer_class=OrderItemSerializer
    permission_classes=[AllowAny]

    # def get_queryset(self):
    #     qs=super().get_queryset()
    #     category_name= self.kwargs["pk"]
    #     qs=qs.filter(order__customer__id=category_name)
    #     return qs
    

#****************************infinite scroll****************************


def scroll(request):
    shoes=Shoes.objects.all()
    paginator=Paginator(shoes,12) #12 shoes per page
    page_number=request.GET.get('page')
    page_obj=paginator.get_page(page_number)


    serialized_data=ShoesSerializer(page_obj,many=True)

    return JsonResponse({
        'data': serialized_data.data,
        'has_next': page_obj.has_next(),
        'next_page_number': page_obj.next_page_number() if page_obj.has_next() else None
    })


#****************************Customer review****************************

class CustomerReviewView(generics.ListCreateAPIView):
    queryset=Shoes_review.objects.all()
    serializer_class=ReviewSerializer
    permission_classes=[AllowAny]

    def get_queryset(self):
        qs=super().get_queryset()
        product_id=self.kwargs["id"]
        qs=qs.filter(shoes__id=product_id)
        return qs

class CustomerReviewDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Shoes_review.objects.all()
    serializer_class=ReviewSerializer
    permission_classes=[AllowAny]

    def get_queryset(self):
        qs=super().get_queryset()
        review_id=self.kwargs["pk"]
        qs=qs.filter(id=review_id)
        return qs
    

#****************************Order status status****************************
class OrderStatusView(generics.ListCreateAPIView):
    queryset=OrderStatusByVendor.objects.all()
    serializer_class=OrderStatusSerializer                                              
    permission_classes=[AllowAny]

class OrderStatusUpdateView(generics.RetrieveUpdateAPIView):
    queryset=OrderStatusByVendor.objects.all()
    serializer_class=OrderStatusSerializer                                              
    permission_classes=[AllowAny]

    # def get_queryset(self):
    #     qs=super().get_queryset()
    #     order_status_id=self.kwargs["pk"]
    #     qs=qs.filter(id=order_status_id)
    #     return qs
    


# def vendorPanel(request):
#     total_customer=Customer.objects.all().count()
#     total_order=Order.objects.all().count()

    