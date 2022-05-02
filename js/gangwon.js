(function($){
  
  var gangwon = {
      init:function(){
        this.header();
        this.section1();
        this.section2();
        this.footer();
      },
      header:function(){
        $('.main-btn').mouseenter(function(){
          $('.sub').stop().fadeOut(0);
          $(this).next().stop().fadeIn(300);
          
          $('.main-btn').removeClass('on');
          $(this).addClass('on');
      
        });
      
        $('#nav').mouseleave(function(){
          $('.sub').stop().fadeOut(300);
          $('.main-btn').removeClass('on');
          
        });
      },
      section1:function(){
        let cnt=0;

        function mainSlide(){
        $('.slide-wrap').animate({top:-300*cnt}, 600 , function(){
        cnt>2?cnt=0:cnt;
        cnt<0?cnt=2:cnt;
        $('.slide-wrap').animate({top:-300*cnt}, 0)
        });
        }
        function nextCount(){
           cnt++;
           mainSlide();
        }
        function prevCount(){
          cnt--;
          mainSlide();
        }

      function autoTimer(){
        setInterval(nextCount, 3000)
        //setInterval(prevCount, 3000)
      
      }
      autoTimer();
      },

      section2:function(){
        $('.gallery-btn').click(function(){
          $('.notice-btn').addClass('on')
          $('.gallery-btn').addClass('on')
          $('.gallery-box').addClass('on')
          $('.notice-box').addClass('on')
        });
        //공지사항버튼 클릭
        $('.notice-btn').click(function(){
          $('.gallery-btn').removeClass('on')
          $('.notice-btn').removeClass('on')
          $('.gallery-box').removeClass('on')
          $('.notice-box').removeClass('on')
        });
        
        
        //레이어팝업창
        $('.link-btn').click(function(){
          $('#modal').stop().fadeIn(300)
        });
        
        
        $('.close-btn').click(function(){
          $('#modal').stop().fadeOut(300)
        });
        
        
        $('.main-btn').on({
          focusin:function(){
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
        
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
          }
        });
      },
      footer:function(){

      }
    }
    gangwon.init();

    

})(jQuery);