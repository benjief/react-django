from django.db import models

class Bird(models.Model):
    common_name = models.CharField(max_length = 50)
    scientific_name = models.CharField(max_length = 50)
    wing_span = models.IntegerField
    
    def __str__(self):
        return self.common_name
    