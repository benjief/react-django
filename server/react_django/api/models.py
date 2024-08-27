from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Bird(models.Model):
    common_name = models.CharField(max_length = 50, unique=True)
    scientific_name = models.CharField(max_length = 50)
    wing_span = models.IntegerField()
    
    # Ensure proper capitalization for common and scientific names
    def save(self, *args, **kwargs):
        self.common_name = self.common_name.title() 
        
        parts = self.scientific_name.split()
        if len(parts) > 1:
            parts[0] = parts[0].capitalize()
            parts[1:] = [part.lower() for part in parts[1:]]
        self.scientific_name = ' '.join(parts)
        
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.common_name

class Climb(models.Model):
    name = models.CharField(max_length = 50)
    grade = models.CharField(max_length = 10)
    length = models.IntegerField()
    rating = models.IntegerField()
    
    # Ensure consistent capitalization for climb names
    def save(self, *args, **kwargs):
        self.name = self.name.title() 
        
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name