from django.contrib import admin
from . import models


class CategoryModelAdmin(admin.ModelAdmin):
    list_display = ("name",)


class ProductModelAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "category")


admin.site.register(models.Category, CategoryModelAdmin)
admin.site.register(models.Product, ProductModelAdmin)
