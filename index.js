$(document).ready(function () {

  // var highlightOne = document.getElementById('highlight-1');
  // var highlightTwo = document.getElementById('highlight-2');

  // window.onscroll = function () {
  //   if (checkVisible(highlightOne)) {
      
  //   }
  // };

  // function checkVisible(elm) {
  //   var rect = elm.getBoundingClientRect();
  //   var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  //   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  // }
  
  $('.article-highlight__images-box').on('click', function () {
    var $this = $(this),
      $highlightOne           = $('.article-highlight__description.one'),
      $highlightTwo           = $('.article-highlight__description.two'),
      $highlightThree         = $('.article-highlight__description.three'),
      $highlightOneVisible    = $('.article-highlight__description.one:visible').length,
      $highlightTwoVisible    = $('.article-highlight__description.two:visible').length,
      $highlightThreeVisible  = $('.article-highlight__description.three:visible').length
      $highlightImageOne      = $('.article-highlight__images-box.one img'),
      $highlightImageTwo      = $('.article-highlight__images-box.two img'),
      $highlightImageThree    = $('.article-highlight__images-box.three img');

    if ($this.hasClass('one') && $highlightOneVisible) {
      $highlightOne.hide().css({ height: '0%', opacity: 0 });
      $highlightImageOne.css('filter', 'grayscale(100%)');
      return
    };

    if ($this.hasClass('two') && $highlightTwoVisible) {
      $highlightTwo.hide().css({ height: '0%', opacity: 0 });
      $highlightImageTwo.css('filter', 'grayscale(100%)');
      return
    };

    if ($this.hasClass('three') && $highlightThreeVisible) {
      $highlightThree.hide().css({ height: '0%', opacity: 0 });
      $highlightImageThree.css('filter', 'grayscale(100%)');
      return
    };

    if ($this.hasClass('one')) {
      if ($highlightTwoVisible) {
        $highlightTwo.hide().css({ height: '0%', opacity: 0 });
        $highlightImageTwo.css('filter', 'grayscale(100%)');
      }

      if ($highlightThreeVisible) {
        $highlightThree.hide().css({ height: '0%', opacity: 0 });
        $highlightImageThree.css('filter', 'grayscale(100%)');
      }

      if (!$highlightOneVisible) {
        $highlightOne.show().css({ height: '100%',opacity: 1 });
        $highlightImageOne.css('filter', 'grayscale(0%)');
      }
    }

    if ($this.hasClass('two')) {
      if ($highlightOneVisible) {
        $highlightOne.hide().css({ height: '0%', opacity: 0 });
        $highlightImageOne.css('filter', 'grayscale(100%)');
      }

      if ($highlightThreeVisible) {
        $highlightThree.hide().css({ height: '0%', opacity: 0 });
        $highlightImageThree.css('filter', 'grayscale(100%)');
      }

      if (!$highlightTwoVisible) {
        $highlightTwo.show().css({ height: '100%',opacity: 1 });
        $highlightImageTwo.css('filter', 'grayscale(0%)');
      }
    }

    if ($this.hasClass('three')) {
      if ($highlightTwoVisible) {
        $highlightTwo.hide().css({ height: '0%', opacity: 0 });
        $highlightImageTwo.css('filter', 'grayscale(100%)');
      }

      if ($highlightOneVisible) {
        $highlightOne.hide().css({ height: '0%', opacity: 0 });
        $highlightImageOne.css('filter', 'grayscale(100%)');
      }

      if (!$highlightThreeVisible) {
        $highlightThree.show().css({ height: '100%',opacity: 1 });
        $highlightImageThree.css('filter', 'grayscale(0%)');
      }
    }
  })
})