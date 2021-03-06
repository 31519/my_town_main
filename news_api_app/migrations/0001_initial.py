# Generated by Django 3.2 on 2022-06-04 05:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='LocalNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, choices=[('EDUCATION', 'Education'), ('TECHNOLOGY', 'Technology'), ('ENVIRONMENT', 'Environment'), ('SCIENCE', 'Science'), ('POLITICS', 'Politics'), ('JOBS', 'Jobs'), ('Skill', 'Skill')], default='EDUCATION', max_length=200, null=True)),
                ('author', models.CharField(blank=True, default='Author', max_length=200, null=True)),
                ('title', models.TextField(blank=True, default='Title', null=True)),
                ('description', models.TextField(blank=True, default='Description', null=True)),
                ('url', models.CharField(blank=True, default='Url', max_length=500, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('publishedAt', models.CharField(blank=True, default='PublishedAt', max_length=300, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Technology',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Technology', max_length=200, null=True)),
                ('author', models.CharField(blank=True, default='Author', max_length=200, null=True)),
                ('title', models.TextField(blank=True, default='Title', null=True)),
                ('description', models.TextField(blank=True, default='Description', null=True)),
                ('url', models.CharField(blank=True, default='Url', max_length=500, null=True)),
                ('urlToImage', models.CharField(blank=True, default='UrlToImage', max_length=300, null=True)),
                ('publishedAt', models.CharField(blank=True, default='PublishedAt', max_length=300, null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('createAt', models.DateTimeField(auto_now_add=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Science',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Science', max_length=200, null=True)),
                ('author', models.CharField(blank=True, default='Author', max_length=200, null=True)),
                ('title', models.TextField(blank=True, default='Title', null=True)),
                ('description', models.TextField(blank=True, default='Description', null=True)),
                ('url', models.CharField(blank=True, default='Url', max_length=500, null=True)),
                ('urlToImage', models.CharField(blank=True, default='UrlToImage', max_length=300, null=True)),
                ('publishedAt', models.CharField(blank=True, default='PublishedAt', max_length=300, null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('createAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RequestForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(blank=True, default='username', max_length=200)),
                ('email', models.CharField(blank=True, default='email', max_length=200)),
                ('category', models.CharField(blank=True, default='category', max_length=200)),
                ('content', models.TextField(blank=True, default='content', max_length=5000, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flag', models.BooleanField(default=False)),
                ('username', models.CharField(blank=True, default='username', max_length=300, null=True)),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='')),
                ('firstName', models.CharField(blank=True, default='First Name', max_length=300, null=True)),
                ('lastName', models.CharField(blank=True, default='Last Name', max_length=300, null=True)),
                ('gender', models.CharField(blank=True, default='Gender', max_length=300, null=True)),
                ('email', models.CharField(blank=True, default='Email', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='State', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Address', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='country', max_length=300, null=True)),
                ('pincode', models.IntegerField(blank=True, null=True)),
                ('phoneNumber', models.CharField(blank=True, max_length=100, null=True)),
                ('profession', models.CharField(blank=True, default='Profession', max_length=300, null=True)),
                ('isRequested', models.BooleanField(default=False)),
                ('isApproved', models.BooleanField(default=False)),
                ('isApprovedJob', models.BooleanField(default=False)),
                ('isApprovedResseller', models.BooleanField(default=False)),
                ('isApprovedShop', models.BooleanField(default=False)),
                ('isApprovedAdvertise', models.BooleanField(default=False)),
                ('isApprovedCelebrities', models.BooleanField(default=False)),
                ('isApprovedTourisms', models.BooleanField(default=False)),
                ('isApprovedHotel', models.BooleanField(default=False)),
                ('isApprovedEvent', models.BooleanField(default=False)),
                ('isApprovedMeme', models.BooleanField(default=False)),
                ('isApprovedAll', models.BooleanField(default=False)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='LocalNewsGallary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='localnewsImage')),
                ('local', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='news_api_app.localnews')),
            ],
        ),
        migrations.CreateModel(
            name='Health',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Health', max_length=200, null=True)),
                ('author', models.CharField(blank=True, default='Author', max_length=200, null=True)),
                ('title', models.TextField(blank=True, default='Title', null=True)),
                ('description', models.TextField(blank=True, default='Description', null=True)),
                ('url', models.CharField(blank=True, default='Url', max_length=500, null=True)),
                ('urlToImage', models.CharField(blank=True, default='UrlToImage', max_length=300, null=True)),
                ('publishedAt', models.CharField(blank=True, default='PublishedAt', max_length=300, null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('createAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Business',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Business', max_length=200, null=True)),
                ('author', models.CharField(blank=True, default='Author', max_length=200, null=True)),
                ('title', models.TextField(blank=True, default='Title', null=True)),
                ('description', models.TextField(blank=True, default='Description', null=True)),
                ('url', models.CharField(blank=True, default='Url', max_length=500, null=True)),
                ('urlToImage', models.CharField(blank=True, default='UrlToImage', max_length=300, null=True)),
                ('publishedAt', models.CharField(blank=True, default='PublishedAt', max_length=300, null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('createAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
