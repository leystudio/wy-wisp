function ubicacionGps(coords_txt) {
    coords = coords_txt.split(",");

    console.log(coords);
    const myLatlng = { lat: 18.93883844065336, lng: -70.36915487401262 };
    const map = new google.maps.Map(document.getElementById("div_mapa"), {
        zoom: 8,
        center: myLatlng,
    });
    new google.maps.Marker({
        position: {
            lat: parseFloat(coords[0]),
            lng: parseFloat(coords[1]),
        },
        map,
        zoom: 4,
    });
}
/* var coordenadas;
window.addEventListener("load", function () {
    let markers = [];
    const myLatlng = { lat: 18.93883844065336, lng: -70.36915487401262 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLatlng,
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Haz click para obtener la ubicacion",
        position: myLatlng,
    });
    infoWindow.open(map);
    //BOTON UBICAR
    const locationButton = document.createElement("button");
    locationButton.textContent = "Mi ubicacion actual";
    locationButton.classList.add("custom-map-control-button");
    $(".btn_ubicacion_actual").html(locationButton);

    //click en boton ubicar
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    const posicion = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setCenter(pos);

                    //mover el marcador
                    //for (let i = 0; i < markers.length; i++) {}
                    if (markers.length) {
                        markers[0].setMap(null);
                    }

                    const marker = new google.maps.Marker({
                        position: posicion,
                        map,
                        //title: "Hello World!",
                        zoom: 10,
                    });
                    marcar(
                        marker,
                        "lat: " +
                            position.coords.latitude +
                            ", lng: " +
                            position.coords.longitude
                    );
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
        // si no tubo exito
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(
                browserHasGeolocation
                    ? "Error: EL servicio de geolocalizacion ha fallado."
                    : "Error: Su navegador no soporta esta herramienta."
            );
            infoWindow.open(map);
        }
    });
    //-------------------------------------------------------------------------
    // a la escucha del click para poner la marca en el mapa
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        if (markers.length) {
            markers[0].setMap(null);
        }

        const marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map,
            zoom: 4,
            //title: "Hello World!",
        });
        $(".del_ubicacion_actual").show(50);

        marcar(
            marker,
            "lat: " +
                mapsMouseEvent.latLng.lat() +
                ", lng: " +
                mapsMouseEvent.latLng.lng()
        );
    });

    //marcar
    $(".del_ubicacion_actual").hide();

    function marcar(marker, marca) {
        coordenadas = marca;
        console.log(coordenadas);
        markers = []; //limpia el arrayy
        markers.push(marker); //agrega la posicion del marcador al array

        //boton eliminar ubicacion
        if (markers.length) {
            $(".del_ubicacion_actual").show();
        } else {
            $(".del_ubicacion_actual").hide();
        }
    }

    //quitar ubicacion
    $(".del_ubicacion_actual").on("click", function () {
        markers[0].setMap(null);
        $(".del_ubicacion_actual").hide();
        coordenadas = "";
        console.log(coordenadas);

        markers = []; //limpia el arrayy
    });
    // window.initMap = initMap;
});
 */
