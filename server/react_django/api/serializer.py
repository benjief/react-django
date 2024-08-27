from rest_framework import serializers
from .models import Bird, Climb

class BirdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bird
        fields = '__all__'
        
    def validate(self, data):
        instance = self.instance
        
        # Check if common_name already exists
        if Bird.objects.filter(common_name__iexact=data.get('common_name', '').lower()).exclude(id=instance.id if instance else None).exists():
            raise serializers.ValidationError({"common_name": "A bird with this common name already exists."})
        
        # Ensure wingspan is valid (i.e. integer > 0)
        if data.get('wing_span', '') <= 0:
            raise serializers.ValidationError('Wingspan must be an integer greater than 0.')
        
        return data
class ClimbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Climb
        fields = '__all__'        
        
    def validate(self, data):
        instance = self.instance
        
        # Check if there is another climb with the same name and grade
        if Climb.objects.filter(name__iexact=data.get('name', '').lower(), grade=data.get('grade')).exclude(id=instance.id if instance else None).exists():
            raise serializers.ValidationError({
                "error": "A climb with this name and grade already exists."
            })
            
        # Ensure climb length is valid (i.e. integer > 0)
        if data.get('length', '') <= 0:
            raise serializers.ValidationError('Length must be an integer greater than 0.')   
        
        return data
        