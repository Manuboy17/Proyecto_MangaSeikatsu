from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre = models.CharField(30)
    email = models.CharField(60)
    constrasena =  models.CharField(20)

class Categoria(models.Model):
    nombre_categoria = models.CharField(50)

class Manga(models.Model):
    titulo =  models.CharField(max_length = 60)
    codigo =  models.IntegerField(max_length = 20)
    rating = models.IntegerField(max_length = 1)
    editorial = models.CharField(max_length = 60)
    precio = models.IntegerField(max_length = 10)
    autor = models.CharField(max_length = 60)
    formato = models.CharField(max_length = 60)
    tamanio = models.CharField(max_length = 20)
    paginas = models.IntegerField(max_length = 6)
    descripcion = models.TextField(max_length = 200)
    pic1 = models.BinaryField()
    pic2 = models.BinaryField
    nombre_categoria = models.ForeignKey(categoria, on_delete=models.CASCADE)

class Pedido(models.Model):
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)




