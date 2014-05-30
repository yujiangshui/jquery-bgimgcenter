/**
 * BGimgcenter v1.1
 * 让背景图片 无拉伸、无变形、无缝隙、很居中
 * 作者：http://yujiangshui.com
 * 项目地址：https://github.com/yujiangshui/jquery-bgimgcenter
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

            var _this = this,
                bgimgRate = options.width / options.height;

            var calPosition = function calPosition(_this){

                var windowWidth = (options.target == 'window') ? $(window).width() : $(_this).parent().width(),
                    windowHeight = (options.target == 'window') ? $(window).height() : $(_this).parent().height(),
                    windowRate = windowWidth / windowHeight,
                    marginLeft = ( windowHeight * bgimgRate - windowWidth ) / 2,
                    marginTop = ( windowWidth / bgimgRate - windowHeight ) / 2;

                if ( windowRate < bgimgRate ) {
                    $(_this).css({
                        'height': windowHeight + 'px',
                        'width':( windowHeight * bgimgRate )+'px',
                        'margin-top':0,
                        'margin-left':'-' + marginLeft + 'px'
                    });
                }else{
                    $(_this).css({
                        'height':( windowWidth / bgimgRate ) + 'px',
                        'width': windowWidth + 'px',
                        'margin-left':0,
                        'margin-top':'-'+ marginTop + 'px'
                    });
                }

            }

            calPosition(_this);
            $(window).resize(function(event) {
                calPosition(_this);
            });

        }
    });

})(jQuery);
