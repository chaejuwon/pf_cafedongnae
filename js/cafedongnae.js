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
            this.section7Fn();
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
        section7Fn:function(){
            var today   = null;    //날짜 객체
            var hours   = null; //시
            var minutes = null; //분
            var seconds = null; //초

            var year    = null; //년
            var month   = null; //월
            var date    = null; //일
            var day     = null; //요일

            var y       = 0; //년 카운트 변수
            var m       = 0; //월 카운트 변수
            
            var timerImg2 = $('.timer-img2'); //시
            var timerImg3 = $('.timer-img3'); //분
            var timerImg4 = $('.timer-img4'); //초
            var dateBox   = $('.date-box span');   //날짜박스
            var txt       = '';

            var $slideWrap = $('#section7 .slide-wrap');
            var n = $('#section7 .slide-wrap .slide').length-2-1;
            var cnt1 = 0;
            var $slide = $('#section7 .slide');
            var $leftBox = $('#section7 .left-box');
            var $leftBoxW = $('#section7 .left-box').innerWidth();
            var $leftBoxH = $leftBoxW*1;
            var $winW = $(window).innerWidth();


            function resizeFn(){
                $winW = $(window).innerWidth();
                $leftBox = $('#section7 .left-box');
                $leftBoxW = $('#section7 .left-box').innerWidth();
                $leftBoxH = $leftBoxW*1;
                if($winW > 980){
                    $slide.css({ width: $leftBoxW, height:408 });
                }
                else{
                    $slide.css({ width: $leftBoxW, height:$leftBoxH });
                }                
                $slideWrap.stop().animate({ left: -$leftBoxW*cnt1 },0);
            }

            setTimeout(resizeFn, 100);

            $(window).resize(function(){
                setTimeout(resizeFn, 100);
            });

            //메인슬라이드 함수 
            function mainSlideFn(){
                $slideWrap.stop().animate({ left: -$leftBoxW*cnt1 },600, function(){
                    if(cnt1 > n){
                        cnt1 = 0;
                    }
                    if(cnt1 < 0){
                        cnt1 = n;
                    }
                    $slideWrap.stop().animate({ left: -$leftBoxW*cnt1 },0);
                });
            }
            //다음 슬라이드 카운트 함수
            function mainNextSlideCntFn(){
                cnt1++;
                mainSlideFn();
            }
            //이전 슬라이드 카운트 함수
            function mainPrevSlideCntFn(){
                cnt1--;
                mainSlideFn();
            }



            /////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////
            //아날로그시계 알고리즘 
            function timerFn(){
                today   = new Date();          //날짜 생성자 객체
                //시간 - 시:분:초
                hours   = today.getHours();    //시
                minutes = today.getMinutes();  //분
                seconds = today.getSeconds();  //초
                // console.log( hours + '시 ' +  minutes + '분 ' + seconds +'초' ); 

                //날짜 - 년-월-일-요일
                year    = today.getFullYear(); //년 1900 ~ 9999
                month   = today.getMonth()+1;    //월 : 0 ~ 11 : 12개월
                date    = today.getDate();     //일 : 1 ~ 30 , 1 ~ 31, 1 ~ 28, 1 ~ 29
                day     = today.getDay();      //요일 일요일 시작요일(0,1,2,3,4,5,6)
                // yoil    = ['SUN','MON','TUE','WED','THU','FRI','STA'];    //숫자 요일을 한글이나 영문 표기
                yoil    = ['일','월','화','수','목','금','토'];    //숫자 요일을 한글이나 영문 표기
                
                // console.log( year + '년 ' +  (month+1) + '월 ' + date +'일 ' + yoil +'요일' ); 
                txt = year + '-' +  (month+1) + '-' + date +'-' + yoil[day];
               
                //현재 시각
                timerImg2.css({ transform: 'rotate(' + ((hours*30)+(0.5*minutes)) + 'deg)' }); /* 1시간 30도+(1시간에 해당하는분의각도*분) */
                timerImg3.css({ transform: 'rotate(' + (minutes*6) + 'deg)' }); /* 1분 6도 */
                timerImg4.css({ transform: 'rotate(' + (seconds*6) + 'deg)' }); /* 1초 6도 */                

                //현재 날짜
                dateBox.html( txt );

            }

            //아날로그 시계와 날짜 1초 간격으로 현재 날짜 시간 가져오기 그리고 시간과 각도 계산
            setInterval(function(){
                timerFn();
            }, 1000);
            timerFn();
            


            //달력 알고리즘 

            var firstDay = null;
            var lastDate = null;


            var col = null; 
            var prevLastDate = null; 
            var cnt = 0;




            function calendarFn( y, m ){
                col = null;
                prevLastDate = null;
                cnt = 0;

                $('.calendar table caption').html( y + '년도 ' +  m + '월' );
                $('td').removeClass('now');


                var nowYear = new Date().getFullYear(); 
                var nowMonth = new Date().getMonth()+1; 
                var nowDate  = new Date().getDate();


                firstDay = new Date( y + '-' + m + '-' + 1).getDay(); 
                col = firstDay; 
                prevLastDate = new Date( y, m-1, 0).getDate();  
                lastDate = new Date( y, m, 0).getDate(); 
                

                for(var i=1; i<=lastDate; i++){ 
                    if( col !== null ){
                        $('td').eq(col).html( i );                      

                        if( nowYear == y && nowMonth == m  ){                                                        
                            if( nowDate == i ){
                                $('td').eq(col).addClass('now');    
                            }                                                    
                        }
                        else{
                            $('td').removeClass('now');
                        }

                        col++; 

                    }
                }

                



                for(var i=firstDay-1; i>=0; i--){
                    $('td').eq(i).html(prevLastDate).addClass('color1');
                    prevLastDate--;
                }


                for(var i=col; i<$('td').length; i++){
                    cnt++;
                    $('td').eq(i).html( cnt ).addClass('color1');
                }



            }

            calendarFn( year, month );


            y = year;
            m = month; 


            $('.next-btn').on({
                click:  function(){
                    m++;
                    if(m>12){
                        m=1; 
                        y++; 
                    }
                    $('td').removeClass('color1'); 
                    calendarFn( y, m );
                    if( !$slideWrap.is(':animated') ){
                        mainNextSlideCntFn();
                    }                
                }
            });


            $('.prev-btn').on({
                click:  function(){
                    m--;
                    if(m<1){
                        m=12;
                        y--; 
                    }
                    $('td').removeClass('color1'); 
                    calendarFn( y, m ); 
                    if( !$slideWrap.is(':animated') ){
                        mainPrevSlideCntFn();
                    }  
                }
            });


            

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
           var $li = $('#sub-modal .right-box > ul > li');

           $li.eq(0).addClass('addBack');

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