# Generated by Django 3.2 on 2022-04-26 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productivity', '0023_banner_flag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisement',
            name='image',
            field=models.ImageField(blank=True, default='/advertisePlaceholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='celebrities',
            name='image',
            field=models.ImageField(blank=True, default='/celebrityPlaceholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='jobs',
            name='image',
            field=models.ImageField(blank=True, default='/jopPlaceholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='tourisms',
            name='image',
            field=models.ImageField(blank=True, default='/tourismsPlaceholder.png', upload_to=''),
        ),
    ]
