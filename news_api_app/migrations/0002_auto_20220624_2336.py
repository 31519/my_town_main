# Generated by Django 3.2 on 2022-06-24 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='technology',
            old_name='createAt',
            new_name='createdAt',
        ),
        migrations.AddField(
            model_name='technology',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]