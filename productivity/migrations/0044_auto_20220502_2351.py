# Generated by Django 3.2 on 2022-05-02 18:21

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('productivity', '0043_auto_20220429_2109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisement',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='celebrities',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jobs',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tourisms',
            name='content',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
    ]
