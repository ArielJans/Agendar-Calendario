          // FULLCALENDAR
          document.addEventListener('DOMContentLoaded', function () {
            // Submit formulario
            let enviar = document.querySelector("#guardar"); 
            let calendarEl = document.getElementById('calendar');

            let calendar = new FullCalendar.Calendar(calendarEl, {
              locale: "es",
              //defaultTimedEventDuration: '00:30:00', // Cambia la duracion de 1h por defecto a 1/2h
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
              let descripcion = document.querySelector("#descripcion").value;
              let fecha = document.querySelector("#fecha").value;
              let horaInicio = document.querySelector("#horaInicio").value;
              let horaFin = document.querySelector("#horaFin").value;
              let color = document.querySelector("#color").value;

              // Imprime los datos en el calendario
              calendar.addEvent({    
                title: titulo, 
                description: descripcion,
                start: fecha + horaInicio,  
                end: fecha + "T" + horaFin, // '2020-06-20T12:30:00'
                color: color,
                //allDay: true
              });

              //console.log(fecha);
              //console.log(horaInicio);

              //Cierra el modal
              $('#modalEventos').modal('toggle'); 
            }
          });

          /*

          var deletT = document.querySelector("#horaInicio").value.charAt() // selecciona T

            //deletT.style.display = 'none',
            //deletT = ("display: none")
            console.log(deletT);

          */


          // https://fullcalendar.io/docs/event-model

          // extendedProps  y  eventRender  // Parece que es esto

          // tomar eventos https://www.youtube.com/watch?v=WF5MuXqufLg&list=PL6_rKwCtDOE3IHERzMdv9nm0-OWXgz4FW&index=7 17:23

          // ver youtube https://www.youtube.com/watch?v=1wCv52MDejY&list=PLSuKjujFoGJ3xqSJHnZUR-INEO71t1znq&index=7

          // $('#Descripcion').val(info.event.extendedProps.descripcion); // asi lo toman con jquery

          /* // saque de https://fullcalendar.io/docs/dateClick
              eventClick: function (info) {
                alert('Event: ' + info.event.title);
                alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                alert('View: ' + info.view.type);

                // change the border color just for fun
                info.el.style.borderColor = 'red';
              }
              */