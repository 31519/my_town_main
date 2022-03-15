# Generated by Django 3.2 on 2022-01-18 04:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('productivity', '0017_auto_20220113_1330'),
    ]

    operations = [
        migrations.CreateModel(
            name='TourismsGallary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='tourismsImage')),
                ('tourisms', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productivity.tourisms')),
            ],
        ),
        migrations.CreateModel(
            name='CelebritiesGallary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='celebritiesImage')),
                ('celebrity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productivity.celebrities')),
            ],
        ),
    ]
