//Plantilla para crear objetos
class Activity {
  //El constructor es un método especial dentro de una clase que se llama automáticamente cuando se crea una nueva instancia de la clase.
  // En este caso, el constructor de la clase Activity recibe cuatro parámetros: id, title, description e imgUrl
  constructor(id, title, description, imgUrl) {
    //Estas líneas asignan los valores de los parámetros recibidos en el constructor//
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Este código define una clase llamada Repository que se utiliza para gestionar una colección de actividades

// Esta línea define la clase Repository//

class Repository {
  //El constructor de la clase Repository inicializa la propiedad activities como un array vacío cuando se crea una instancia de la clase.

  constructor() {
    this.activities = [];
  }
  //Este método retorna todas las actividades almacenadas en la propiedad activities.

  getAllActivities() {
    return this.activities;
  }

  //Este método crea una nueva actividad y la añade a la colección de actividades. Recibe como parámetros id, title, description e imgUrl para crear la nueva actividad.

  createActivity(id, title, description, imgUrl) {
    const newActivity = new Activity(id, title, description, imgUrl);
    this.activities.push(newActivity);
  }

  // Este método elimina una actividad de la colección basándose en su id. Utiliza el método filter para crear un nuevo array que excluya la actividad con el id especificado.

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const activity = new Activity(
  1,
  "salir a pasear",
  "es muy sano y divertido",
  "http://img"
);

console.log(activity);
