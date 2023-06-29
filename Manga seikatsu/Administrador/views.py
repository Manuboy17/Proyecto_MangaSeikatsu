from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render,redirect
from Mangas.models import Manga,Categoria
# Create your views here.


def reporte_mangas(request):
    mangas = Manga.objects.all()
    contexto = {'mangas': mangas}
    return render(request, 'Administrador/reporte_mangas.html', contexto)




def addManga(request):
    
    if request.method != 'POST':
        return render(request, 'Administrador/addManga.html')
    else:
        # Obtener los datos del formulario
        titulo = request.POST.get('titulo')
        rating= request.POST.get('rating')
        editorial = request.POST.get('editorial')
        precio = request.POST.get('precio')
        autor = request.POST.get('autor')
        codigo = request.POST.get('codigo')
        formato = request.POST.get('formato')
        tamaño = request.POST.get('tamaño')
        paginas = request.POST.get('paginas')
        descripcion = request.POST.get('descripcion')
        imagen1 = request.FILES.get('imagen1')
        imagen2 = request.FILES.get('imagen2')
        nombre_categoria = request.POST.get('nombre_categoria')

        # Crear una instancia del modelo Manga con los datos obtenidos
        if nombre_categoria is None:
        # Obtener una categoría por defecto
            categoria_por_defecto = get_object_or_404(Categoria, nombre_categoria="Josei")

        
            nombre_categoria = categoria_por_defecto

        
        manga = Manga(
            codigo=codigo,
            titulo=titulo,
            rating=rating,
            editorial=editorial,
            precio=precio,
            autor=autor,
            formato=formato,
            tamanio=tamaño,
            paginas=paginas,
            descripcion=descripcion,
            pic1=imagen1,
            pic2=imagen2,
            nombre_categoria=nombre_categoria

        )

        manga.save()
        # Redirigir a una página de éxito o a donde desees
        return redirect('reporte_mangas')
    
def eliminarManga(request, id):
    manga = get_object_or_404(Manga, codigo=id)
    manga.delete()
    return redirect(to="reporte_mangas")

def modificarManga(request, id):
    manga = get_object_or_404(Manga, codigo=id)
    context = {
        'manga': manga
    }
    if request.method != 'POST':
        return render(request, 'Administrador/modificar.html', context)
    else:
        # Obtain the form data
        titulo = request.POST.get('titulo')
        rating = request.POST.get('rating')
        editorial = request.POST.get('editorial')
        precio = request.POST.get('precio')
        autor = request.POST.get('autor')
        codigo = request.POST.get('codigo')
        formato = request.POST.get('formato')
        tamaño = request.POST.get('tamaño')
        paginas = request.POST.get('paginas')
        descripcion = request.POST.get('descripcion')
        imagen1 = request.FILES.get('imagen1')
        imagen2 = request.FILES.get('imagen2')
        nombre_categoria = request.POST.get('nombre_categoria')
        
        try:
    # Intenta obtener la instancia de Categoria
            categoria_id = int(nombre_categoria)
            categoria = Categoria.objects.get(id=categoria_id)
        except (Categoria.DoesNotExist, ValueError):
    # Maneja el caso en el que no se encuentra la Categoria o el valor no es válido
            categoria = None

        manga.codigo = codigo
        manga.titulo = titulo
        if rating:
            manga.rating = rating
        manga.editorial = editorial
        manga.precio = precio
        manga.autor = autor
        manga.formato = formato
        manga.tamanio = tamaño
        manga.paginas = paginas
        manga.descripcion = descripcion
        manga.pic1 = imagen1
        manga.pic2 = imagen2
        if categoria:
            manga.nombre_categoria = categoria
            manga.save()

            context['manga'] = manga

            return render(request, 'Administrador/modificar.html', context)
        else:
            # Maneja el caso en el que no se encuentra la Categoria
            return HttpResponse('La categoría no existe.' )
