import os
from tkinter import Tk, Label, Button, filedialog, StringVar, OptionMenu, Listbox, Scrollbar, Frame
from PIL import Image

def select_images():
    # Abrir un cuadro de diálogo para seleccionar múltiples imágenes
    file_paths = filedialog.askopenfilenames(
        filetypes=[("Image files", "*.png;*.jpg;*.jpeg;*.bmp;*.tiff")])
    
    if file_paths:
        image_listbox.delete(0, 'end')  # Limpiar la lista
        selected_images.clear()  # Limpiar la lista interna
        for file_path in file_paths:
            image_listbox.insert('end', file_path)  # Añadir cada imagen a la lista visualmente
            selected_images.append(file_path)  # Guardar la ruta en la lista interna

def convert_images():
    if not selected_images:
        label.config(text="Selecciona imágenes primero")
        return
    
    selected_format = format_var.get()
    
    for input_image_path in selected_images:
        # Obtener la extensión actual y evitar convertir al mismo formato
        current_extension = os.path.splitext(input_image_path)[1].lower()
        if current_extension == f".{selected_format.lower()}":
            continue  # Saltar si el formato es el mismo
        
        # Crear la ruta de salida con el mismo nombre pero diferente extensión
        output_image_path = os.path.splitext(input_image_path)[0] + f".{selected_format.lower()}"
        
        # Convertir la imagen
        convert_image(input_image_path, output_image_path, selected_format)
    
    label.config(text="Imágenes convertidas correctamente")

def convert_image(input_image_path, output_image_path, format_selected):
    try:
        # Abrir la imagen original
        image = Image.open(input_image_path)
        
        # Convertir y guardar en el formato seleccionado
        image.save(output_image_path, format=format_selected)
    
    except Exception as e:
        label.config(text=f"Error: {e}")

# Crear la ventana principal de la aplicación
window = Tk()
window.title("Convertir imágenes a otro formato")
window.geometry("600x400")
window.config(bg='#f0f0f0')

# Lista para almacenar las rutas de las imágenes seleccionadas
selected_images = []

# Etiqueta principal
label = Label(window, text="Selecciona las imágenes para convertir", font=("Helvetica", 14), bg='#f0f0f0')
label.pack(pady=10)

# Frame para organizar el listbox y scrollbar
frame = Frame(window)
frame.pack(pady=10)

# Listbox para mostrar las imágenes seleccionadas
image_listbox = Listbox(frame, width=60, height=10, selectmode="multiple")
image_listbox.pack(side="left", fill="y")

# Scrollbar para la listbox
scrollbar = Scrollbar(frame, orient="vertical")
scrollbar.config(command=image_listbox.yview)
scrollbar.pack(side="right", fill="y")

image_listbox.config(yscrollcommand=scrollbar.set)

# Botón para seleccionar imágenes
select_button = Button(window, text="Seleccionar Imágenes", command=select_images, bg='#4CAF50', fg='white', font=("Helvetica", 12))
select_button.pack(pady=10)

# Variables para seleccionar el formato de salida
format_var = StringVar(window)
format_var.set("webp")  # Formato por defecto

# Lista de formatos permitidos
formats = ["webp", "png", "jpg", "jpeg", "bmp", "tiff"]

# Menú desplegable para elegir el formato
format_menu = OptionMenu(window, format_var, *formats)
format_menu.pack(pady=10)

# Botón para convertir las imágenes seleccionadas
convert_button = Button(window, text="Convertir Imágenes", command=convert_images, bg='#008CBA', fg='white', font=("Helvetica", 12))
convert_button.pack(pady=10)

# Botón para salir de la aplicación
exit_button = Button(window, text="Salir", command=window.quit, bg='#f44336', fg='white', font=("Helvetica", 12))
exit_button.pack(pady=10)

# Ejecutar la ventana
window.mainloop()
