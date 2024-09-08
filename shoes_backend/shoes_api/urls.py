from django.urls import path
from . import views
from .views import *

urlpatterns = [

    

    #shoes
    path('shoes/',shoesListView.as_view()),
    path('shoes/<int:pk>/',shoesView.as_view()),
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
    path('customer/register/', customer_register_view, name='register'),
    path('all_customer/',CreateCustomerView.as_view()),
    path('customer/<int:pk>/',CustomerDetailView.as_view()),


    #customer review
    path('product/<int:id>/customer-review/',CustomerReviewView.as_view()),
    path('product/customer-review/<str:pk>/delete/',CustomerReviewDeleteView.as_view()),


    #order_of_customer
    path('customer/<int:pk>/orderItem/',views.order_of_customer.as_view()),     

    #order status change url for vendor
    path('OrderStatus/',views.OrderStatusView.as_view()),  
    path('OrderStatus/<str:pk>/',views.OrderStatusUpdateView.as_view()),     
   


    #vendor
    path('vendor/<int:pk>/',VendorDetailView.as_view()),
    path('vendor/panel/',VendorPanelView),

    #category
    path('category',CategoryShoesView.as_view()),

      
    #scroll
    path('scroll/',scroll,name="shoes_scroll")

]
