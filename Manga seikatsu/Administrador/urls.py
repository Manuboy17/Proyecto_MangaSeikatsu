from django.urls import path
from . import views

urlpatterns = [
    path('admi/reporte_mangas/', views.reporte_mangas, name='reporte_mangas'),
    path('admi/add/',views.addManga, name="addManga"),
    path('eliminarManga/<id>/', views.eliminarManga, name="eliminarManga"),
    path('admi/modificarManga/<id>/', views.modificarManga, name="modificarManga"),
]