# Generated by Django 3.1.5 on 2021-01-14 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='title',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]