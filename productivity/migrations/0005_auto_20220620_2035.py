# Generated by Django 3.2 on 2022-06-20 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productivity', '0004_auto_20220620_2008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisement',
            name='contact',
            field=models.IntegerField(blank=True, default=91, null=True),
        ),
        migrations.AlterField(
            model_name='resell',
            name='contact',
            field=models.IntegerField(blank=True, default=91, null=True),
        ),
    ]
