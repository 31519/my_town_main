# Generated by Django 3.2 on 2022-06-12 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dashboards', '0007_auto_20220611_0833'),
    ]

    operations = [
        migrations.AddField(
            model_name='detailobjectviewed',
            name='date',
            field=models.CharField(blank=True, max_length=220, null=True),
        ),
        migrations.AddField(
            model_name='objectviewed',
            name='date',
            field=models.CharField(blank=True, max_length=220, null=True),
        ),
    ]