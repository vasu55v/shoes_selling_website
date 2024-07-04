from django.urls import path
from . import views
from .views import *

urlpatterns = [

    

    #shoes
    path('shoes/',shoesListView.as_view()),
    path('shoes-create/',shoesCreateView.as_view()),
    path('shoes-update/<int:pk>/',ShoesUpdateViewSet.as_view()),
    path('shoes-delete/<int:pk>/',ShoesDeleteViewSet.as_view()),


    #color&photo
    path('color_photo/',ColorAndPhotosListView.as_view()),
    path('color_photo_create/',ColorAndPhotosCreateView.as_view()),
    path('color_photo_update/<int:pk>/',ColorAndPhotosUpdateViewSet.as_view()),
    path('color_photo_delete/<int:pk>/',ColorAndPhotosDeleteViewSet.as_view()),


    #customer
    path('customer/',CreateCustomerView.as_view()),
    path('all_customer/',CustomerDetailView.as_view()),
    path('customer/<int:pk>/',CustomerDetailView.as_view()),

    #order_of_customer
    path('customer/<int:pk>/orderItem/',views.order_of_customer.as_view()),     

    #vendor
    path('vendor/<int:pk>/',VendorDetailView.as_view()),

      

]
