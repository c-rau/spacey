$(document).ready(function() {
    var divs = $('#one');
    if($(window).scrollTop() >= 10) divs.fadeOut(500);   
    
    $(window).on('scroll', function(){
       if($(window).scrollTop() < 150 || $(window).scrollTop() > 1300){
             divs.fadeOut(500);
       } else {
             divs.fadeIn(1500);
       }
    });
    
});

$(document).ready(function() {
    var divs = $('#two');
    if($(window).scrollTop() >= 10) divs.fadeOut(500);   
    
    $(window).on('scroll', function(){
       if($(window).scrollTop() < 900 || $(window).scrollTop() >1900){
             divs.fadeOut(500);
       } else {
             divs.fadeIn(1500);
       }
    });
    
});

$(document).ready(function() {
    var divs = $('#three');
    if($(window).scrollTop() >= 10) divs.fadeOut(500);   
    
    $(window).on('scroll', function(){
       if($(window).scrollTop() < 1350 || $(window).scrollTop() >2400){
             divs.fadeOut(500);
       } else {
             divs.fadeIn(1500);
       }
    });
    
});
$(document).ready(function() {
    var divs = $('#four');
    if($(window).scrollTop() >= 10) divs.fadeOut(500);   
    
    $(window).on('scroll', function(){
       if($(window).scrollTop() < 2100 || $(window).scrollTop() >2800){
             divs.fadeOut(500);
       } else {
             divs.fadeIn(1500);
       }
    });
    
});

$(document).ready(function() {
    var divs = $('#five');
    if($(window).scrollTop() >= 10) divs.fadeOut(500);   
    
    $(window).on('scroll', function(){
       if($(window).scrollTop() < 2200 || $(window).scrollTop() >3400){
             divs.fadeOut(500);
       } else {
             divs.fadeIn(1500);
       }
    });
    
});

$(document).ready(function() {
    var divs = $('#six');
    if($(window).scrollTop() >= 10) divs.fadeOut(500);   
    
    $(window).on('scroll', function(){
       if($(window).scrollTop() < 2800 || $(window).scrollTop() >3750){
             divs.fadeOut(500);
       } else {
             divs.fadeIn(1500);
       }
    });
    
});





