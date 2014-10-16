;(function ( $, window, document, undefined ) {
  var GRP_IN_ANIM = [
    'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig',
    'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight',
    'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'
  ],
  GRP_OUT_ANIM = [
    'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
    'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight',
    'rotateOutUpLeft', 'rotateOutUpRight', 'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'hinge'
  ],
  GRP_STAY_ANIM = [ 'bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'flip' ]
  ;

$(function(){
  console.log('debug: start');

  var animatecss = function($target, animateClass, callback) {
    $target.removeClass().addClass(animateClass + ' animated')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', callback);
  };
  var pickRandom = function(array){
    return array[Math.floor(Math.random() * array.length)];
  };

  $('nav a').on('click', function(event){
    event.preventDefault();

    var $targ = $(this.href.match('#.*?$')[0]);

    if ($targ.is(':visible')) {
      //同じものを押された場合はとどまるアニメーション
      animatecss($targ, pickRandom(GRP_STAY_ANIM), function(){
        $(this).removeClass();
      });
    } else {
      //遷移
      animatecss($('section:visible'), pickRandom(GRP_OUT_ANIM), function(){
        $(this).hide().removeClass();

        animatecss($targ.show(), pickRandom(GRP_IN_ANIM), function(){
          $(this).removeClass();
        });
      });
    }

    return false;
  });

  //初期表示
  $('section').not(':first').hide();
});
})( jQuery, window, document );
