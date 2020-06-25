// VARIABLES
// Leen el valor de cada campo del formulario
let titulo = document.querySelector("#titulo").value
let descripcion = document.querySelector("#descripcion").value
let hora = document.querySelector("#hora").value
let color = document.querySelector("#color").value
// Submit formulario
let enviar = document.querySelector("#guardar")

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: "es",
        plugins: ["interaction", "dayGrid", "timeGrid"],
        defaultView: 'dayGridMonth',
        header: {
            center: 'addEventButton'
        },
        customButtons: {
            addEventButton: {
                text: 'Agregar evento',
                click: function () {
                    var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                    var date = new Date(dateStr + 'T00:00:00'); // will be in local time

                    if (!isNaN(date.valueOf())) { // valid?
                        calendar.addEvent({
                            title: 'dynamic event',
                            start: date,
                            allDay: true
                        });
                        alert('Excelente. Ahora, actualice su base de datos ...');
                    } else {
                        alert('Fecha invalida');
                    }
                }
            }
        }
    });

    calendar.render();
});

