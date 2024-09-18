$(function (){
    $(".header .top .menu").find(".icon-caidan").click(function (){
        console.log(11)
        $(".header").addClass("active")
        $(this).hide()
        $(".header .top .menu").find(".icon-guanbi1").show()
        $(".header .list").show()
    })
    $(".header .top .menu").find(".icon-guanbi1").click(function (){
        $(".header").removeClass("active")
        $(this).hide()
        $(".header .top .menu").find(".icon-caidan").show()
        $(".header .list").hide()
    })

})