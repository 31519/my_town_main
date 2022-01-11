# Generated by Django 3.2 on 2022-01-07 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productivity', '0010_shopproduct'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisement',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='celebrities',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='hotels',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='jobs',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='ownbusiness',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='resell',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='shops',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='tourisms',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', upload_to=''),
        ),
    ]