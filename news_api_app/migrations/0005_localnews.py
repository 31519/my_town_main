# Generated by Django 3.2.9 on 2021-11-19 07:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('news_api_app', '0004_business_health_science'),
    ]

    operations = [
        migrations.CreateModel(
            name='LocalNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Lacal', max_length=200, null=True)),
                ('author', models.CharField(blank=True, default='Author', max_length=200, null=True)),
                ('title', models.TextField(blank=True, default='Title', null=True)),
                ('description', models.TextField(blank=True, default='Description', null=True)),
                ('url', models.CharField(blank=True, default='Url', max_length=300, null=True)),
                ('urlToImage', models.CharField(blank=True, default='UrlToImage', max_length=300, null=True)),
                ('publishedAt', models.CharField(blank=True, default='PublishedAt', max_length=300, null=True)),
                ('content', models.TextField(blank=True, default='content', null=True)),
                ('createAt', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
