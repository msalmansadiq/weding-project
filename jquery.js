let videoBtn = document.querySelectorAll('.vid-btn');
// var loader = document.querySelectorAll('preloader');

videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
     document.querySelector('.controls .active').classList.remove('active');
     btn.classList.add('active');
     let src = btn.getAttribute('data-src');
     document.querySelector('#video-slider').src = src; 
    });
});

// window.addEventListener("load", function(){
//      loader.style.display ="none"
// });


$(document).ready(function(){
    $('#login-btn').click(function(){
    $('.login-form-container').addClass('active')
    });
    $('#form-close').click(function(){
    $('.login-form-container').removeClass('active')
    });
 
    $('#menu_bar').click(function(){
     $('#menu_bar').toggleClass('fa-times')
     $('header .navbar').toggleClass('active')
    });
    
    $(window).on("load", function(){
      $('#preloader').fadeOut(5000)
    });
 });
