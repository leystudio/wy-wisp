var coordenadas;
function datos_gps(coords_txt) {
    let markers = [];
    const map = new google.maps.Map(document.getElementById("div_mapa"));
    if (coords_txt) {
        coords = coords_txt.split(",");
        const posicion = {
            lat: parseFloat(coords[0]),
            lng: parseFloat(coords[1]),
        };
        const myLatlng = posicion;
        //abrir el mapa
        map({
            center: posicion,
            zoom: 8,
        });
        //Marcar la ubicacion
        marker = new google.maps.Marker({
            position: posicion,
            map,
        });

        marcar(marker, posicion);
    } else {
        const map = new google.maps.Map(document.getElementById("div_mapa"), {
            center: { lat: 10.8039442, lng: -75.8312517 },
            zoom: 10,
        });
        $(".mapa").show();
    }
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow();
    infoWindow.open(map);
    //Geolocalizar
    $(".btn_geolocalizar").on("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
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
                        position: pos,
                        map,
                        //title: "Hello World!",
                        zoom: 10,
                    });
                    marcar(
                        marker,
                        position.coords.latitude +
                            "," +
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
        if (markers.length) {
            markers[0].setMap(null);
        }

        const marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map,
            zoom: 4,
        });

        marcar(
            marker,
            mapsMouseEvent.latLng.lat() + "," + mapsMouseEvent.latLng.lng()
        );
    });

    //marcar
    function marcar(marker, marca) {
        coordenadas = marca;
        markers = []; //limpia el arrayy
        markers.push(marker); //agrega marca al array
        //boton eliminar ubicacion
        if (marca) {
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

        markers = []; //limpia el arrayy
    });
    // window.initMap = initMap;
}
