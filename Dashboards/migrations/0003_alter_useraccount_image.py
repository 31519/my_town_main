# Generated by Django 3.2 on 2022-06-05 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dashboards', '0002_alter_useraccount_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='image',
            field=models.ImageField(blank=True, default='default/placeholder.png', upload_to=''),
        ),
    ]