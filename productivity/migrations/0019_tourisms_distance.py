# Generated by Django 3.2 on 2022-01-18 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productivity', '0018_celebritiesgallary_tourismsgallary'),
    ]

    operations = [
        migrations.AddField(
            model_name='tourisms',
            name='distance',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]