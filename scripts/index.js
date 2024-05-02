// Definir la clase Activity antes de su uso
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Clase Repository para gestionar las actividades
class Repository {
  constructor() {
    this.actividades = [];
    this.actividadesContainer = document.getElementById(
      "actividades-container"
    );
    this.nextId = 1; // Inicializar el ID para las actividades

    // Agregar evento click al botón "Enviar"
    const buttonEnviar = document.getElementById("button");
    buttonEnviar.addEventListener("click", this.agregarTarjeta.bind(this));
    // mensaje no hay imagenes
    this.mensajeNoImagenes = document.getElementById("mensajeNoImagenes");
  }

  // Función para validar una URL
  validarURL(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  }

  addActivity(title, description, imgUrl) {
    const nuevaActividad = new Activity(
      this.nextId++,
      title,
      description,
      imgUrl
    );
    this.actividades.push(nuevaActividad);
    return nuevaActividad; // se devuelve la nueva actividad añadida
  }

  actualizarContenedor() {
    this.actividadesContainer.innerHTML = ""; // Limpiar el contenido existente

    // Iterar sobre el array de actividades y crear las tarjetas
    this.actividades.forEach((actividad, index) => {
      const nuevoDiv = document.createElement("div");
      nuevoDiv.classList.add("myCard");

      // Agregar console.log para verificar la URL de la imagen
      console.log(actividad.imgUrl);

      nuevoDiv.innerHTML = `
  <div class="innerCard">
    <div class="frontSide">
      <div class="description">
        <div>
          <img src="${actividad.imgUrl}" alt="${actividad.title}" class="actividad-imagen">
        </div>
      </div>
    </div>
    <div class="backSide">
      <h2>${actividad.title}</h2>
      <p>${actividad.description}</p>
      <button class="eliminar" data-index="${index}">x</button> <!-- Botón de eliminar con atributo data-index -->
    </div>
  </div>
`;

      this.actividadesContainer.appendChild(nuevoDiv);
    });

    // Agregar evento click a los botones de eliminar
    const botonesEliminar = document.querySelectorAll(".eliminar");
    botonesEliminar.forEach((boton) => {
      boton.addEventListener("click", (event) => {
        const index = event.target.dataset.index; // Obtener el índice de la actividad a eliminar
        this.eliminarTarjeta(index);
      });
    });
  }

  eliminarTarjeta(index) {
    this.actividades.splice(index, 1); // Eliminar la tarjeta del array
    this.actualizarContenedor(); // Actualizar el contenido del contenedor
  }

  agregarTarjeta() {
    const title = document.getElementById("title").value;
    const descripcion = document.getElementById("descripcion").value;
    const imgUrl = document.getElementById("imgUrl").value;

    // Verificar si los campos están vacíos o la URL no es válida
    if (!title || !descripcion || !imgUrl || !this.validarURL(imgUrl)) {
      alert(
        "Por favor, proporciona una URL válida y completa todos los campos."
      );
      return;
    }

    // Agregar la nueva tarjeta
    this.addActivity(title, descripcion, imgUrl);

    // Actualizar el contenido del contenedor de actividades
    this.actualizarContenedor();

    // Limpiar los campos del formulario después de agregar la actividad
    document.getElementById("title").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("imgUrl").value = "";
  }
}

// Crear una instancia de la clase Repository después de su definición
const repo = new Repository();

// Crear Jasmine

module.exports = {
  Activity,
  Repository,
};
