from dataclasses import fields
from django import forms
from django.forms import ModelForm
from .models import Manga

class AlumnoForm(ModelForm):

    class Meta:
        model=Manga
        fields=['rut' ,'nombre' ,'apellido_paterno' ,'apellido_materno' ,'fecha_nacimiento' ,'id_genero'  ,'telefono' ,'email' ,'direccion' ,'imagen' ,'activo']
        widgets={'fecha_nacimiento':forms.SelectDateWidget(years=range(1970,2100))}
