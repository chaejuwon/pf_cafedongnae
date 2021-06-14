<?php
        include_once('../main_header1.php');
    ?>
    
    <title>OFFLINE 매장소개</title>
    
    <?php
        include_once('../main_header2.php');
    ?>

    <link rel="stylesheet" href="./css/style5.css">
    <link rel="stylesheet" href="./css/response5.css">

    <?php
        include_once('../main_header3.php');
    ?>


    <?php
        include_once('../main_header4.php');
    ?>

    <main id="main">

    <section id="section1">
        <div class="wrap">
            <div class="gap">
                <div class="container">
                    <div class="content">

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="section2">
        <div class="wrap">
            <div class="gap">
                <div class="container">
                    <div class="content">
                        <h2>카페동네 OFFLINE</h2>
                        <ul class="clearfix">
                            <li><a href="javascript:" class="board-btn addColor">전체 <span class="addBorder"></span></a></li>
                            <li><a href="javascript:" class="board-btn">서울 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">경기 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">인천 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">광주 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">대구 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">대전 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">부산 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">울산 <span></span></a></li>
                            <li><a href="javascript:" class="board-btn">제주 <span></span></a></li>
                        </ul>
                        <table class="board">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th><a href="javascript:" class="category-btn">카테고리</a> <i class="material-icons">arrow_drop_down</i></th>
                                    <th>제목</th>
                                </tr>
                            </thead>
                            <tbody class="board-body">
                                <!-- <tr>
                                    <td>1</td>
                                    <td>경기</td>
                                    <td>다람주주주ㅜ주주주</td>
                                </tr> -->
                            </tbody>
                        </table>

                        <ul class="cate-btn-wrap">
                            <li><a href="javascript:" class="cate-btn addWeight">전체보기</a></li>
                            <li><a href="javascript:" class="cate-btn">서울</a></li>
                            <li><a href="javascript:" class="cate-btn">경기</a></li>
                            <li><a href="javascript:" class="cate-btn">인천</a></li>
                            <li><a href="javascript:" class="cate-btn">광주</a></li>
                            <li><a href="javascript:" class="cate-btn">대구</a></li>
                            <li><a href="javascript:" class="cate-btn">대전</a></li>
                            <li><a href="javascript:" class="cate-btn">부산</a></li>
                            <li><a href="javascript:" class="cate-btn">울산</a></li>
                            <li><a href="javascript:" class="cate-btn">제주</a></li>
                        </ul>

                        <div class="input-wrap">
                            <input type="text" id="boardSearch" name="boardSearch" value="" placeholder="Search">
                            <i class="fas fa-search"></i>
                        </div>
                        
                        <div id="pageNation">
                            <div class="prev-arrow-box">
                                <a href="javascript:" class="prev-btn"><i class="fas fa-angle-left"></i></a>
                            </div>
                            <div class="page-btn-box">
                                <ul>
                                    <!-- <li><a href="javascript:" class="page-btn addColor">1</a></li> -->
                                </ul>
                            </div>
                            <div class="next-arrow-box">
                                <a href="javascript:" class="next-btn"><i class="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </main>

    <?php
        include_once('../main_footer1.php');
    ?>

    <?php
        include_once('../main_search.php');
    ?>

    <?php
        include_once('../main_footer2.php');
    ?>
<script src="./js/cafedongnae5.js"></script>
</body>
</html>