/**
 * BGimgcenter v1.0 
 * 让背景图片 无拉伸、无变形、无缝隙、很居中
 * 作者：http://yujiangshui.com
 * 项目地址：https://github.com/yujiangshui/jquery.bgimgcenter.js
 *
 * Copyright 2014, Jiangshui Yu
 * MIT license
 */
 ;(function($){

    $.fn.extend({
        'bgimgcenter':function(options){

            if( !options.width || ! options.height ){
               return false;
            }

            var bgimgRate = options.width / options.height,
                windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                windowRate = windowWidth / windowHeight,
                marginLeft = ( windowHeight * bgimgRate - windowWidth ) / 2,
                marginTop = ( windowWidth / bgimgRate - windowHeight ) / 2;

            if ( windowRate < bgimgRate ) {
                $(this).css({
                    'height':windowHeight + 'px',
                    'width':( windowHeight * bgimgRate )+'px',
                    'margin-top':0,
                    'margin-left':'-' + marginLeft + 'px'
                });
            }else{
                $(this).css({
                    'height':( $(window).width() / bgimgRate ) + 'px',
                    'width':$(window).width() + 'px',
                    'margin-left':0,
                    'margin-top':'-'+ marginTop + 'px'
                });
            }

        }
    });

})(jQuery);