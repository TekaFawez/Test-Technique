# Generated by Django 4.2.7 on 2023-11-09 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='paymentMethod',
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='static\\images\\placeholder.jpg', null=True, upload_to=''),
        ),
    ]
