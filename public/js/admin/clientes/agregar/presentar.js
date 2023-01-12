function presentar(id) {
    window.location.href = "https://mywisp.online/admin/show-client";

    /* 
    $.ajax({
        type: 'POST',
        url: "seleccionar_cliente",
        data: {
            _token: $('#token').val(),
            id: id,
        },
        dataType: 'json',
        success: function (result) {

            cargar_datos_seleccion(result)

        }
    }); */
}
