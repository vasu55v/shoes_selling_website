from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.permissions import IsAdminUser

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

