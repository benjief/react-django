from django.urls import path
from .views import get_birds, add_bird, bird_detail, get_climbs, add_climb, climb_detail

urlpatterns = [
    path('birds/', get_birds, name='get_birds'),
    path('birds/add/', add_bird, name='add_bird'),
    path('birds/<int:pk>/', bird_detail, name='bird_detail'),
    path('climbs/', get_climbs, name='get_climbs'),
    path('climbs/add/', add_climb, name='add_climb'),
    path('climbs/<int:pk>/', climb_detail, name='climb_detail'),
]