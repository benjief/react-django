from django.urls import path
from .views import get_birds, get_climbs

urlpatterns = [
    path('birds/', get_birds, name='get_birds'),
    path('birds/', get_climbs, name='get_climbs')
]