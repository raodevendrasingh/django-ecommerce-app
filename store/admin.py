from django.contrib import admin
from .models import *

# CREDENTIALS
# admin
# admin@aniwatch.com
# admin1234

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingDetails)
