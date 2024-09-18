// +----------------------------------------------------------------------
// | desc: layout js
// +----------------------------------------------------------------------
// | Created By 2023.03.20
// +----------------------------------------------------------------------
// | Author: cdzhyq
// +----------------------------------------------------------------------



/*禁止缩放safari浏览器*/
var lastTouchEnd = 0;
window.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});
window.addEventListener("touchend", function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
/* 阻止双指指掐放大*/
window.addEventListener("gesturestart", function (event) {
    event.preventDefault();
});

/**
 *desc:初始化加载
 *@param void;
 *@return void;
 */
$(function(){
	//lodding
  	$(window).load(function(){
  		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

     $(document).on("click", "#back_top", function () {
        $("html,body").animate({ scrollTop: 0 });
    });
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        var $top = $("#back_top");
        if (st > 400) {
            $top.css({ display: 'block' });
        } else {
            if ($top.is(":visible")) {
                $top.hide();
            }
        }
    });


  	//重置rem,1rem=100px
  	func.changeSize();
  	func.dot();
 	func.isanchorpoint();
    func.SwicthNavgation();
    func.laboract();//经典案例页面循环配置轮播
    var $ww = $(window).width();
    if ($ww < 1080 ) {
        $("#Fixheader").addClass("wapfixed");
    } else {
        $("#Fixheader").removeClass("wapfixed");
    };
    $(window).resize(function() {
        var $ww = $(window).width();
        if ($ww < 1080 ) {
            $("#Fixheader").addClass("wapfixed");
        } else {
            $("#Fixheader").removeClass("wapfixed");
        }
    });

});

/**
 *desc:构造函数 
 *@param void;
 *@return void;
 */
function Func(){};

 /**
 *desc:窗口大小改变执行
 *@param void;
 *@return void;
 */
 Func.prototype.changeSize=function(){
   //重置rem,1rem=100px
   func.mobileAnswer();
   $(window).resize(function(){
	  func.mobileAnswer();
   });
 };
 /**
 *desc:切换导航
 *@param void;
 *@return void;
 */
Func.prototype.SwicthNavgation=function(){
  var scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
  if(scrollTop!=0) {
    $("#comFixheader").addClass("fixed");
    $("#Fixheader").addClass("fixed");
  }
  //根据视窗改变导航显示状态
   $(window).scroll(function () { 
    var mouseMoveHeight = $(window).scrollTop(); 
    if (mouseMoveHeight>0)
    {
      $("#comFixheader").addClass("fixed");
       $("#Fixheader").addClass("fixed");
    }else{
      $("#comFixheader").removeClass("fixed");
       $("#Fixheader").addClass("fixed");
    }
  });
};


 /**
 *desc:tab
 *@param void;
 *@return void;
 */
Func.prototype.tab=function(dom,num){
   $(dom).parent().find(".tabbtn").removeClass("active");
   $(dom).addClass("active");
   $(dom).parent().parent().parent().find(".parBd-tabdcontent").hide();
   $(dom).parent().parent().parent().find(".parBd-tabdcontent").eq(num).show();
 };
 /**
 *desc:tab加入法泰
 *@param void;
 *@return void;
 */
Func.prototype.tabs=function(dom,num){
   $(dom).parent().find(".tabbtn").removeClass("active");
   $(dom).addClass("active");
   $(dom).parent().parent().parent().find(".rightcontnts").hide();
   $(dom).parent().parent().parent().find(".rightcontnts").eq(num).show();
 };

/**
 *desc:循环配置经典案例轮播
 *@param void;
 *@return void;
 */
Func.prototype.laboract=function(){
    var num=0;
    $(".laboract").each(function(){
        num=num+1;
        var swiper = new Swiper("#laboract00"+num, {
            zoom: true,
            autoplay: true,
            observer:true,
            observeParents:true,
            pagination: {
              el: '.swiper-pagination',
              type:'fraction'
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
        
    });
 };

 /**
 *desc:重置rem,1rem=100px
 *@param void;
 *@return void;
 */
 Func.prototype.mobileAnswer=function(){
	 var deviceWidth = document.documentElement.clientWidth;
	 if(deviceWidth > 750){
		 deviceWidth = 750;
	 }
	 $("html").css("font-size",deviceWidth / 7.5 + 'px');
 };

/**
*desc:招聘下拉
*@param void;
*@return void;
*/
Func.prototype.showRecruit = function (obj) {
    $(obj).toggleClass("open");
    $(obj).siblings(".one_recruit_data").slideToggle(120);
    $(obj).parent().siblings().children(".one_recruit_data").slideUp(120);
    $(obj).parent().siblings().children(".one_recruit_title").removeClass("open");
};

/**
*desc:手机端导航
*@param void;
*@return void;
*/
Func.prototype.navToggle = function () {
    //移动端展开nav
    $('.m_nav').addClass('open');
    //关闭nav
    $('.m_nav .top .closed').on('click', function () {
        $('.m_nav').removeClass('open');
    })
};

/**
*desc:多行超过隐藏
*@param void;
*@return void;
*/
Func.prototype.dot = function () {
	if (typeof(jQuery.fn.dotdotdot) != "function") {
		return;
	};
	$(".dot").dotdotdot({
		wrap: 'letter',
		after: 'a'
	});
};

/**
*desc:锚点更丝滑
*@param void;
*@return void;
*/
Func.prototype.isanchorpoint = function() {
  $('a[href*=#]').click(function() {
	if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	  var $target = $(this.hash);
	  $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	  if($target.length) {
		var targetOffset = $target.offset().top;
		$('html,body').animate({
			scrollTop: targetOffset
		  },
		  500);
		return false;
	  }
	}
  });
};
 /**
 *desc:关于我们合作客户
 *@param void;
 *@return void;
 */
Func.prototype.aboutClientList=function(items){
   var mySwiper = new Swiper ('.coop-swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: items,
        autoplay:3000,
        slidesPerColumn: 3,
        spaceBetween:20,
        paginationClickable: true,
    });
 };

/*
 *desc:浏览器版本
 *@param void;
 *@return ie 6 7 8 9 ;
 */
Func.prototype.browser = function () {
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");

    if (version[1] == undefined || version[1] == "undefined") {
        return true;
    }

    var trim_Version = version[1].replace(/[ ]/g, "");

    if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
        return false;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
        return false;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
        return false;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
        return false;
    } else {
        return true;
    }
};







/**
 *desc:构造函数实例化
 */
var func = new Func();