from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre = models.CharField(max_length=30)
    email = models.CharField(unique=True,max_length=60,blank=True,null=True)
    constrasena =  models.CharField(max_length=20)

class Categoria(models.Model):  
    id_categoria= models.IntegerField(db_column='id_categoria',default=0,primary_key=True)
    nombre_categoria = models.CharField(max_length=50, blank=False, null=False)

class Manga(models.Model):
    codigo =  models.IntegerField(primary_key=True)
    titulo =  models.CharField(max_length = 60)
    rating = models.IntegerField()
    editorial = models.CharField(max_length = 60)
    precio = models.IntegerField()
    autor = models.CharField(max_length = 60)
    formato = models.CharField(max_length = 60)
    tamanio = models.CharField(max_length = 20)
    paginas = models.IntegerField()
    descripcion = models.TextField(max_length = 1000)
    pic1 = models.ImageField(upload_to='mangas', null=True)
    pic2 = models.ImageField(upload_to='mangas', null=True)
    id_categoria = models.ForeignKey('categoria', on_delete=models.CASCADE, db_column='id_categoria')

class Pedido(models.Model):
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)





