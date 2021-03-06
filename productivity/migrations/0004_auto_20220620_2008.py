# Generated by Django 3.2 on 2022-06-20 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productivity', '0003_auto_20220617_1236'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisement',
            name='approvedDate',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='advertisement',
            name='contact',
            field=models.IntegerField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='advertisement',
            name='expireDate',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jobs',
            name='endDate',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jobs',
            name='startDate',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='resell',
            name='approvedDate',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='resell',
            name='contact',
            field=models.IntegerField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='resell',
            name='expireDate',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
