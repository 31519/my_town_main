# Generated by Django 3.2 on 2022-10-07 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api_app', '0005_alter_localnews_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='technology',
            name='description',
        ),
        migrations.AlterField(
            model_name='localnews',
            name='title',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='technology',
            name='title',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]