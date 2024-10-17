from PIL import Image
import os

def convert_to_webp(input_image_path, output_image_path):
    try:
        # Abrir la imagen original
        image = Image.open(input_image_path)
        
        # Convertir y guardar como .webp
        image.save(output_image_path, format="webp")
        print(f"Imagen convertida y guardada en {output_image_path}")
    
    except Exception as e:
        print(f"Error al convertir la imagen: {e}")

# Ejemplo de uso
input_path = "ruta_de_tu_imagen.png"  # Cambia esta ruta por tu imagen .png o .jpg
output_path = "nueva_imagen.webp"     # Ruta de salida para la imagen .webp

convert_to_webp(input_path, output_path)
