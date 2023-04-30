//Geolocalizador
$(".btn_geolocalizar").on("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        // Create the initial InfoWindow.
        let infoWindow = new google.maps.InfoWindow();

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
                    position.coords.latitude + "," + position.coords.longitude
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
                ? "Error: EL servicio de geolocalizacion ha fallado o esta deshabilitado."
                : "Error: Su navegador no soporta esta herramienta."
        );
        infoWindow.open(map);
    }
});
