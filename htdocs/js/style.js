 $(function(){

heightline();
productMenu();

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