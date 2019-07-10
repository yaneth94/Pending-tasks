const argv = require("yargs")
  .command("listar", "Imprime en consola una lista de tareas por hacer")
  .command("crear", "Crea una tarea por hacer", {
    descripcion: {
      demand: true,
      alias: "d",
      desc:'Descripción de la tarea por hacer'
    }
  })
  .command("actualizar", "actualiza el estado completado de una tarea", {
    descripcion: {
      demand: true,
      alias: "d",
      desc:'Descripción de la tarea por hacer'
    },
    completado: {
      default:true,
      alias: "c",
      desc:'Marca como completado o pendiente una tarea'
    }
  })
  .help().argv;

module.exports = {
  argv
};