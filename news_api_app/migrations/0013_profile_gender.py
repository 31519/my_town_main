# Generated by Django 3.2.9 on 2021-12-08 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api_app', '0012_auto_20211206_1314'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='gender',
            field=models.CharField(blank=True, default='Gender', max_length=300, null=True),
        ),
    ]
