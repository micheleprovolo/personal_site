$(document).ready(function() {

AOS.init();

getCopyrightFullYear();

// al click sul link del progetto
$(".project-list > li").click(function(event) {
    event.preventDefault();
    // console.log("link cliccato");

    //attribuisco al link cliccato l'attributo data-project-type e lo salvo in una var
    var clickedProjectLink = $(this).attr("data-project-type");

    //seleziono il link che ha già la classe active di default e gliela tolgo
    $(".project-list li.active").removeClass("active");

    //seleziono il progetto che ha già la classe active di default e gliela tolgo
    $(".project-image div.active").removeClass("active");

    //attribuisco la classe active al link che ho cliccato
    $(this).addClass("active");

    //seleziono il progetto e le attribuisco la classe active
    $(".project-image div[data-project-type='" + clickedProjectLink +"']").addClass("active");
});

// data copyright del footer
function getCopyrightFullYear() {
    var d = new Date(); //fornisce la data attuale
    var n = d.getFullYear(); //prende solo l'anno di quella data precedentemente fornita
    document.getElementById("copyright-full-year").innerHTML = n;
}

//validazione dati del contact-form
$('#contact-form').submit(function(event) {
  event.preventDefault();

  var formEmail = $('#form-email').val();
  var formName = $('#form-name').val();
  var formSurname = $('#form-surname').val();
  var formMessage = $('#form-message').val();
  var formSubmit = $('#form-submit').val();

  $('.form-alert').load('contactform.php', {
    email: formEmail,
    name: formName,
    surname: formSurname,
    message: formMessage,
    submit: formSubmit
  });
});

//bottone back to the top
if ($('#back-to-top').length) {
    var scrollTrigger = 50, //px

    backToTop = function() {
        //ritorna la posizione della scrollbar e la salva in var
        var scrollTop = $(window).scrollTop();
        //se la pos della scrollbar è maggiore del valore che ho impostato come trigger (in questo caso 50)
        if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('appear');
        } else {
        $('#back-to-top').removeClass('appear');
        }
    };

    backToTop();
    //allo scroll fai scattare la funzione
    $(window).on('scroll', function() {
      backToTop();
    });
    //al clic sul bottone riporta a 0 la scrollbar con velocità di 700 millisecondi
    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 100);
    });
  }

// effetto comparsa della project image quando c'è lo scroll down
var scrollMagicController = new ScrollMagic.Controller(); 
var animatedScene = new ScrollMagic.Scene({
    triggerElement: '.project-image img'
})
.setClassToggle('.project-image img', 'show')
.addTo(scrollMagicController);


});