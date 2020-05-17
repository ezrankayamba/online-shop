from django.shortcuts import render

from rest_framework import generics, permissions
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from . import serializers
from . import models
from rest_framework import viewsets


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    required_scopes = []
    serializer_class = serializers.CategorySerializer
    queryset = models.Category.objects.all()


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    required_scopes = []
    serializer_class = serializers.ProductSerializer
    queryset = models.Product.objects.all()


class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    required_scopes = []
    serializer_class = serializers.OrderSerializer
    queryset = models.Order.objects.all()


class OrderItemViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    required_scopes = []
    serializer_class = serializers.OrderItemSerializer
    queryset = models.OrderItem.objects.all()
