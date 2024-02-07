from django.urls import path
from . import views

urlpatterns = [
    path('', views.store, name='store'),
    path('product/<int:pk>/', views.products, name='products'),
    path('category/<str:cat>', views.category, name='category'),
    path('wishlist/', views.wishlist, name='wishlist'),
    path('update-wishlist/', views.updateWishlist, name='update-wishlist'),
    path('cart/', views.cart, name='cart'),
    path('update-item/', views.updateItem, name='update-item'),
    path('checkout/', views.checkout, name='checkout'),
    path('process-order/', views.processOrder, name='process-order'),

    # path('profile/<slug:slug>/', views.userProfile, name='profile'),

    path('test/', views.testing, name='store'),

    # path('remove-product/<int:product_id>/', views.removeProduct, name='remove-product'),
]
