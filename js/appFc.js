// FULLCALENDAR
document.addEventListener('DOMContentLoaded', function () {
// Submit formulario
let enviar = document.querySelector("#guardar"); 
let calendarEl = document.getElementById('calendar');

let calendar = new FullCalendar.Calendar(calendarEl, {
  locale: "es",
  plugins: ["interaction", "dayGrid", "timeGrid"],
  selectable: true,
  defaultView: "timeGridWeek",
  header: {
    left: "prev,next today",
    center: "title",
    right: "timeGridDay,timeGridWeek,dayGridMonth",
  },

  // Selecciona con click en una fecha/hora determinada
  dateClick: function (info) {
    let infoDate = info.dateStr.substring(0,10)
    let infoTime = info.dateStr.substring(10,16)

    // Toma el valor donde clikea y lo agrega al value de HTML
    document.querySelector("#fecha").setAttribute("value", infoDate)
    document.querySelector("#horaInicio").setAttribute("value", infoTime)

    // Acciona el modal
    $("#modalEventos").modal();
   },
  });

  calendar.render();

  // EVENT LISTENER
  enviar.addEventListener("submit", enviarEvento)
            
  // FUNCTIONS
  // Toma los datos del evento en el modal 
  function enviarEvento() {
    let titulo = document.querySelector("#titulo").value;
    let fecha = document.querySelector("#fecha").value;
    let horaInicio = document.querySelector("#horaInicio").value;
    let horaFin = document.querySelector("#horaFin").value;
    let color = document.querySelector("#color").value;

    // Imprime los datos en el calendario
    calendar.addEvent({    
      title: titulo, 
      start: fecha + horaInicio,  
      end: fecha + "T" + horaFin, // '2020-06-20T12:30:00'
      color: color,
    });
    //Cierra el modal
    $('#modalEventos').modal('toggle'); 
    }
});
