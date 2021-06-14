;(function($){

    var cafe = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
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
            
            $span.eq(3).addClass('addBorder');

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
            var $submit = $('#section5 #submit');
            var $name = $('#section5 .input-wrap #name');
            var $phone = $('#section5 .input-wrap #phone');
            var $email = $('#section5 .input-wrap #email');
            var $title = $('#section5 .input-wrap #title');
            var $comment = $('#section5 .input-wrap #comment');
            var $ajaxYesModal = $('#ajaxYesModal');
            var $ajaxNoModal = $('#ajaxNoModal');

            $submit.on({
                click:function(){
                    alert();
                    e.preventDefault();
                    var nameVal    = $('#section5 .input-wrap #name').val();
                    var phoneVal  = $('#section5 .input-wrap #phone').val();
                    var emailVal   = $('#section5 .input-wrap #email').val();
                    var titleVal   = $('#section5 .input-wrap #title').val();
                    var commentVal = $('#section5 .input-wrap #comment').val();

                    if(nameVal == ''){
                        $ajaxNoModal.addClass('addBlock');
                        $name.focus();
                        return false;
                    }
                    else{
                        $.ajax({
                            url:'./php/reponse.php',
                            type:'POST',
                            data:{
                                name : nameVal,
                                phone : phoneVal,
                                email : emailVal,
                                title : titleVal,
                                comment : commentVal
                            },
                            success:function(result){
                                console.log(result);
                            },
                            error:function(msg){
                                console.log(msg);
                                alert('ajax연결실패');
                            }

                        });
                    }
                    

                }
            });
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
           var $li = $('#sub-modal .right-box > ul > li');

           $li.eq(3).addClass('addBack');

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