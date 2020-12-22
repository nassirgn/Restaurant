from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    # path('join', index),
    # path('create', index),
    # path('join/1', index)
]