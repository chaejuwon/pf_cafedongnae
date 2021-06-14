;(function($){

    var cafe = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
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
            
            $span.eq(2).addClass('addBorder');

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
            var $winW  = $(window).innerWidth();
            var $tbody = $('#section2 .board-body');
            var $pageBtnBoxUl = $('.page-btn-box ul');
            var $pageBtn = $('.page-btn-box .page-btn');
            var $boardBtn = $('.board-btn');
            var $nextBtn = $('.next-btn');
            var $prevBtn = $('.prev-btn');
            var $span = $('.content > ul > li > a > span');
            var txt = '';
            var $categoryBtn = $('#section2 .category-btn');
            var $cateBtnWrap = $('#section2 .cate-btn-wrap');
            var $cateBtnWrapLi = $('#section2 .cate-btn-wrap > li');
            var $cateBtnwrapA = $('#section2 .cate-btn-wrap > li > a');
            var $boardBtn = $('#section2 .board-btn');

            


            var a = [];
            var b = [];
            var c = [];
            var d = [];
            var ee = [];
            var f = [];
            var g = [];
            var h = [];
            var ii = [];
            var jj = [];


            var bCnt = 0;
            var cCnt = 0;
            var dCnt = 0;
            var eCnt = 0;
            var fCnt = 0;
            var gCnt = 0;
            var hCnt = 0;
            var iCnt = 0;
            var jCnt = 0;
            var imsi = null;

            var tot = 0;
            var filter = 0;

            var list = 7; //화면에 보이는 목록의 갯수
            var totalListNum = 63; //전체 목록의 갯수
            
            var pageBtnNum = 5; //현재 페이지의 보이는 페이지네이션 버튼의 갯수
            var pageGroupNum = 4; // 4그룹
            var totalPageBtnNum = 17; //전체 페이지버튼의 갯수(6개)
            var startNum = 0;
            var endNum = list;

            var groupCnt = 0;
            var groupStartNum = 0;
            var groupEndNum = 0;
            var pageNumGY = 0;


            function boardFn(){
                $.ajax({
                    url:'./data/board.json',
                    dataType:'JSON',
                    success:function(data){
                        $.each(data.cafe, function(idx,obj){
                            a[idx] = [];

                            a[idx][0] = (idx+1);
                            a[idx][1] = obj.카테고리;
                            a[idx][2] = obj.제목;
                            
                            if(obj.카테고리 == '서울'){
                               b[bCnt] = [];
                               b[bCnt][0] = (bCnt+1);
                               b[bCnt][1] = obj.카테고리;
                               b[bCnt][2] = obj.제목;
                               bCnt++;
                            }
                            if(obj.카테고리 == '경기'){
                                c[cCnt] = [];
                                c[cCnt][0] = (cCnt+1);
                                c[cCnt][1] = obj.카테고리;
                                c[cCnt][2] = obj.제목;
                                cCnt++;
                            }
                            if(obj.카테고리 == '인천'){
                                d[dCnt] = [];
                                d[dCnt][0] = (dCnt+1);
                                d[dCnt][1] = obj.카테고리;
                                d[dCnt][2] = obj.제목;
                                dCnt++;
                            }
                            if(obj.카테고리 == '광주'){
                                ee[eCnt] = [];
                                ee[eCnt][0] = (eCnt+1);
                                ee[eCnt][1] = obj.카테고리;
                                ee[eCnt][2] = obj.제목;
                                eCnt++;
                            }
                            if(obj.카테고리 == '대구'){
                                f[fCnt] = [];
                                f[fCnt][0] = (fCnt+1);
                                f[fCnt][1] = obj.카테고리;
                                f[fCnt][2] = obj.제목;
                                fCnt++;
                            }
                            if(obj.카테고리 == '대전'){
                                g[gCnt] = [];
                                g[gCnt][0] = (gCnt+1);
                                g[gCnt][1] = obj.카테고리;
                                g[gCnt][2] = obj.제목;
                                gCnt++;
                            }
                            if(obj.카테고리 == '부산'){
                                h[hCnt] = [];
                                h[hCnt][0] = (hCnt+1);
                                h[hCnt][1] = obj.카테고리;
                                h[hCnt][2] = obj.제목;
                                hCnt++;
                            }
                            if(obj.카테고리 == '울산'){
                                ii[iCnt] = [];
                                ii[iCnt][0] = (iCnt+1);
                                ii[iCnt][1] = obj.카테고리;
                                ii[iCnt][2] = obj.제목;
                                iCnt++;
                            }
                            if(obj.카테고리 == '제주'){
                                jj[jCnt] = [];
                                jj[jCnt][0] = (jCnt+1);
                                jj[jCnt][1] = obj.카테고리;
                                jj[jCnt][2] = obj.제목;
                                jCnt++;
                            }

                            
                            
                        });

                        //전체의 갯수 정렬
                        for( var i=0; i<a.length-1; i++ ){  
                            for( var j=i+1; j<a.length; j++ ){  
                                if( a[i][0] < a[j][0] ){ 
                                    for( var k=0; k<3; k++ ){   
                                        imsi    = a[i][k]; 
                                        a[i][k] = a[j][k]; 
                                        a[j][k] = imsi;
                                    }
                                }  
                                
                            } 
                        } 

                        //서울갯수 정렬
                        for( var i=0; i<b.length-1; i++ ){  
                            for( var j=i+1; j<b.length; j++ ){  
                                if( b[i][0] < b[j][0] ){ 
                                    for( var k=0; k<3; k++ ){   
                                        imsi    = b[i][k]; 
                                        b[i][k] = b[j][k]; 
                                        b[j][k] = imsi;
                                    }
                                }  
                                
                            } 
                        }             

                        
                        //경기갯수 정렬
                        for( var i=0; i<c.length-1; i++ ){
                            for(var j=i+1; j<c.length; j++){
                                if(c[i][0] < c[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi    = c[i][k]; 
                                        c[i][k] = c[j][k]; 
                                        c[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        
                        //인천갯수 정렬
                        for( var i=0; i<d.length-1; i++ ){
                            for(var j=i+1; j<d.length; j++){
                                if(d[i][0] < d[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi    = d[i][k]; 
                                        d[i][k] = d[j][k]; 
                                        d[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        //광주갯수 정렬
                        for( var i=0; i<ee.length-1; i++ ){
                            for(var j=i+1; j<ee.length; j++){
                                if(ee[i][0] < ee[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi     = ee[i][k]; 
                                        ee[i][k] = ee[j][k]; 
                                        ee[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        //대구갯수 정렬
                        for( var i=0; i<f.length-1; i++ ){
                            for(var j=i+1; j<f.length; j++){
                                if(f[i][0] < f[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi    = f[i][k]; 
                                        f[i][k] = f[j][k]; 
                                        f[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        //대전갯수 정렬
                        for( var i=0; i<g.length-1; i++ ){
                            for(var j=i+1; j<g.length; j++){
                                if(g[i][0] < g[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi    = g[i][k]; 
                                        g[i][k] = g[j][k]; 
                                        g[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        //부산갯수 정렬
                        for( var i=0; i<h.length-1; i++ ){
                            for(var j=i+1; j<h.length; j++){
                                if(h[i][0] < h[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi    = h[i][k]; 
                                        h[i][k] = h[j][k]; 
                                        h[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        //울산갯수 정렬
                        for( var i=0; i<ii.length-1; i++ ){
                            for(var j=i+1; j<ii.length; j++){
                                if(ii[i][0] < ii[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi    = ii[i][k]; 
                                        ii[i][k] = ii[j][k]; 
                                        ii[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        //제주갯수 정렬
                        for( var i=0; i<jj.length-1; i++ ){
                            for(var j=i+1; j<jj.length; j++){
                                if(jj[i][0] < jj[j][0] ){
                                    for(var k=0; k<3; k++){
                                        imsi    = jj[i][k]; 
                                        jj[i][k] = jj[j][k]; 
                                        jj[j][k] = imsi;
                                    }
                                }
                            }
                        }


                        
                        
                        totalListNum = a.length;


                        $bunho = null;
                        //페이지누를때마다 보여지는 레코드 함수
                        function pagePushRecordFn(){
                         

                            txt = '';
                            $tbody.html('');
                            // 내가 전에 눌렀던 변수의값과 지금 누른 변수의값이 다르면 startNum의 값을 0으로 바꿔라


                            if( filter==0 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + a[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==1 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + b[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==2 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + c[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==3 ){
                                // console.log(startNum, endNum);
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + d[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==4 ){                                                
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + ee[i][j] + '</td>'
                                    }
                                    txt += '</tr>';                                    
                                }
                            }
                            else if( filter==5 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + f[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==6 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + g[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==7 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + h[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==8 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + ii[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }
                            else if( filter==9 ){
                                for(var i=startNum; i<endNum; i++){
                                    txt += '<tr>';
                                    for(var j=0; j<=2; j++){
                                        txt += '<td>' + jj[i][j] + '</td>'
                                    }
                                    txt += '</tr>';
                                }
                            }


                            $tbody.html(txt);
                            txt = '';
                        }
                        totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                        pageGroupNum = Math.ceil(totalPageBtnNum/pageBtnNum); //페이지 그룹의 갯수

                        pagePushRecordFn();





                        

                        function pageNationFn(){

                            if(filter == 0){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = a.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 1){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = b.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 2){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = c.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 3){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = d.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 4){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = ee.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 5){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = f.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 6){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = g.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 7){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = h.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 8){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = ii.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            else if(filter == 9){
                                $pageBtnBoxUl.html('');
                                txt = '';
    
                                groupStartNum = groupCnt * pageBtnNum;
                                groupEndNum = groupStartNum + pageBtnNum;
    
                                // console.log(groupStartNum);
                                // console.log(groupEndNum);
    
                                totalListNum = jj.length;
                                totalPageBtnNum = Math.ceil(totalListNum/list); //전체 페이지 버튼의 갯수
                                console.log(totalPageBtnNum);
    
                                if( groupEndNum > totalPageBtnNum ){
                                    groupEndNum = totalPageBtnNum;
                                }
                                // console.log(totalPageBtnNum);
    
        
                                for(var i=groupStartNum; i<groupEndNum; i++){ //현재화면의 보이는 페이지 버튼의 갯수
                                    if(i%pageBtnNum == 0){
                                        txt += "<li><a href='#' class='page-btn addColor'>" + (i+1) + "</a></li>"    
                                    }
                                    else{
                                        txt += "<li><a href='#' class='page-btn'>" + (i+1) + "</a></li>"
                                    }
                                }
        
                                $pageBtnBoxUl.html( txt );
                            }

                            $pageBtn = $('.page-btn-box .page-btn');



                            //
                            if(filter == 0){
                                totalListNum = a.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 1){
                                totalListNum = b.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 2){
                                totalListNum = c.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 3){
                                totalListNum = d.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 4){
                                totalListNum = ee.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 5){
                                totalListNum = f.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 6){
                                totalListNum = g.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 7){
                                totalListNum = h.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 8){
                                totalListNum = ii.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }
                            if(filter == 9){
                                totalListNum = jj.length;
                                startNum = parseInt(($pageBtn.eq(0).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                if( endNum > totalListNum ){
                                    endNum = totalListNum;
                                }
                            }


           

                            pagePushRecordFn();
                        }

                        pageNationFn();

                        $nextBtn.on({
                            click:function(e){
                                e.preventDefault();
                                groupCnt++;
                                if( groupCnt > pageGroupNum-1 ){
                                    groupCnt = pageGroupNum-1;
                                    return false;
                                }
                               
                        
                                pageNationFn();
                                

                            }
                        });

                        $prevBtn.on({
                            click:function(e){
                                e.preventDefault();
                                groupCnt--;
                                if( groupCnt < 0 ){
                                    groupCnt = 0;
                                }
                                
                                pageNationFn();
                                


                            }
                        });



                        // 페이지 버튼을 눌렀을때 다음페이지로 넘어감
                        

                        $(document).on('mouseenter', '.page-btn', function(){
                            $pageBtn.each(function(idx){
                                $(this).on({
                                    click:function(e){
                                        
                                        e.preventDefault();
                                        e.stopImmediatePropagation()
                                        $pageBtn.removeClass('addColor');
                                        $(this).addClass('addColor');
                                        
    
                                        
                                            // startNum = parseInt(($(this).text()-1) * list); //(1-1) *7 = 0 // (2-1) * 7 = 7 // (3-1) * 7 = 14
                                            // endNum = startNum + list; // 0 + 7 = 7  //  7 + 7 = 14 // 14 + 7 = 21

                                            // if( endNum > totalListNum ){
                                            //     endNum = totalListNum;
                                            // }

                                            if(filter == 0){
                                                totalListNum = a.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 1){
                                                totalListNum = b.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 2){
                                                totalListNum = c.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 3){
                                                totalListNum = d.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 4){
                                                totalListNum = ee.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 5){
                                                totalListNum = f.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 6){
                                                totalListNum = g.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 7){
                                                totalListNum = h.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 8){
                                                totalListNum = ii.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                            if(filter == 9){
                                                totalListNum = jj.length;
                                                startNum = parseInt(($(this).text()-1) * list); //(1-1) *10 = 0 // (2-1) * 10 = 10 // (3-1) * 10 = 20
                                                endNum = startNum + list; // 0 + 10 = 10  //  10 + 10 = 20 // 20 + 10 = 30 
                                                if( endNum > totalListNum ){
                                                    endNum = totalListNum;
                                                }
                                            }
                                        


                                        for(var i=startNum; i<endNum; i++){
                                            pagePushRecordFn(i);
                                        }
    
                       
    
                                        pagePushRecordFn();
    
                                    }
                                });
                            });
                        });

                        // 지역별 AJAX
                        $(document).on('mouseenter', '.board-btn', function(e){                            
                            $boardBtn.each(function(idx){
                                $(this).on({
                                    click:function(e){
                                        console.log('hi');
                                        e.preventDefault();
                                        e.stopImmediatePropagation()
                                        $boardBtn.removeClass('addColor');
                                        $(this).addClass('addColor');
                                        $span.removeClass('addBorder');
                                        $span.eq(idx).addClass('addBorder');

                                        
                                        
                                        switch( idx ){
                                            case 0:
                                            tot = a.length;
                                            startNum = 0;
                                            break;

                                            case 1:                             
                                            tot = b.length;
                                            startNum = 0;
                                            break;

                                            case 2:                         
                                            tot = c.length;
                                            break;

                                            case 3:                                        
                                            tot = d.length;
                                            break;

                                            case 4:                                        
                                            tot = ee.length;
                                            
                                            break;

                                            case 5:                                        
                                            tot = f.length;
                                            break;

                                            case 5:                                        
                                            tot = g.length;
                                            break;

                                            case 5:                                        
                                            tot = h.length;
                                            break;

                                            case 5:                                        
                                            tot = i.length;
                                            break;

                                            case 5:                                        
                                            tot = j.length;
                                            break;
                                                                                        
                                        }


                                        filter = idx;
                                        pagePushRecordFn();                                        
                                        pageNationFn();
                                        
                                        

                                        

                                    }
                                });
                            });
                        });




                        $categoryBtn.on({
                            click:function(){
                                $cateBtnWrap.toggleClass('addShow');
                            }
                        });

                        $cateBtnWrapLi.each(function(idx){
                            $(this).on({
                                click:function(){
                                    $cateBtnwrapA.removeClass('addWeight');
                                    $cateBtnwrapA.eq(idx).addClass('addWeight');
                                }
                            });
                        });


                        

                        
                        

                    },
                    error:function(msg){
                        console.log(msg);
                        alert('AJAX 연결 실패!!')
                    }
                });

            }

            setTimeout(boardFn, 100);
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

            $li.eq(2).addClass('addBack');
 
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