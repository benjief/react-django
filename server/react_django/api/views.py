from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Bird, Climb
from .serializer import BirdSerializer, ClimbSerializer

@api_view(['GET'])
def get_birds(request):
    birds = Bird.objects.all()
    serializedData = BirdSerializer(birds, many=True).data
    return Response(serializedData)

@api_view(['GET'])
def get_climbs(request):
    climbs = Climb.objects.all()
    serializedData = ClimbSerializer(climbs, many=True).data
    return Response(serializedData)
    