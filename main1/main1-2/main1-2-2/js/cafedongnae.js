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
            var $win       = $(window);
            var $winW      = $(window).innerWidth();
            var $winH      = $(window).innerHeight();
            var $slide     = $('#section1 .slide');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide1Wrap = $('#section1 .slide1-wrap');
            var $slide1    = $('#section1 .slide1-wrap > .slide1');
            var $nextBtn  = $('#section1 .next-btn');
            var $prevBtn  = $('#section1 .prev-btn');
            var cnt       = 0;
            var $slideView = $('#section1 .slide-view');
            var setId    = null;
            var setId2    = null;

            function resizeFn(){
                $winW = $(window).innerWidth();
                // $slide.css({ width:$winW });
                $slide1.css({ width:$winW });
                $slideWrap.stop().animate({ left:-($winW*cnt)},0,'easeInOutQuart');

                if( $winW > 1280 ){
                    $slide.css({ width:$winW, height: 856 });
                    $slide1.css({ width:$winW, height: 856 });
                }
                else if( $winW > 980 ){
                    $slide.css({ width:$winW, height: 600 });
                    $slide1.css({ width:$winW, height: 600 });
                }
                else if( $winW > 760 ){
                    $slide.css({ width:$winW, height: 500 });
                    $slide1.css({ width:$winW, height: 500 });
                }
                else{
                    $slide.css({ width:$winW, height: 400 });
                    $slide1.css({ width:$winW, height: 400 });
                }
                
            }

            setTimeout(resizeFn, 100);

            $win.resize(function(){
                setTimeout(resizeFn, 100);
            });



            // 다음메인슬라이드함수호출
            function nextmainSlideFn(){
                $slide1Wrap.css({ zIndex:2 });
                $slideWrap.css({ zIndex:1 });
                $slide1.css({ zIndex:1, opacity:1 });
                $slide1.eq(cnt==0?6:cnt-1).css({ zIndex:2 });
                $slide1.eq(cnt).css({ zIndex:3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 },1000);
                $slideWrap.stop().animate({ left:-($winW*cnt)},600,'easeInOutQuart');
            }

            // 이전메인슬라이드함수
            function prevmainSlideFn(){
                $slide1Wrap.css({ zIndex:2 });
                $slideWrap.css({ zIndex:1 });
                $slide1.css({ zIndex:1, opacity:1 });
                $slide1.eq(cnt==6?0:cnt+1).css({ zIndex:2 })
                $slide1.eq(cnt).css({ zIndex:3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 },1000);;
                $slideWrap.stop().animate({ left:-($winW*cnt)},600,'easeInOutQuart');
            }

            // 다음슬라이드함수
            function nextSlideCntFn(){
                cnt++;
                if(cnt > 6){
                    cnt=0;
                }
                nextmainSlideFn();
            }

            // 이전슬라이드함수
            function prevSlideCntFn(){
                cnt--;
                if(cnt < 0){
                    cnt=6;
                }
                prevmainSlideFn();
            }

            // 다음버튼클릭이벤트
            $nextBtn.on({
                click:function(){
                    if( !$slide1.is(':animated') ){
                        pauseFn();
                        nextSlideCntFn();
                    }
                }
            });

            //이전버튼클릭이벤트
            $prevBtn.on({
                click:function(){
                    if( !$slide1.is(':animated') ){
                        pauseFn();
                        prevSlideCntFn();
                    }
                }
            });


            // 메인스와이프슬라이드함수
            function swipeMainSlideFn(){
                $slideWrap.css({ zIndex:2 });
                $slide1Wrap.css({ zIndex:1 });
                $slideWrap.stop().animate({ left:-($winW*cnt)},600,'easeInOutQuart' ,function(){
                    if(cnt > 6) cnt =0;
                    if(cnt < 0) cnt =6;
                    $slideWrap.stop().animate({ left:-($winW*cnt)},0,'easeInOutQuart');
                });
            }

            //다음스와이프카운트함수
            function nextSwipeCntFn(){
                cnt++;
                swipeMainSlideFn();
            }

            //이전스와이프카운트함수
            function prevSwipeCntFn(){
                cnt--;
                swipeMainSlideFn();
            }

            //스와이프이벤트
            $slideView.swipe({
                swipeLeft:function(){
                    if( !$slideWrap.is(':animated') ){
                        pauseFn();
                        nextSwipeCntFn();
                        $slideView.css({ cursor:'pointer' });
                    }
                },
                swipeRight:function(){
                    if( !$slideWrap.is(':animated') ){
                        pauseFn();
                        prevSwipeCntFn();    
                    }
                }
            });

            //자동타이머
            function autoTimerFn(){
                setId = setInterval(nextSlideCntFn, 4000);
            }
            autoTimerFn();

            //4초간이벤트가없으면 자동타이머 다시실행
            var t = 0;
            function pauseFn(){
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>4){
                        console.log(t);
                        t=0;
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCntFn();
                        autoTimerFn();
                    }
                },1000);
            }

            $slideView.on({
                click:function(){
                    $(this).css({ pointer: 'cursor' });
                }
            });
        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        section4Fn:function(){
            var $win = $(window);
            var $winW = $(window).innerWidth();
            var $slideWrap   = $('#section4 .slide-wrap');
            var $slideView   = $('#section4 .slide-view');
            var $rightBox = $('#section4 .right-box');
            var $rightBoxW = $('#section4 .right-box').innerWidth();
            var $slide  = $('#section4 .slide');
            var cnt          = 0;
            var setId    = null;
            var setId2    = null;

            function resizeFn(){
                $winW = $(window).innerWidth();
                $slide  = $('#section4 .slide');
                $rightBoxW = $('#section4 .right-box').innerWidth();
                $rightBox = $('#section4 .right-box');
                $slide.css({ width: $rightBoxW });
                swipeMainSlideFn();
            }

            setTimeout(resizeFn, 100);


            $win.resize(function(){
                setTimeout(resizeFn, 100);
            });




            // 메인스와이프슬라이드함수
            function swipeMainSlideFn(){
                $slideWrap.stop().animate({ left:-($rightBoxW*cnt)},600,'easeInOutQuart' ,function(){
                    if(cnt > 9) cnt =0;
                    if(cnt < 0) cnt =9;
                    $slideWrap.stop().animate({ left:-($rightBoxW*cnt)},0,'easeInOutQuart');
                });
            }

            //다음스와이프카운트함수
            function nextSwipeCntFn(){
                cnt++;
                swipeMainSlideFn();
            }

            //이전스와이프카운트함수
            function prevSwipeCntFn(){
                cnt--;
                swipeMainSlideFn();
            }

            //스와이프이벤트
            $slideView.swipe({
                swipeLeft:function(){
                    if( !$slideWrap.is(':animated') ){
                        pauseFn();
                        nextSwipeCntFn();
                        $slideView.css({ cursor:'pointer' });
                    }
                },
                swipeRight:function(){
                    if( !$slideWrap.is(':animated') ){
                        pauseFn();
                        prevSwipeCntFn();    
                    }
                }
            });

            //자동타이머
            function autoTimerFn(){
                setId = setInterval(nextSwipeCntFn, 4000);
            }
            autoTimerFn();

            //4초간이벤트가없으면 자동타이머 다시실행
            var t = 0;
            function pauseFn(){
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>4){
                        console.log(t);
                        t=0;
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSwipeCntFn();
                        autoTimerFn();
                    }
                },1000);
            }

            $slide
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
            var $modalBtn = $('#section5 .modal-btn');
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
                    $slideCon.css({ width:$winW, height:$slideConH, top:23+'%'  });
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
                console.log(cnt);
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
                $slide.eq(cnt2==0?5:cnt2-1).css({ zIndex:2 });
                $slide.eq(cnt2).css({ zIndex:3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 }, 600);
                $modal2.css({ zIndex:1, display:'none' });
                $modal2.eq(cnt2==0?5:cnt2-1).css({ zIndex:2, display:'none' });
                $modal2.eq(cnt2).css({ zIndex:3, display:'block' });
                $left.html(cnt2+1 + ' / 6');
            }

            function prevMainSlideFn(){
                $slide.css({ zIndex:1, opacity:1 });
                $slide.eq(cnt2==5?0:cnt2+1).css({ zIndex:2 });
                $slide.eq(cnt2).css({ zIndex:3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 }, 600);
                $modal2.css({ zIndex:1, display:'none' });
                $modal2.eq(cnt2==0?5:cnt2-1).css({ zIndex:2, display:'none' });
                $modal2.eq(cnt2).css({ zIndex:3, display:'block' });
                $left.html(cnt2+1 + ' / 6');
            }

            //다음슬라이드카운트함수
            function nextSlideCntFn(){
                cnt2++;
                if(cnt2 > 5){
                    cnt2=0;
                }
                nextMainSlideFn();
            }

            function prevSlideCntFn(){
                cnt2--;
                if(cnt2 < 0){
                    cnt2=5;
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