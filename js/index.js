$(document).ready(function(){
    $(function(){
        $("#typed").typed({
            strings: ["نویسه خوان الف", "برای خواندن فارسی", "انگلیسی و عربی"],
            typeSpeed: 30,
            loop: true
        });
    });

    $(".idea-block").hover(function(){
        var block = $(this);
        block.find("img").animate({"marginTop" : 10}, 500, 'easeOutCirc');
        block.find("h3").animate({"marginTop" : 30}, 500, 'easeOutCirc');
        block.find("p").toggleClass("visible");
    },
    function(){
        var block = $(this);
        block.find("img, h3").animate({"marginTop" : 70}, 500, 'easeOutCirc');
        block.find("p").toggleClass("visible");
    });

});
