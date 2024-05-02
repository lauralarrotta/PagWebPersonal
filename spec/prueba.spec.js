// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

const { Repository, Activity } = require("../scripts/index");

// Definir las pruebas usando Jasmine
//probar las clases Repository y Activity.
describe("Repository and Activity Classes", () => {
  let repo;

  beforeEach(() => {
    // Crear una instancia nueva del Repository antes de cada prueba
    repo = new Repository();
  });

  // creamos una nueva instancia de Activity y verificamos que sus propiedades sean las esperadas.

  it("should create a new Activity instance", () => {
    const activity = new Activity(
      1,
      "Test Activity",
      "Description",
      "https://example.com/image.jpg"
    );
    expect(activity.id).toBe(1);
    expect(activity.title).toBe("Test Activity");
    expect(activity.description).toBe("Description");
    expect(activity.imgUrl).toBe("https://example.com/image.jpg");
  });

  // Esta prueba verifica que al agregar una actividad al repositorio, la longitud del array actividades aumenta en uno y que la actividad agregada está en la posición correcta.
  it("should add an activity to the repository", () => {
    const activity = repo.addActivity(
      "Test Activity",
      "Description",
      "https://example.com/image.jpg"
    );
    expect(repo.actividades.length).toBe(1);
    expect(repo.actividades[0]).toBe(activity);
  });

  //En esta prueba, agregamos una actividad al repositorio y luego la eliminamos. Verificamos que la longitud del array actividades sea cero después de eliminar la actividad.
  it("should remove an activity from the repository", () => {
    const activity = repo.addActivity(
      "Test Activity",
      "Description",
      "https://example.com/image.jpg"
    );
    repo.eliminarTarjeta(0); // Eliminar la primera actividad agregada
    expect(repo.actividades.length).toBe(0);
  });

  // En esta prueba, agregamos actividades al repositorio y luego llamamos al método actualizarContenedor() para actualizar la interfaz de usuario. Verificamos que el contenedor tenga el mismo número de elementos que actividades en el repositorio y que el mensaje "No hay imágenes" no se muestre.
  it("should update the container with activities", () => {
    repo.addActivity(
      "Activity 1",
      "Description 1",
      "https://example.com/image1.jpg"
    );
    repo.addActivity(
      "Activity 2",
      "Description 2",
      "https://example.com/image2.jpg"
    );

    // Llamar al método actualizarContenedor para actualizar la vista
    repo.actualizarContenedor();

    // Verificar que las tarjetas se han creado en el contenedor
    const container = document.getElementById("actividades-container");
    expect(container.children.length).toBe(repo.actividades.length);

    // Verificar que el mensaje de "No hay imágenes" no se muestre cuando hay actividades
    const mensajeNoImagenes = document.getElementById("mensajeNoImagenes");
    expect(mensajeNoImagenes.style.display).toBe("none");
  });

  //Esta prueba verifica que el método validarURL() funcione correctamente al validar una URL válida e invalida.

  it("should validate a valid URL", () => {
    const validUrl = "https://example.com/image.jpg";
    const invalidUrl = "invalid-url";

    expect(repo.validarURL(validUrl)).toBe(true);
    expect(repo.validarURL(invalidUrl)).toBe(false);
  });
});
