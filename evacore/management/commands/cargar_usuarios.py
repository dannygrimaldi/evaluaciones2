import csv
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from evacore.models import Profile

User = get_user_model()

class Command(BaseCommand):
    help = 'Carga usuarios desde un archivo CSV'

    def add_arguments(self, parser):
        parser.add_argument('archivo_csv', type=str, help='Ruta al archivo CSV')

    def handle(self, *args, **options):
        archivo_csv = options['archivo_csv']

        with open(archivo_csv, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                try:
                    # Agrega este print para ver el contenido de la fila
                    print(row)

                    # Obtén o crea el usuario
                    user, created = User.objects.get_or_create(
                        username=row['id'],
                        defaults={'password': row['contraseña']}
                    )

                    # Obtén o crea el perfil asociado y establece el nivel
                    profile, profile_created = Profile.objects.get_or_create(
                        user=user,
                        defaults={'full_name': row['full_name'], 'nivel': row['nivel']}
                    )

                    # Establecer al jefe directo si está presente
                    jefe_directo_id = row['id_jefedirecto']
                    if jefe_directo_id:
                        try:
                            jefe_directo = User.objects.get(username=jefe_directo_id).profile
                        except User.DoesNotExist:
                            jefe_directo = None
                        
                        if jefe_directo:
                            profile.jefe_directo = jefe_directo
                            profile.save()

                    self.stdout.write(self.style.SUCCESS(f'Usuario "{user.username}" creado con éxito.'))
                except Exception as e:
                    error_message = f'Error al crear usuario: {str(e)}'
                    self.stdout.write(self.style.ERROR(error_message))
                    raise e  # Agregamos un raise para que se imprima el traceback completo del error
