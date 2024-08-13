# Generated by Django 4.2.14 on 2024-08-12 17:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wishlist', '0001_initial'),
        ('favors', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='favor',
            name='total_owed_wishlist',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='wishlist.wishlist'),
        ),
    ]
