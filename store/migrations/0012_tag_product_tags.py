# Generated by Django 4.2.6 on 2024-03-19 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0011_rename_address_shippingdetails_address_level_1_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='tags',
            field=models.ManyToManyField(to='store.tag'),
        ),
    ]
