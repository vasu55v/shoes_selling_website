from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
# Register your models here.

admin.site.register(Shoes)
admin.site.register(Color_And_Photos)
admin.site.register(Customer)
admin.site.register(Vendor)
admin.site.register(Order)
admin.site.register(Order_item)


