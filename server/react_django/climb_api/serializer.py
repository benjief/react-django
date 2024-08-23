from rest_framework import serializers
from .models import Climb

class ClimbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Climb
        fields = '__all__'