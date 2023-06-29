from django.db import models

# Create your models here.
class Categoria(models.Model):  
    id_categoria= models.IntegerField()
    nombre_categoria = models.CharField(max_length=50, blank=False, null=True,default='Josei')

    def __str__(self):
        return self.nombre_categoria

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
    nombre_categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, db_column='nombre_categoria',default='Josei')





