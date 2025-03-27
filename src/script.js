$(document).ready(function() {

  $("#fenomeni").prepend('<button id="fenomeni-toggle">Fenomeni.</button>');

  $("#fenomeni").addClass("collapsed");

  $("#fenomeni-toggle").click(function() {
    $("#fenomeni").toggleClass("collapsed expanded");
  });

  $(".bottoni_fenomeni button").click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".bottoni_fenomeni button").removeClass("active");
      $(this).addClass("active");
    }
  });

  //BOTTONI FENOMENI

  //persone
  $("#persone").click(function() {
    $("span.persName").toggleClass("highlight_p");
  });

  //epiteti
  $("#epithet").click(function() {
    $(".addName").toggleClass("highlight_ep");
  });

  //luoghi
  $("#luoghi").click(function() {
    $("span.placeName").toggleClass("highlight_l");
  });

  //date
  $("#date").click(function() {
    $(".date").toggleClass("highlight_d");
  });

  //organizzazioni
  $("#organizzazioni").click(function() {
    $("span.orgName").toggleClass("highlight_o");
  });

  //citazioni
  $("#citazioni").click(function() {
    $(".quote").toggleClass("highlight_c");
  });

  //bibliografia
  $("#bibliografia").click(function() {
    $("s.bibl").toggleClass("highlight_op");
  });

  //casa Editrice
  $("#casaeditrice").click(function() {
    $(".publisher").toggleClass("highlight_ce");
  });

  //termini
  $("#termini").click(function() {
    $(".term").toggleClass("highlight_cl");
  });

  //foreign
  $("#foreign").click(function() {
    $(".foreign").toggleClass("highlight_f");
  });

  //correzioni
  $("#correzioni").click(function(){
    $(".choice.correzione").toggleClass("highlightChoice");
  });

  //parole dialettali
  $("#dialettali").click(function(){
    $(".choice.dialettale").toggleClass("highlightChoices");
  });

  //dialoghi
  $("#dialoghi").click(function () {
    $(".dialoghi").toggleClass("highlight_seg");
  });


  //AREA HOVER TESTO GRASSETTO
  $("area").hover(
    function() {
      var zoneID = $(this).attr("title");    //es. "par1_2_TDM"
      var $text = $("#" + zoneID);
      if ($text.length) {
        $text.data("prevWeight", $text.css("font-weight"));
        $text.css("font-weight","bold");
      }
    },
    function() {
      var zoneID = $(this).attr("title");
      var $text = $("#" + zoneID);
      if ($text.length) {
        $text.css("font-weight", $text.data("prevWeight"));
      }
    }
  );


  //SOMMARIO DEI FENOMENI
  $("#fenomeniSummary a").click(function(e) {
    let targetID = $(this).attr("href");
    if (targetID && targetID.startsWith("#")) {
      e.preventDefault();
      let $target = $(targetID);
      if ($target.length) {
        let $column = $target.closest(".column");

        $target[0].scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
  

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  $("#scrollTopBtn").click(function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
});
