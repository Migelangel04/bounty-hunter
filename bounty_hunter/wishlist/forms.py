from django import forms
from .models import Wishlist

class WishlistForm(forms.ModelForm):
    class Meta:
        model = Wishlist
        fields = ['title', 'price', 'description', 'photo', 'owner']