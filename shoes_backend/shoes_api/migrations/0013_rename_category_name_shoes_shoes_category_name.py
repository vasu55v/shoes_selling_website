# Generated by Django 4.2.7 on 2024-07-08 15:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_api', '0012_alter_shoes_category_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shoes',
            old_name='category_name',
            new_name='shoes_category_name',
        ),
    ]
