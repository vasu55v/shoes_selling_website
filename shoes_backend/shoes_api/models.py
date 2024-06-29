from django.db import models
from django.contrib.auth.models import User
# Create your models here.


FOR_WHOM_CHOICES =(
    ("men", "men"), 
    ("woman", "woman"), 
    ("kids", "kids"),
) 

GENDER_CHOICES =( 
    ("men", "men"), 
    ("woman", "woman"), 
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


class Shoes(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    name=models.CharField(max_length=200,null=False,blank=False)
    for_whom=models.CharField(max_length=200,null=False,blank=False, choices = FOR_WHOM_CHOICES,default = 'man')
    gender=models.CharField(max_length=200,null=False,blank=False, choices = GENDER_CHOICES,default = 'man')
    size=models.CharField(max_length=200,null=False,blank=False, choices = SIZE_CHOICES,default = 'UK6')
    price=models.DecimalField(max_digits=10, decimal_places=2)
    description=models.TextField()

    def __str__(self):
        return f"{self.name}--------{self.gender}--------{self.price}"
    
class Color_And_Photos(models.Model):
    shoes=models.ForeignKey(Shoes,on_delete=models.CASCADE)
    color_name=models.CharField(max_length=150)
    photos=models.ImageField(upload_to='shoes_images')

    def __str__(self):
        return  f"{self.shoes.name}----------------------{self.color_name}"

    
