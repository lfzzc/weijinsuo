/**
 * Created by Administrator on 2016/10/27.
 */
'use strict';

$(function(){
    function resize(){
        var windowWidth=$(window).width();
        var isSmallScreen=windowWidth<768;
        var items=$('#main_das').children('.carousel-inner').find('.item');
        items.each(function(i,item){
            var $item=$(item);
            var imgSrc=$item.data(isSmallScreen?'image-xs':'image-lg');
            if(isSmallScreen){
                $item.removeAttr('style').html('<img src="'+imgSrc+'">');
            }else{
                $item.css('backgroundImage','url("'+imgSrc+'")').empty();
            }
        });
    }
    $(window).on('resize',resize).trigger('resize');
    //��ʼ��tooltip���
    $("[data-toggle='tooltip']").tooltip();

    //���Ʊ�ǩҳ�Ŀ��
    var $ulContainer=$('#products').find('.nav-tabs');
    var width=30;
    $ulContainer.children().each(function(i,val){
        width+=$(val).width();
    });
    if(width>$(window).width()){
        $ulContainer.width(width);
        $('#products').find('.ul-wrapper').css('overflow-x','scroll')
    }

    var $tabs=$('#news').find('.nav-pills').find('a');
    var $newsTitle=$('#news').find('.news-title');
    $tabs.on('click',function(){
        console.log(this);
        $newsTitle.text($(this).data('title'));
    });
//�ֲ�ͼ:���󻮽�����һ��,���һ�������һ��
    var carousel=$('.carousel');
    var offset=50;
    carousel.on('mousedown', function (ev) {
        scroll(ev);
    });
    function scroll(ev) {
        var originX = ev.clientX;
        carousel.on('mouseup', function (e) {
            var mouseX = e.clientX;
            var distance=Math.abs(mouseX-originX);
            if(distance>offset){
                $(this).carousel(mouseX>originX?'prev':'next');
            }
        });
    }
});