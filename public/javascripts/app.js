/*jshint esversion: 6 */




$(document).ready( () => {

    //NAV MENU
    const nav = $('nav');
    $('.open-menu').click(() => { //OUVERTURE
        nav.css("display", "flex").hide().fadeIn();
        nav.addClass('active');
    });
    $('.close-menu').click(() => { //FERMETURE
        nav.removeClass('active');
        nav.fadeOut();

    });
    $(window).resize(() => { //REDIMENSIONNEMENT
        if(window.innerWidth > 1200){
            nav.removeClass('active');
            nav.css({"display":""});
        }
    });

    //HEADER PAGES INTERNE
    if ($('.home-wallpaper').length){
        //HEADER BACKGROUND ON SCROLL
        $(window).scroll(() => {
            var scroll = $(window).scrollTop();
            var windowHeight = window.innerHeight;
            if(windowHeight > 850){
                if(scroll > 200){
                    $('header').addClass('scrolled');
                } else {
                    $('header').removeClass('scrolled');
                }
            } else{
                if(scroll > 100){
                    $('header').addClass('scrolled');
                } else {
                    $('header').removeClass('scrolled');
                }
            }

        });
    } else {
        $('header').addClass('scrolled');
    }
    

    //MAP SCHOOL
    if ($('#map-school').length){
        var mapSchool = L.map('map-school').setView([48.426081, 2.743533], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(mapSchool);
        L.marker([48.426085, 2.743512]).addTo(mapSchool)
    }

    //MAP COMPANY
    if ($('#map-company').length){
        var mapCompany = L.map('map-company').setView([48.213988, 3.277974], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(mapCompany);
        L.marker([48.213988, 3.277974]).addTo(mapCompany)
    }

    //VEILLE TECH/JUR
    if ($('.veille-it').length && $('.veille-jur').length){
        veilleIT = $('.veille-it');
        veilleJUR = $('.veille-jur');
        veilleJUR.hide();
        veilleIT.hide();

        $('#btnVeilleIT').click( () => {
            veilleJUR.hide();
           veilleIT.fadeIn();
        });
        $('#btnVeilleJUR').click( () => {
            veilleIT.hide();
            veilleJUR.fadeIn();
        });
    }

});