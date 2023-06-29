from django.shortcuts import get_object_or_404, render, redirect
from .models import Manga, Usuario
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User

def login_user(request):
    if request.method == "POST":
        username = request.POST['logUsuario']
        password = request.POST['password']
        User = authenticate(request, username = username, password = password)
        if User is not None:
            login(request, User)
            return redirect('index')
        else:
            messages.error(request, "Has tenido un error al iniciar sesión")
            return redirect('login_user')
    else:
        return render(request, 'Mangas/login.html')  
    
def logout_user(request):
    logout(request)
    return redirect('index')

def index(request):
    mangas = Manga.objects.all()

    context = {
        'mangas': mangas,
    }
    return render(request, 'Mangas/index.html', context)

def registro_view(request):
    if request.method != "POST":
        return render(request, 'Mangas/registro.html')
    else:
        nombre = request.POST.get('regNombre')
        email = request.POST.get('regEmail')
        contraseña = request.POST.get('regContrasena')

        # Crea un nuevo objeto de usuario y establece los valores
        user = User.objects.create_user(username=nombre, email=email, password=contraseña)
        user.first_name = nombre
        user.save()

        messages.success(request, "Cuenta creada exitosamente")

        return redirect('login')

    return render(request, 'Usuario/registro.html')

# def registro_view(request):
#     if request.method != 'POST':
#         return render(request, 'Mangas/registro.html')
#     else:
#         nombre = request.POST.get('regNombre')
#         email = request.POST.get('regEmail')
#         contraseña = request.POST.get('regContrasena')

#         usuario = Usuario(nombre=nombre, email=email, constrasena=contraseña)
#         usuario.save()

#         return redirect('login')


def product_page(request, card_id):
    manga = get_object_or_404(Manga, codigo=card_id)
    context = {
        'manga': manga
    }
    return render(request, 'Mangas/product_page.html', context)


def carrito(request):
    return render(request, 'Mangas/carrito.html')


def generar_estrellas(rating):
    rating_rounded = round(rating)
    estrellas_html = ''
    for _ in range(rating_rounded):
        estrellas_html += '<li class="fa fa-star"></li>'
    for _ in range(5 - rating_rounded):
        estrellas_html += '<li class="far fa-star"></li>'
    return estrellas_html




def registro(request):
    return render(request, 'Mangas/registro.html')
