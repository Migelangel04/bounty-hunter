from django.urls import path
#from .views import WishlistView, AddWishlistItemView, RemoveWishlistItemView
from . import views

urlpatterns = [
    path('', views.view_wishlist, name='view_wishlist'),
    path('add/', views.add_wishlist_item, name='add_wishlist_item'),
    path('remove/<int:wishlist_id>/', views.remove_wishlist_item, name='remove_wishlist_item'),
    path('pic/<int:wishlist_id>/', views.get_wishlist_pic, name='get_wishlist_pic'),
    path('pic/edit/<int:wishlist_id>/', views.edit_wishlist_pic, name='edit_wishlist_pic'),
]