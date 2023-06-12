from django.shortcuts import render

# Create your views here.
def index(request):
    context={}
    return render(request,'Mangas/index.html',context)