from django.contrib import admin
from .models import Categoria,Manga,Pedido,Usuario
# Register your models here.
admin.site.register(Categoria)
admin.site.register(Manga)
admin.site.register(Pedido)
admin.site.register(Usuario)
