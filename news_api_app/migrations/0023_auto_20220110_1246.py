# Generated by Django 3.2 on 2022-01-10 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api_app', '0022_requestform_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requestform',
            name='category',
            field=models.CharField(blank=True, default='category', max_length=200),
        ),
        migrations.AlterField(
            model_name='requestform',
            name='content',
            field=models.TextField(blank=True, default='content', max_length=5000, null=True),
        ),
        migrations.AlterField(
            model_name='requestform',
            name='email',
            field=models.CharField(blank=True, default='email', max_length=200),
        ),
        migrations.AlterField(
            model_name='requestform',
            name='username',
            field=models.CharField(blank=True, default='username', max_length=200),
        ),
    ]
