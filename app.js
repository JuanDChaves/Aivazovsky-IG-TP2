
$(document).ready(function() {
    // Con estas funciones cambio el logo de ruso a español cuando se hace hover
    $(".logo").mouseenter(function() {
        console.log("hola")
        $(".logo").text("Aivazovsky");
    })
    $(".logo").mouseleave(function() {
        console.log("hola")
        $(".logo").text("Айвазовский");
    })
});