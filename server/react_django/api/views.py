from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Bird, Climb
from .serializer import BirdSerializer, ClimbSerializer

# Bird API Endpoints
@api_view(['GET'])
def get_birds(request):
    birds = Bird.objects.all()
    serializedData = BirdSerializer(birds, many=True).data
    return Response(serializedData)

@api_view(['POST'])
def add_bird(request):
    data = request.data
    serializer = BirdSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
# Climb API Endpoints    
@api_view(['GET'])
def get_climbs(request):
    climbs = Climb.objects.all()
    serializedData = ClimbSerializer(climbs, many=True).data
    return Response(serializedData)

@api_view(['POST'])
def add_climb(request):
    data = request.data
    serializer = ClimbSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    