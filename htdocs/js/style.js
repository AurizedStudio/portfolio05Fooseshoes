 $(function(){

gnavToggle();
productMenu();
heightline();

/**
 * グローバルメニュートグル表示
 */
function gnavToggle(){
    var topBarGnav = $('.topbar-gnav');
    var nextBar = $('.nextbar');

$(window).on('resize', function() {
        if(window.matchMedia('(max-width:767px)').matches) {
            nextBar.css({"display": "none"});
        } else {}
    });

    topBarGnav.on('click', function(){
        nextBar.slideToggle();
    });

$(window).on('resize', function() {
        if(window.matchMedia('(min-width:768px)').matches) {
            nextBar.css({"display": "block"});
        } else {}
    });

}

/**
 * プロダクト ホバーでメニューを表示する
 */
function productMenu(){
    var pi = $('.product-item');
    pi.each(function(){
        $(this).on({
            'mouseenter': function(){
                $(this).find('.product-item-desc-nav').css({'display': 'block'});
            },
            'mouseleave': function(){
                $(this).find('.product-item-desc-nav').css({'display': 'none'});
            }
        });
    });
}

/**
 * jquery.heightLine.js 要素の高さを揃える
 */
function heightline(){
    $(".addon-item").heightLine();
}

 });