# Generated by Django 3.2.9 on 2021-11-19 11:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Jobs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(blank=True, default='India', max_length=300, null=True)),
                ('state', models.CharField(blank=True, default='Meghalaya', max_length=300, null=True)),
                ('address', models.CharField(blank=True, default='Jowai', max_length=300, null=True)),
                ('contact', models.CharField(blank=True, default='contact', max_length=300, null=True)),
                ('image', models.ImageField(blank=True, default='image', max_length=300, upload_to='')),
                ('title', models.TextField(blank=True, default='title', null=True)),
                ('content', models.TextField(blank=True, default='content', null=True)),
                ('isApproved', models.BooleanField(default=False, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
