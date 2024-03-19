from django.contrib import admin
from .models import *

class ProductAdmin(admin.ModelAdmin):
    filter_horizontal = ('tags',)  # This makes the tags field a filter horizontal in the admin form


admin.site.register(Customer)
admin.site.register(Product, ProductAdmin)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingDetails)
admin.site.register(Wishlist)
admin.site.register(WishlistItem)
