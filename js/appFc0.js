// VARIABLES
// Leen el valor de cada campo del formulario
let titulo = document.querySelector("#titulo").value
let descripcion = document.querySelector("#descripcion").value
let fecha = document.querySelector("#fecha").value
let hora = document.querySelector("#hora").value
let color = document.querySelector("#color").value
// Submit formulario
let enviar = document.querySelector("#btnAgregar")

// FULLCALENDAR
document.addEventListener('DOMContentLoaded', function () {
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
        dateClick: function () {

            // Acciona el modal
            $("#modalEventos").modal()

            // EVENT LISTENER
            enviar.addEventListener("submit", enviarEvento)

            // FUNCIONES
            function enviarEvento() {
                calendar.addEvent({    // https://fullcalendar.io/docs/event-model
                    title: titulo,
                    description: descripcion,
                    start: fecha + hora,   // dateStr 
                    hora: hora, // 'T00:00:00'
                    color: color
                })
                //Cierra el modal
                $('#modalEventos').modal('toggle'); // hide
            }
        },

    });
    calendar.render();
});


//////////////      html  


