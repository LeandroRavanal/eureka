# Imagen en un Array usando React

Navegando en la web, me crucé con una consultora de software que se promocionaba a través de una URL y al ingresar nos devolvía un json que aparentaba ser una imagen. Sin saber que decía, me pareció interesante encarar el ejercicio usando React.

> La idea de este ejercicio es 
> consumir un servicio básico 
> que retorna una imagen 
> en formato de array de 1s y 0s.

### Código

Creamos los componentes sin estado: Imagen, Linea y Pixel y en el componente principal App realizamos el consumo del servicio, manejando los estados cargando y error.

En la carpeta scripts está el servicio Rest de la imagen, hecho en python, por si en un futuro el servidor original deja de estar disponible. 