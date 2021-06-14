;(function($){

    var cafe = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
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
            var galUlW = $('#section2 #gallery-wrap > ul').innerWidth();
            var $galUl = $('#section2 #gallery-wrap > ul');
            var $galLi = $('#section2 #gallery-wrap > ul > li');
            var n = $('#section2 #gallery-wrap > ul > li').length;
            
            var $win = $(window);
            var $winW = $(window).innerWidth();
            var cols = 3;
            var imgW = $winW/cols;
            var imgH = imgW*1.1;
            var rows = Math.ceil(n/cols);

            function resizeFn(){
                $winW = $(window).innerWidth();
                $galUl = $('#section2 #gallery-wrap > ul');
                
                if($winW > 1503){
                    cols = 3;
                    $galUl.css({ width:1503, height:imgH*rows });
                    imgW = 501;
                    imgH = 551.1;
                }
                else if($winW > 980){
                    cols = 3;
                    $galUl.css({ width:$winW, height:imgH*rows });
                    imgW = $winW/cols;
                    imgH = imgW*1.1;
                }
                else if($winW > 680){
                    cols = 2;
                    $galUl.css({ width:$winW, height:imgH*rows });
                    imgW = $winW/cols;
                    imgH = imgW*1.1;
                }
                else{
                    cols = 1;
                    $galUl.css({ width:$winW, height:imgH*rows });
                    imgW = $winW/cols;
                    imgH = imgW*1.1;
                }

            // 반응형
            n=21;
            rows = Math.ceil(n/cols);
            $galLi.css({ width:imgW, height:imgH });

            switch( cols ){
                case 3:
                $galLi.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 },600);
                $galLi.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 },600);
                $galLi.eq(2).stop().show().animate({ left:imgW*2, top:imgH*0 },600);
                
                $galLi.eq(3).stop().show().animate({ left:imgW*0, top:imgH*1 },600);
                $galLi.eq(4).stop().show().animate({ left:imgW*1, top:imgH*1 },600);
                $galLi.eq(5).stop().show().animate({ left:imgW*2, top:imgH*1 },600);

                $galLi.eq(6).stop().show().animate({ left:imgW*0, top:imgH*2 },600);
                $galLi.eq(7).stop().show().animate({ left:imgW*1, top:imgH*2 },600);
                $galLi.eq(8).stop().show().animate({ left:imgW*2, top:imgH*2 },600);

                $galLi.eq(9).stop().show().animate({ left:imgW*0, top:imgH*3 },600);
                $galLi.eq(10).stop().show().animate({ left:imgW*1, top:imgH*3 },600);
                $galLi.eq(11).stop().show().animate({ left:imgW*2, top:imgH*3 },600);

                $galLi.eq(12).stop().show().animate({ left:imgW*0, top:imgH*4 },600);
                $galLi.eq(13).stop().show().animate({ left:imgW*1, top:imgH*4 },600);
                $galLi.eq(14).stop().show().animate({ left:imgW*2, top:imgH*4 },600);

                $galLi.eq(15).stop().show().animate({ left:imgW*0, top:imgH*5 },600);
                $galLi.eq(16).stop().show().animate({ left:imgW*1, top:imgH*5 },600);
                $galLi.eq(17).stop().show().animate({ left:imgW*2, top:imgH*5 },600);

                $galLi.eq(18).stop().show().animate({ left:imgW*0, top:imgH*6 },600);
                $galLi.eq(19).stop().show().animate({ left:imgW*1, top:imgH*6 },600);
                $galLi.eq(20).stop().show().animate({ left:imgW*2, top:imgH*6 },600);

                break;

                case 2:
                $galLi.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 },600);
                $galLi.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 },600);

                $galLi.eq(2).stop().show().animate({ left:imgW*0, top:imgH*1 },600);               
                $galLi.eq(3).stop().show().animate({ left:imgW*1, top:imgH*1 },600);

                $galLi.eq(4).stop().show().animate({ left:imgW*0, top:imgH*2 },600);
                $galLi.eq(5).stop().show().animate({ left:imgW*1, top:imgH*2 },600);

                $galLi.eq(6).stop().show().animate({ left:imgW*0, top:imgH*3 },600);
                $galLi.eq(7).stop().show().animate({ left:imgW*1, top:imgH*3 },600);

                $galLi.eq(8).stop().show().animate({ left:imgW*0, top:imgH*4 },600);
                $galLi.eq(9).stop().show().animate({ left:imgW*1, top:imgH*4 },600);

                $galLi.eq(10).stop().show().animate({ left:imgW*0, top:imgH*5 },600);
                $galLi.eq(11).stop().show().animate({ left:imgW*1, top:imgH*5 },600);

                $galLi.eq(12).stop().show().animate({ left:imgW*0, top:imgH*6 },600);
                $galLi.eq(13).stop().show().animate({ left:imgW*1, top:imgH*6 },600);

                $galLi.eq(14).stop().show().animate({ left:imgW*0, top:imgH*7 },600);
                $galLi.eq(15).stop().show().animate({ left:imgW*1, top:imgH*7 },600);

                $galLi.eq(16).stop().show().animate({ left:imgW*0, top:imgH*8 },600);
                $galLi.eq(17).stop().show().animate({ left:imgW*1, top:imgH*8 },600);

                $galLi.eq(18).stop().show().animate({ left:imgW*0, top:imgH*9 },600);
                $galLi.eq(19).stop().show().animate({ left:imgW*1, top:imgH*9 },600);

                $galLi.eq(20).stop().show().animate({ left:imgW*0, top:imgH*10 },600);

                break;

                default:
                $galLi.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 },600);
                $galLi.eq(1).stop().show().animate({ left:imgW*0, top:imgH*1 },600);
                $galLi.eq(2).stop().show().animate({ left:imgW*0, top:imgH*2 },600);                
                $galLi.eq(3).stop().show().animate({ left:imgW*0, top:imgH*3 },600);
                $galLi.eq(4).stop().show().animate({ left:imgW*0, top:imgH*4 },600);
                $galLi.eq(5).stop().show().animate({ left:imgW*0, top:imgH*5 },600);
                $galLi.eq(6).stop().show().animate({ left:imgW*0, top:imgH*6 },600);
                $galLi.eq(7).stop().show().animate({ left:imgW*0, top:imgH*7 },600);
                $galLi.eq(8).stop().show().animate({ left:imgW*0, top:imgH*8 },600);
                $galLi.eq(9).stop().show().animate({ left:imgW*0, top:imgH*9 },600);
                $galLi.eq(10).stop().show().animate({ left:imgW*0, top:imgH*10 },600);
                $galLi.eq(11).stop().show().animate({ left:imgW*0, top:imgH*11 },600);
                $galLi.eq(12).stop().show().animate({ left:imgW*0, top:imgH*12 },600);
                $galLi.eq(13).stop().show().animate({ left:imgW*0, top:imgH*13 },600);
                $galLi.eq(14).stop().show().animate({ left:imgW*0, top:imgH*14 },600);
                $galLi.eq(15).stop().show().animate({ left:imgW*0, top:imgH*15 },600);
                $galLi.eq(16).stop().show().animate({ left:imgW*0, top:imgH*16 },600);
                $galLi.eq(17).stop().show().animate({ left:imgW*0, top:imgH*17 },600);
                $galLi.eq(18).stop().show().animate({ left:imgW*0, top:imgH*18 },600);
                $galLi.eq(19).stop().show().animate({ left:imgW*0, top:imgH*19 },600);
                $galLi.eq(20).stop().show().animate({ left:imgW*0, top:imgH*20 },600);

            }
            }

            setTimeout(resizeFn, 100);

            $win.resize(function(){
                setTimeout(resizeFn, 100);
            });

            
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
            var $win      = $(window);
            var $winW     = $(window).innerWidth();
            var $modalBtn = $('#section2 #gallery-wrap .modal-btn');
            var $modal    = $('#modal');
            var $close    = $('#modal .close');
            var $slide    = $('#modal .slide');
            var $slideView = $('#modal .slide-view');
            var $slideCon  = $('#modal .slide-container');
            var $slideConW  = $('#modal .slide-container').innerWidth();
            var $slideConH  = $slideConW * 0.67960416;
            var $modal2   = $('#modal .modal');
            var $plus     = $('#modal .plus');
            var $allplus  = $('#modal .allplus');
            var $minus    = $('#modal .minus');
            var $nextBtn  = $('#modal .next-btn');
            var $prevBtn  = $('#modal .prev-btn');
            var $slide    = $('#modal .slide');
            var $left     = $('#modal .left');
            var cnt       = 0;
            var cnt2      = 0;

            function resizeFn(){
                $winW = $(window).innerWidth();
                $slideConW  = $('#modal .slide-container').innerWidth();
                $slideConH  = $slideConW * 0.67960416;
                $slideCon.css({ width:$slideConW, height:$slideConH });
                $slideCon  = $('#modal .slide-container');
                if( $winW > 1425 ){
                    $slideCon.css({ width:$slideConW, top:-47 });
                }
                else if( $winW > 980 ){
                    $slideCon.css({ width:$winW, height:$slideConH, top:0+'%'  });
                }
                else if( $winW > 760 ){
                    $slideCon.css({ width:$winW, height:$slideConH, top:10+'%'  });
                }
                else if( $winW > 500 ){
                    $slideCon.css({ width:$winW, height:$slideConH, top:15+'%'  });
                }
                else if( $winW > 400 ){
                    $slideCon.css({ width:$winW, height:$slideConH, top:20+'%'  });
                }
                else{
                    $slideCon.css({ width:$winW, height:$slideConH, top:26+'%'  });
                }

            }

            setTimeout(resizeFn, 100);

            $win.resize(function(){
                setTimeout(resizeFn, 100);
            });


            $modalBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        cnt2 = idx;
                        $modal.stop().fadeIn(300);
                        nextMainSlideFn();
                    }
                })
            });

            $close.on({
                click:function(){
                    $slideView.css({ transform:'scale(1)' });
                    $slideView.removeClass('addPlus');
                    $modal.stop().fadeOut(300);
                }
            });
            

            function plusFn(){
                cnt++;
                $slideView.css({ transform:'scale('+1.5*cnt+')' });
            }
            
            function minusFn(){
                cnt--;
                if(cnt > 0){
                    $slideView.css({ transform:'scale('+1.5*cnt+')' });
                }
                else{
                    cnt =0;
                    $slideView.css({ transform:'scale(1)' });
                }


            }

            $plus.on({
                click:function(){
                    plusFn();
                }
            });
            
            $minus.on({
                click:function(){                    
                    minusFn();
                }
            });

            $allplus.on({
                click:function(){
                    $slideView.css({ transform:'' });
                    $slideView.toggleClass('addPlus');
                }
            });

            
            //다음메인슬라이드함수
            function nextMainSlideFn(){
                $slide.css({ zIndex:1, opacity:1 });
                $slide.eq(cnt2==0?20:cnt2-1).css({ zIndex:2 });
                $slide.eq(cnt2).css({ zIndex:3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 }, 600);
                $modal2.css({ zIndex:1, display:'none' });
                $modal2.eq(cnt2==0?20:cnt2-1).css({ zIndex:2, display:'none' });
                $modal2.eq(cnt2).css({ zIndex:3, display:'block' });
                $left.html(cnt2+1 + ' / 21');
            }

            function prevMainSlideFn(){
                $slide.css({ zIndex:1, opacity:1 });
                $slide.eq(cnt2==20?0:cnt2+1).css({ zIndex:2 });
                $slide.eq(cnt2).css({ zIndex:3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 }, 600);
                $modal2.css({ zIndex:1, display:'none' });
                $modal2.eq(cnt2==0?20:cnt2-1).css({ zIndex:2, display:'none' });
                $modal2.eq(cnt2).css({ zIndex:3, display:'block' });
                $left.html(cnt2+1 + ' / 21');
            }

            //다음슬라이드카운트함수
            function nextSlideCntFn(){
                cnt2++;
                if(cnt2 > 20){
                    cnt2=0;
                }
                nextMainSlideFn();
            }

            function prevSlideCntFn(){
                cnt2--;
                if(cnt2 < 0){
                    cnt2=20;
                }
                prevMainSlideFn();
            }

            //다음버튼클릭이벤트
            $nextBtn.on({
                click:function(){
                    if( !$slide.is(':animated') ){
                        nextSlideCntFn();
                    }
                }
            });

            //이전버튼클릭이벤트
            $prevBtn.on({
                click:function(){
                    if( !$slide.is(':animated') ){
                        prevSlideCntFn();
                    }
                }
            });

            //스와이프이벤트
            $slideView.swipe({
                swipeLeft:function(){
                    if( !$slide.is(':animated') ){
                        nextSlideCntFn();
                    }
                },
                swipeRight:function(){
                    if( !$slide.is(':animated') ){
                        prevSlideCntFn();
                    }
                }
            });


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

           $lili.eq(2).addClass('addBack');

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