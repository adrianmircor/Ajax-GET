$(document).ready(() => {
  $("#verImagenes").click((e) => {
    e.preventDefault();
    console.log("Empieza la funcion");
    ajaxGet();
    for (let i = 0; i < 500; i++) {
      console.log("->", i);
    }
  });

  const ajaxGet = () => {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://api.nasa.gov/planetary/apod?count=50&api_key=Nse65D4LtQLMPHTZEUSgxIpJw5JlxD9YqCzb1QKH",
      method: "GET",
      headers: {
        "x-rapidapi-key": "4efaefaa72msh10ad516216a61fap19b7e9jsnc8a68e5336c2",
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
      },
    };

    $.ajax(settings).done((response) => {
      $.each(response, (i, foto) => {
        let card = `
        <div class="col-md-6 col-lg-4">
            <div class="card mt-3">
            <div class="container d-flex justify-content-center">
                <img
                class="card-img-top pt-2"
                src="${foto.url}"
                alt="Card image cap"
                width = 200px
                height = 200px
                />
            </div>
            <div class="card-body">
                <h5 class="card-title text-center m-0">${foto.title}</h5>
            </div>
            </div>
        </div>
        `;
        $("#cards").append(card);
      });
    });
  };
});

/*

$.ajax(settings).done(function (response) {
      $.each(response.photos, (i, foto) => {

        console.log("i->",i);
        console.log("foto->",foto);
        let card = `
        <div class="col-md-6 col-lg-4">
            <div class="card mt-3">
            <div class="container d-flex justify-content-center">
                <img
                class="card-img-top"
                src="${foto.img_src}"
                alt="Card image cap"
                width = 200px
                height = 200px
                />
            </div>
            <div class="card-body">
                <h5 class="card-title">Fecha: ${foto.earth_date}</h5>
            </div>
            </div>
        </div>
        `;
        $("#cards").append(card);
      });
      console.log(response); //JSON
      console.log(response.photos); //contenido del array photos
    });


*/
