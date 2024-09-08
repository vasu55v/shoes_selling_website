from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.

class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile_number=models.IntegerField(null=True,blank=True)
    address=models.TextField()
    profile_photo=models.ImageField(upload_to='customer_profile_image')

    def __str__(self):
        return  f"{self.user.username}----------------------{self.mobile_number}"

class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile_number=models.IntegerField(null=True,blank=True)
    profile_photo=models.ImageField(upload_to='vendor_profile_image')


    def __str__(self):
        return  f"{self.user.username}----------------------{self.mobile_number}"
    

FOR_WHOM_CHOICES =(
    ("men", "men"), 
    ("woman", "woman"), 
    ("kids", "kids"),
) 

GENDER_CHOICES =( 
    ("male", "male"), 
    ("female", "female"), 
) 

SIZE_CHOICES=( 
    ("UK6", "UK6"), 
    ("UK7", "UK7"), 
    ("UK8", "UK8"), 
    ("UK9", "UK9"), 
    ("UK10", "UK10"), 
    ("UK11", "UK11"), 
    ("UK12", "UK12"), 
) 

SHOES_CATEGORY=( 
    ("BOOTS", "BOOTS"), 
    ("CASUALS SHOES ", "CASUALS SHOES "), 
    ("FLIP FLOPS", "FLIP FLOPS"), 
    ("FORMAL SHOES", "FORMAL SHOES"), 
    ("SANDALS & FLOATERS", "SANDALS & FLOATERS"), 
    ("SPORTS SHOES & SNEAKERS", "SPORTS SHOES & SNEAKERS"), 
) 

class Shoes(models.Model):
    name=models.CharField(max_length=200,null=False,blank=False)
    product_category=models.CharField(max_length=200,null=False,blank=False, choices = FOR_WHOM_CHOICES,default = 'man')
    gender=models.CharField(max_length=200,null=False,blank=False, choices = GENDER_CHOICES,default = 'man')
    size=models.CharField(max_length=200,null=False,blank=False, choices = SIZE_CHOICES,default = 'UK6')
    price=models.DecimalField(max_digits=10, decimal_places=2)
    description=models.TextField()

    def __str__(self):
        return f"{self.name}--------{self.gender}--------{self.price}"

class Category(models.Model):
    shoes=models.ForeignKey(Shoes,on_delete=models.CASCADE)
    shoes_category_name=models.CharField(max_length=200,null=False,blank=False, choices = SHOES_CATEGORY,default = 'SPORTS SHOES & SNEAKERS')
    
    def __str__(self):
        return  f"{self.shoes.name}----------------------{self.shoes_category_name}"


    
class Color_And_Photos(models.Model):
    shoes=models.ForeignKey(Shoes,on_delete=models.CASCADE)
    color_name=models.CharField(max_length=150)
    photos=models.ImageField(upload_to='shoes_images')

    def __str__(self):
        return  f"{self.shoes.name}----------------------{self.color_name}"


class Order(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name="customer_orders")
    order_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):     
         return '%s' % (self.order_time)
    
class Order_item(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE)
    shoes=models.ForeignKey(Shoes,on_delete=models.CASCADE)
    qty=models.IntegerField(default=1)
    price=models.DecimalField(max_digits=10,decimal_places=2,default=0)

    def __str__(self):     
         return self.shoes.name
    
class OrderStatusByVendor(models.Model):
    order_item=models.ForeignKey(Order_item,on_delete=models.CASCADE)
    order_status=models.BooleanField(default=False)

    def __str__(self):
        return f'Order status of shoes {self.order_item.shoes.name} is {self.order_status}'
    
# class ConfirmOrderWithAddress(models.Model):
#     Order_item=models.ForeignKey(Order_item,on_delete=models.CASCADE)

    
class Shoes_review(models.Model):
    shoes=models.ForeignKey(Shoes,on_delete=models.CASCADE)
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    review_star=models.IntegerField()
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not (1 <= self.review_star <= 5):
            raise ValueError("Rating must be between 1 and 5")
        super().save(*args, **kwargs)

    def __str__(self):
        return f'Review by User {self.customer.user.username} on {self.shoes.name}'