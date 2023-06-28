from django.urls import path
from . import views
from django.contrib.auth.forms import UserCreationForm

urlpatterns= [
    path('', views.index, name= 'index'),
    path('manga/<int:card_id>/', views.product_page, name= 'manga'),
    path('carrito/', views.carrito, name= 'carrito'),
    path('login/', views.login, name= 'login'),
    path('registro/', views.registro, name= 'registro')
]