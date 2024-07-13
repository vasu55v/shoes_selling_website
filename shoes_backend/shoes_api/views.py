from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.permissions import IsAdminUser
from django.http import JsonResponse

# Create your views here.

class shoesListView(generics.ListAPIView):
    queryset=Shoes.objects.all()
    serializer_class=ShoesDetailSerializer
    permission_classes=[AllowAny]


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
    

