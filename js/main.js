$(document).ready(function(){

    $("body").css({
        "height": "100%",
        "min-width": "300px"
    });

    $("#area").css({
        "width": "100px",
        "margin": "-25px"
    });

    $("#nav").css("border-top", "1px solid aquamarine");

    $(".myactive, .myactive:active").css({
        "background": "rgba(127, 255, 212, 0.5)",
        "color": "rgba(0, 0, 0, 0.75)"
    });

    $("#main").css({
        "margin": "0px 15px 80px"
    });

    $("#footer").css({
        "position": "fixed",
        "bottom": "0px",
        "width": "100%",
        "min-width": "300px"
    });

    // $("#itmo, #kirov, #vk").attr("target", "_blank");
    $("#itmo").css({
        "text-decoration": "none",
        "color": "aquamarine"
    });

    $("#map").css("width", "100%");
    $("#map p, #Information p, #task p, #home p").css({
        "max-width": "750px",
        "text-align": "justify",
        "margin": "0 auto",
        "text-indent": "2em"
    });

    $("#contact").css({
        "border-right": "1px solid rgba(0, 0, 0, 0.5)",
        "border-left": "1px solid rgba(0, 0, 0, 0.5)",
        "max-width": "500px",
        "min-width": "300px",
        "margin": "0 auto"
    });

    $("#main form").css({
        "max-width": "500px",
        "min-width": "300px",
        "margin": "0px auto 100px"
    });

    $("table").css("margin-bottom", "100px");

    $("#createTable").css("border", "1px solid rgba(0, 0, 0, 0.5)");

});
