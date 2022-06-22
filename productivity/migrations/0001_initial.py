# Generated by Django 3.2 on 2022-06-04 05:07

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
            name='Celebrities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Category', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('url', models.CharField(blank=True, max_length=300, null=True)),
                ('contact', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, default='celebrityPlaceholder.png', upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Jobs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, choices=[('TEACHING', 'Teaching'), ('OFFICE', 'Office'), ('ACCOUNTANT', 'Accountant'), ('IT', 'IT'), ('MECHANICS', 'Mechanics'), ('ELECTRICIAN', 'Electrician'), ('PRIVATE', 'private'), ('FORCES', 'Forces'), ('HEALTH', 'Health'), ('BANKING', 'Banking')], default='OFFICE', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('startDate', models.DateTimeField(null=True)),
                ('endDate', models.DateTimeField(null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Resell',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, choices=[('TWO_WHEELER', 'Two wheeler'), ('CAR', 'Car'), ('ELECTRONIC', 'Electronic'), ('MOBILE', 'Mobile'), ('TV', 'Tv'), ('COMPUTER', 'Computer'), ('OTHERE', 'Othere')], default='TWO_WHEELER', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', models.TextField(blank=True, default='content', null=True)),
                ('price', models.IntegerField(blank=True, default=0, null=True)),
                ('available', models.BooleanField(default=True, null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Tourisms',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Category', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, default='91+ 000000xxxxx', max_length=100, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('title', models.TextField(blank=True, default='Best Tourisms Spot', null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('distance', models.IntegerField(blank=True, default=0, null=True)),
                ('hotel', models.IntegerField(blank=True, default=0, null=True)),
                ('resort', models.IntegerField(blank=True, default=0, null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('fees', models.IntegerField(blank=True, default=0, null=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TourismsGallary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='tourismsImage')),
                ('tourisms', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productivity.tourisms')),
            ],
        ),
        migrations.CreateModel(
            name='Shops',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Category', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, default='placeholder.png', upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', models.TextField(blank=True, default='content', null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ShopProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='placeholder.png', upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', models.TextField(blank=True, default='content', null=True)),
                ('price', models.IntegerField(blank=True, null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('shops', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productivity.shops')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ResellGallary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='resellGallaryImage')),
                ('resell', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productivity.resell')),
            ],
        ),
        migrations.CreateModel(
            name='OwnBusiness',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Category', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', models.TextField(blank=True, default='content', null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Meme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='JobsDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('postName', tinymce.models.HTMLField(blank=True, null=True)),
                ('qualification', tinymce.models.HTMLField(blank=True, null=True)),
                ('experience', tinymce.models.HTMLField(blank=True, null=True)),
                ('howToApply', tinymce.models.HTMLField(blank=True, null=True)),
                ('jobs', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productivity.jobs')),
            ],
        ),
        migrations.CreateModel(
            name='Hotels',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Category', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('district', models.CharField(blank=True, default='Jowai', max_length=600, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('town', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('distance', models.IntegerField(blank=True, default=0, null=True)),
                ('phoneNumber', models.IntegerField(blank=True, default=900000000, null=True)),
                ('rentFor', models.CharField(blank=True, default='Family', max_length=600, null=True)),
                ('floor', models.CharField(blank=True, default='1st', max_length=600, null=True)),
                ('rooms', models.IntegerField(blank=True, default=2, null=True)),
                ('bathrooms', models.IntegerField(blank=True, default=1, null=True)),
                ('toilet', models.IntegerField(blank=True, default=1, null=True)),
                ('roomArea', models.IntegerField(blank=True, default=0, null=True)),
                ('parking', models.BooleanField(default=False, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('title', models.TextField(blank=True, default='Best Tourisms Spot', null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('contact', models.CharField(blank=True, default='91+ 000000xxxxx', max_length=100, null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('fees', models.IntegerField(blank=True, default=0, null=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, choices=[('EDUCATION', 'Education'), ('TECHNOLOGY', 'Technology'), ('ENVIRONMENT', 'Environment'), ('SCIENCE', 'Science'), ('POLITICS', 'Politics'), ('JOBS', 'Jobs'), ('Skill', 'Skill')], default='EDUCATION', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, default='placeholder.png', upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', tinymce.models.HTMLField(blank=True, null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
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
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', upload_to='')),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Advertisement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, default='Category', max_length=300, null=True)),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', models.TextField(blank=True, default='content', null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('flag', models.IntegerField(blank=True, default=0, null=True)),
                ('slug', models.SlugField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
