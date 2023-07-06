from django.urls import path
from . import views

urlpatterns = [
    path('reporte_mangas/', views.reporte_mangas, name='reporte_mangas'),
    path('add/',views.addManga, name="addManga"),
    path('eliminarManga/<id>/', views.eliminarManga, name="eliminarManga"),
    path('modificarManga/<id>/', views.modificarManga, name="modificarManga"),
]