from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.permissions import IsAdminUser
from django.http import JsonResponse
from django.core.paginator import Paginator
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
    permission_classes=[IsAuthenticated]
    # permission_classes=[AllowAny]

class ShoesUpdateViewSet(generics.UpdateAPIView):
    queryset = Shoes.objects.all()
    serializer_class = ShoesSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes=[AllowAny]

class ShoesDeleteViewSet(generics.DestroyAPIView):
    queryset = Shoes.objects.all()
    serializer_class = ShoesSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes=[AllowAny]

class ColorAndPhotosListView(generics.ListAPIView):
    queryset=Color_And_Photos.objects.all()
    serializer_class=ColorAndPhotosDetailSerializer
    permission_classes=[AllowAny]


class ColorAndPhotosCreateView(generics.CreateAPIView):
    queryset=Color_And_Photos.objects.all()
    serializer_class=ColorAndPhotosSerializer
    permission_classes=[IsAuthenticated]
    # permission_classes=[AllowAny]

class ColorAndPhotosUpdateViewSet(generics.UpdateAPIView):
    queryset = Color_And_Photos.objects.all()
    serializer_class = ColorAndPhotosSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes=[AllowAny]

class ColorAndPhotosDeleteViewSet(generics.DestroyAPIView):
    queryset = Color_And_Photos.objects.all()
    serializer_class = ColorAndPhotosSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes=[AllowAny]


#****************************customer view****************************

class CreateCustomerView(generics.ListCreateAPIView):
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

class CustomerReviewDeleteView(generics.DestroyAPIView):
    queryset=Shoes_review.objects.all()
    serializer_class=ReviewSerializer
    permission_classes=[AllowAny]

    def get_queryset(self):
        qs=super().get_queryset()
        review_id=self.kwargs["id"]
        qs=qs.filter(id=review_id)
        return qs
