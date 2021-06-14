;(function($){

    var cafe = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.footerFn();
            this.modalFn();
            this.smoothScrollFn();
            this.searchFn();
            this.subModalFn();
        },
        headerFn:function(){
            var $a = $('.link');
            //메인메뉴 서브메뉴
  
              $a.on({
                  click:function(e){
                    e.preventDefault();
                        var url = $(this).attr('href');
                            window.location.href = 'http://juwon1.dothome.co.kr/cafedongnae' + url ; //하위폴더 http 통신
                  }
              });

            var $mainBtn = $('#header .main-btn');
            var $sub     = $('#header .sub');
            var $li      = $('#header #nav > ul > li');
            var $span    = $('#header #nav > ul > li > a > span');
            
            $span.eq(1).addClass('addBorder');

            $mainBtn.on({
                mouseenter:function(){
                    $(this).next().stop().fadeIn(300);
                },
                click:function(){
                    $span.removeClass('addBorder');
                    $(this).children().addClass('addBorder');
                }
            });

            $li.on({
                mouseleave:function(){
                    $sub.stop().fadeOut(300);
                }
            });
        },
        section1Fn:function(){
          
        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        section4Fn:function(){
         
        },
        section5Fn:function(){

        },
        section6Fn:function(){

        },
        footerFn:function(){

        },
        modalFn:function(){
 
        },
        smoothScrollFn:function(){
            var $smoothBtn = $('#footer .smooth-btn');

            $(window).scroll(function(){
                $smoothBtn.on({
                    click:function(){
                        $('html,body').stop().animate({ scrollTop:0 },1000);
                    }
                });
            });

        },
        searchFn:function(){
            var $headerSearch = $('#header .search');
            var $searchClose = $('#search .close');
            var $search      = $('#search');

            $headerSearch.on({
                click:function(){
                    $search.stop().show();
                    $('html').addClass('search');
                }
            });

            $searchClose.on({
                click:function(){
                    $search.stop().hide();
                    $('html').removeClass('search');
                }
            });
        },
        subModalFn: function(){
           var $mobileBtn = $('#header .mobile-btn');
           var $subModal = $('#sub-modal');
           var $modalMainBtn = $('#sub-modal .modal-main-btn');
           var $modalBg = $('#modal-bg')
           var $modalSubBtn = $('#sub-modal .modal-sub-btn');
           var $lili = $('#sub-modal .right-box > ul > li .modal-sub .modal-sub-gap ul li');

           $lili.eq(1).addClass('addBack');

           $mobileBtn.on({
               click:function(e){  
                e.stopPropagation();
                $subModal.addClass('addRight');
                $modalBg.stop().show();
               }
           });

           $modalMainBtn.on({
               click:function(e){
                e.stopPropagation();
                $(this).next().stop().slideToggle(300);
               }
           });

           $modalSubBtn.on({
               click:function(e){
                e.stopPropagation();
               }
           });

           $(document).on({
               click:function(){
                $subModal.removeClass('addRight');
                $modalBg.stop().hide();
               }
           });
        }
    };
    cafe.init();
})(jQuery);