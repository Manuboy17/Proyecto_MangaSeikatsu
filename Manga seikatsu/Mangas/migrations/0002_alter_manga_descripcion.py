# Generated by Django 4.1.2 on 2023-06-24 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mangas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manga',
            name='descripcion',
            field=models.TextField(max_length=1000),
        ),
    ]
