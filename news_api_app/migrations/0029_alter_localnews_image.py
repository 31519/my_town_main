# Generated by Django 3.2 on 2022-04-26 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api_app', '0028_alter_localnews_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='localnews',
            name='image',
            field=models.ImageField(blank=True, default='/images/localnewsImage/newsPlaceholder.jpg', upload_to=''),
        ),
    ]
