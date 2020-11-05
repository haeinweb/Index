$(document).ready(function(){
  //resize시 reload
  var lastWidth = $(window).width();
  var resizeTimer;
  $(window).resize(function(){
    if($(window).width()!=lastWidth){
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resizeFunction,500);
      function resizeFunction(){
          location.reload();
      }
    lastWidth = $(window).width();
    return false;
    }
  })
  // a link
  $('a[href^="#"]').on('click',function(e){
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function(){
    });
  });
  // scroll
  $(document).scroll(function() {
    var scroll = $(window).scrollTop();
    var sec03 = $('.sec.three').offset().top - 400;
    var sec04 = $('.sec.four').offset().top - 400;
    if(scroll < sec03){
        $('.white').addClass('on');
        $('.black').removeClass('on');
    }
    else if(scroll > sec03 && scroll < sec04){
        $('.white').removeClass('on');
        $('.black').addClass('on');
    }
    else if(scroll > sec04){
        $('.white').addClass('on');
        $('.black').removeClass('on');
    }
  })
  // section one blink
  $('.sec.one .star').mouseover(function(){
    $(this).removeClass('blinking')
  }).mouseout(function(){
    $(this).addClass('blinking')
  })
  // section two type animate
  var typingBool = false; 
  var typingIdx=0; 
  var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true;           
    var tyInt = setInterval(typing,150); // 반복동작 
  }      
  function typing(){ 
    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
      $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
      typingIdx++; 
    } else{ 
      clearInterval(tyInt); //끝나면 반복종료 
    } 
  }
  // section two toggle
  var check = $(".line input[type='checkbox']");
  check.on('click',function(){
    $(this).parent().next().slideToggle()
  })
  if($(window).width() <= 768){
    // aside, nav
    $('.white .main > li').eq(2).children().html('About');
    $('.black .main > li').eq(2).children().html('About');
    $('.white .main > li').eq(3).children().html('Contact');
    $('.black .main > li').eq(3).children().html('Contact');
    // section three data-aos
    $('.sec.three .work div[data-aos="fade-left"]').attr('data-aos-delay','0')
  }
})