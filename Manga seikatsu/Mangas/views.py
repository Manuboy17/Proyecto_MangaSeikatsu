from django.shortcuts import get_object_or_404, render
from .models import Manga

# Create your views here.
def index(request):
    mangas= Manga.objects.all()
    

    context={
        'mangas': mangas,
    }
    return render(request,'Mangas/index.html',context)

def product_page(request,card_id):
    manga= get_object_or_404(Manga, codigo=card_id)
    context={
        'manga': manga
    }
    return render(request,'Mangas/product_page.html',context)


def carrito(request):
    return render(request,'Mangas/carrito.html')

def generar_estrellas(rating):
    rating_rounded = round(rating)  
    estrellas_html = ''
    for _ in range(rating_rounded):
        estrellas_html += '<li class="fa fa-star"></li>'  
    for _ in range(5 - rating_rounded):
        estrellas_html += '<li class="far fa-star"></li>'  
    return estrellas_html

