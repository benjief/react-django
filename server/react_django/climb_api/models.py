from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Climb(models.Model):
    name = models.CharField(max_length = 50)
    grade = models.CharField(max_length = 10)
    length = models.IntegerField # length in meters
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)]) # 0-5 stars
    
    def __str__(self):
        return self.name
    
