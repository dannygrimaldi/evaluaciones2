from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    NIVEL_CHOICES = [
        ('AGENTE', 'Agente'),
        ('SUPERVISOR', 'Supervisor'),
        ('GERENTE', 'Gerente'),
        ('SUBDIRECTOR', 'Subdirector'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    nivel = models.CharField(max_length=50, choices=NIVEL_CHOICES, default='AGENTE')
    full_name = models.CharField(max_length=100)
    jefe_directo = models.OneToOneField('self', null=True, blank=True, on_delete=models.SET_NULL, related_name='subalternos')
    
    def __str__(self):
        return self.user.username

