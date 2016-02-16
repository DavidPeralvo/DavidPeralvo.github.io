jQuery.fn.cuentaCaracteres = function() {
    var elem;
    this.each(function(){
        elem = $(this);
        var contador = $('<div>Contador caracteres: ' + elem.prop("value").length + '</div>');
        elem.after(contador);
        elem.data("campocontador", contador);
        elem.keyup(function(){
            var elem = $(this);
            var campocontador = elem.data("campocontador");

            campocontador.text('Contador caracteres: ' + elem.prop("value").length);
        });
    });
    return this;
};
$(document).ready(function(){
    $("textarea").cuentaCaracteres();
});
