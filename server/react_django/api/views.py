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
    
    if Bird.objects.filter(common_name__iexact=data['common_name'].lower()).exists():
        return Response({"error": "A bird with this common name already exists."}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = BirdSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def bird_detail(request, pk):
    try:
        bird = Bird.objects.get(pk=pk)
    except Bird.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        bird.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = BirdSerializer(bird, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print("Serializer invalid.")
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
    
    if Climb.objects.filter(name__iexact=data.get('name', '').lower(), grade=data.get('grade')).exists():
        return Response({"error": "A climb with this name and grade already exists."}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = ClimbSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE'])
def climb_detail(request, pk):
    try:
        climb = Climb.objects.get(pk=pk)
    except Climb.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        climb.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = ClimbSerializer(climb, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print("Serializer invalid.")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)