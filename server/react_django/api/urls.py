from django.urls import path
from .views import get_birds, add_bird, get_climbs, add_climb

urlpatterns = [
    path('birds/', get_birds, name='get_birds'),
    path('birds/add/', add_bird, name='add_bird'),
    path('climbs/', get_climbs, name='get_climbs'),
    path('climbs/add', add_climb, name='add_climbs'),
]