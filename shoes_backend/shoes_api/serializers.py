from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','password']
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
    class Meta:
        model=Customer
        fields='__all__'



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