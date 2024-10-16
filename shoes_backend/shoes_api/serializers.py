from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.http import JsonResponse

class UserSerializerNoPassword(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','first_name','last_name','username','email']
        extra_kwargs={"password":{"write_only":True}}
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','first_name','last_name','email','username','password']
        extra_kwargs={"password":{"write_only":True}}

       
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Vendor
        fields='__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields='__all__'
           
    def create(self,**validated_data):
        customer=Customer.objects.create_user(**validated_data)
        return customer


class CustomerDetailSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    class Meta:
        model=Customer
        fields=['id','user','mobile_number','address','profile_photo']

class CustomerDetailUpdateDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields=['id','user','mobile_number','address','profile_photo']

class ShoesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=Shoes
        fields=['id','name','product_category','gender','size','price','description']
        # fields = '__all__'

class ShoesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Shoes
        fields=['id','name','product_category','gender','size','price','description']


class ColorAndPhotosDetailSerializer(serializers.ModelSerializer):
     shoes=ShoesSerializer()
     class Meta:
        model=Color_And_Photos
        fields=['id','shoes','color_name','photos']

class ColorAndPhotosSerializer(serializers.ModelSerializer):
     class Meta:
        model=Color_And_Photos
        fields=['id','shoes','color_name','photos']


class OrderSerializer(serializers.ModelSerializer):
     customer=CustomerSerializer()
     class Meta:
        model=Order
        fields=['id','customer','order_time']

class OrderItemSerializer(serializers.ModelSerializer):
     order=OrderSerializer()
     shoes=ShoesSerializer()
     class Meta:
        model=Order_item
        fields=['id','order','shoes','qty','price']

class OrderItemNormalSerializer(serializers.ModelSerializer):
     class Meta:
        model=Order_item
        fields=['id','order','shoes','qty','price']

class ReviewSerializer(serializers.ModelSerializer):
    shoes=ShoesSerializer()
    customer=CustomerSerializer()
    class Meta:
        model=Shoes_review
        fields=['id','shoes','customer','review_star','comment','created_at']

class OrderStatusSerializer(serializers.ModelSerializer):
    # order_item=OrderItemNormalSerializer()
    class Meta:
        model=OrderStatusByVendor
        fields=['id','order_item','order_status']


