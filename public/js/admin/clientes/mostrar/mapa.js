function ubicacionGps(coords_txt) {
    coords = coords_txt.split(",");
    const posicion = {
        lat: parseFloat(coords[0]),
        lng: parseFloat(coords[1]),
    };
    const map = new google.maps.Map(document.getElementById("div_mapa"), {
        zoom: 10,
        center: posicion,
    });
    new google.maps.Marker({
        position: posicion,
        map,
    });
}
