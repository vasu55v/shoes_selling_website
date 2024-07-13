# Generated by Django 4.2.7 on 2024-07-08 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_api', '0011_shoes_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoes',
            name='category_name',
            field=models.CharField(choices=[('BOOTS', 'BOOTS'), ('CASUALS SHOES ', 'CASUALS SHOES '), ('FLIP FLOPS', 'FLIP FLOPS'), ('FORMAL SHOES', 'FORMAL SHOES'), ('SANDALS & FLOATERS', 'SANDALS & FLOATERS'), ('SPORTS SHOES & SNEAKERS', 'SPORTS SHOES & SNEAKERS')], default='SPORTS SHOES & SNEAKERS', max_length=200),
        ),
    ]
