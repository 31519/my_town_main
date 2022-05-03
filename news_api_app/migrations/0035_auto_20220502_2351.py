# Generated by Django 3.2 on 2022-05-02 18:21

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api_app', '0034_auto_20220502_2052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='health',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='science',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
    ]
