// VARIABLES
// Leen el valor de cada campo del formulario
let titulo = document.querySelector("#titulo").value
let descripcion = document.querySelector("#descripcion").value
let hora = document.querySelector("#hora").value
let color = document.querySelector("#color").value
// Submit formulario
let enviar = document.querySelector("#guardar")

// FULLCALENDAR
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
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
            console.log(info.date);
            // Acciona el modal
            $("#staticBackdrop").modal()
            $("#sdate").val(info.startStr);
        },

        /* OTRA OPCION PARA SELECCION DE EVENTO
        select: function (info) {
        alert('selected ' + info.startStr + ' to ' + info.endStr);
        },
        */





        // Eventos del calendario
        events: [

            /*
            title: event.target[0].value,
                description: event.target[1].value,
                hora: event.target[2].value,
                color: event.target[3].value
                
            */

            function enviarEvento() {  

                calendar.addEvent({    // https://fullcalendar.io/docs/event-model
                    title: titulo,
                    description: descripcion,
                    start: fecha, 
                    color: color
                });
                //Cerramos el formulario modal con toggle abierto con la fucion dayClick  
                $('#ModalEventos').modal('toggle');
            },

            {
                id: 'a',
                title: 'Evento 1, Hora 8,000',
                start: '2020-06-12'
            },
            {
                id: 'b',
                title: 'Evento 2, Hora 8,004',
                description: "Esta es la descripcion de mi evento",
                start: '2020-06-06',
                end: '2020-06-07',
                color: "rgb(255, 0, 0)"
            },
            {
                id: 'c',
                title: 'Evento 3, Prueva',
                start: '2020-06-20T12:30:00',
                allDay: false
            }
        ]
    });

    /*
    function insertarContenido(params) {
      document.querySelector("#elTitulo").appendChild(titulo)
    }
    */

    /* // Saque de youtube pero no funcionaba. 
  
    eventClick: function(calEvent,jsEvent,view) {
      $("tituloEvento").html(calEvent.title);
      $("descripcionEvento").html(calEvent.description)
      $("staticBackdrop").modal()
    }
  */
    calendar.render();
});

enviar.addEventListener("submit", enviarEvento)

// Logre que tome lo que pongo en el form y lo devuelva por consola // lo tiene que devolver en el evento correspondiente!! Modificar formato de fecha

function enviarEvento(e) {
    /*
      console.log(event.target[0].value);
      console.log(event.target[1].value);
      console.log(event.target[2].value);
      console.log(event.target[3].value); 
      */

      /*
    console.log(titulo);
    console.log(descripcion);
    console.log(fecha);
    console.log(hora);
    console.log(color);
      */
    e.preventDefault()
}


/*
// EVENT LISTENER
eventListeners()

function eventListeners() {
  //Tomar contenido del evento
 document.addEventListener("click", leerContenido)

}

// FUNCIONES

// EVENT LISTENER
      eventListeners()
      function eventListeners() {
        //escucha boton enviar
        enviar.addEventListener("submit", enviarEvento)
      }
*/


//////////////////////////////////////////////////////////

// Toma el valor del campo del formulario
// document.querySelector("#miForm").elements[0] // 0 es titulo, 1 es descripcion, etc

// Toma todos los campos del formulario
// document.querySelector("#miForm").elements

// Toma el contenido del evento ya escrito en el calendario
//let contenido = document.querySelectorAll(".fc-content").elements  // [0]
