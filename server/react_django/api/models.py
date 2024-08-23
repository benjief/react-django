from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Bird(models.Model):
    common_name = models.CharField(max_length = 50)
    scientific_name = models.CharField(max_length = 50)
    wing_span = models.IntegerField
    
    def __str__(self):
        return self.common_name

class Climb(models.Model):
    name = models.CharField(max_length = 50)
    grade = models.CharField(max_length = 10)
    length = models.IntegerField
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    
    def __str__(self):
        return self.name