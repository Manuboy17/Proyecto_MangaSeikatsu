from django.urls import path
from . import views

urlpatterns= [
    path('', views.index, name='index'),
    path('manga/<int:card_id>/', views.product_page, name='manga'),
    path('carrito/', views.carrito, name='carrito')
]