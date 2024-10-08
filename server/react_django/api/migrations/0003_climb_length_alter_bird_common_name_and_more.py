# Generated by Django 5.1 on 2024-08-24 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_bird_wing_span'),
    ]

    operations = [
        migrations.AddField(
            model_name='climb',
            name='length',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='bird',
            name='common_name',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='climb',
            name='rating',
            field=models.CharField(max_length=1),
        ),
    ]
