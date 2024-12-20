from django.urls import path
from . import views
from .views import *

urlpatterns = [

    #shoes
    path('shoes/',shoesListView.as_view()),
    path('shoes/<int:pk>/',shoesView.as_view()),
    path('shoes_create/',shoesCreateView.as_view()),
    path('shoes-update/<int:pk>/',ShoesUpdateViewSet.as_view()),
    path('shoes-delete/<int:pk>/',ShoesDeleteViewSet.as_view()),

    path('shoes_data/',shoes_data),
    path('shoes_data/<str:category>/',AllCategoryShoesView),
    path('shoes_data/shoe/<str:shoes_id>/',single_shoes_data),

    path('shoes_data/category/<str:category>/',AllShoesCategoryShoesView),

    #color&photo
    path('color_photo/',ColorAndPhotosListView.as_view()),
    path('color_photo_create/',ColorAndPhotosCreateView.as_view()),
    path('color_photo_shoes/<int:pk>/',ShoesColorAndPhotosListView.as_view()),
    path('color_photo_update/<int:pk>/',ColorAndPhotosUpdateViewSet.as_view()),
    path('color_photo_delete/<int:pk>/',ColorAndPhotosDeleteViewSet.as_view()),

    #user
    path('user/<int:pk>/',UserDetailView.as_view()),

    #customer
    path('customer/',CreateCustomerView.as_view()),
    path('customer/register/', customer_register_view, name='register'),
    path('all_customer/',CreateCustomerView.as_view()),
    path('customer/<int:pk>/',CustomerDetailView.as_view()),
    path('customer/<int:pk>/update/',CustomerDetailUpdateView.as_view()),
    path('customer/<int:pk>/delete/',CustomerDetailDeleteView.as_view()),
    path('customer/changePassword/<int:customer_id>/',visitorUser_password_change),

    #customer review
    path('product/<int:id>/customer-review/',CustomerReviewView.as_view()),
    path('product/customer-review/<str:pk>/delete/',CustomerReviewDeleteView.as_view()),

    #order
    path('order/',OrderView.as_view()),
    #order_of_customer
    path('customer/<int:pk>/orderItem/',views.order_of_customer.as_view()),  
    path('customer/<int:id>/order/<int:pk>/delete/',views.OrderDeleteView.as_view()),    
    path('customer/order/create/',customer_order_view),   

    #order status change url for vendor
    path('OrderStatus/',views.OrderStatusView.as_view()),  
    path('OrderStatus/<str:pk>/',views.OrderStatusUpdateView.as_view()),     
   
    #vendor
    path('vendor/<int:pk>/',VendorDetailView.as_view()),
    path('vendor/panel/',VendorPanelView),
    path('vendor/login/',VisitorUser_login),

    #category
    path('category/',CategoryShoesView.as_view()),
    path('shoes_category/',ShoesCategoryView.as_view()),
      
    #scroll
    path('scroll/',scroll,name="shoes_scroll")

]
