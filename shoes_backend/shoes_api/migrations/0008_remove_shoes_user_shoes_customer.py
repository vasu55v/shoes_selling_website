# Generated by Django 4.2.7 on 2024-07-03 08:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_api', '0007_customer_profile_photo_vendor_profile_photo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shoes',
            name='user',
        ),
        migrations.AddField(
            model_name='shoes',
            name='customer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='shoes_api.customer'),
            preserve_default=False,
        ),
    ]
