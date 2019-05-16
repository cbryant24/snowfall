$(document).ready(function () {

  var highlightOne = document.getElementById('highlight-1');
  var highlightTwo = document.getElementById('highlight-2');

  window.onscroll = function () {
    if (checkVisible(highlightOne)) {
      console.log('im on the screeen')
    }

    if (checkVisible(highlightTwo)) {
      console.log('no im on the screen')
    }
  };

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  
  $('.article-highlight__images-box').on('click', function () {
    var $this = $(this),
      $highlightOne = $('.article-highlight__description.one'),
      $highlightTwo = $('.article-highlight__description.two'),
      $highlightThree = $('.article-highlight__description.three'),
      $highlightOneVisible = $('.article-highlight__description.one:visible').length,
      $highlightTwoVisible = $('.article-highlight__description.two:visible').length,
      $highlightThreeVisible = $('.article-highlight__description.three:visible').length


    if ($this.hasClass('one') && $highlightOneVisible) return $highlightOne.hide().css({
      height: '0%',
      opacity: 0
    });

    if ($this.hasClass('two') && $highlightTwoVisible) return $highlightTwo.hide().css({
      height: '0%',
      opacity: 0
    });

    if ($this.hasClass('three') && $highlightThreeVisible) return $highlightThree.hide().css({
      height: '0%',
      opacity: 0
    });

    if ($this.hasClass('one')) {
      if ($highlightTwoVisible) $highlightTwo.hide().css({
        height: '0%',
        opacity: 0
      });

      if ($highlightThreeVisible) $highlightThree.hide().css({
        height: '0%',
        opacity: 0
      });

      if (!$highlightOneVisible) $highlightOne.show().css({
        height: '100%',
        opacity: 1
      });
    }

    if ($this.hasClass('two')) {
      if ($highlightOneVisible) $highlightOne.hide().css({
        height: '0%',
        opacity: 0
      });

      if ($highlightThreeVisible) $highlightThree.hide().css({
        height: '0%',
        opacity: 0
      });

      if (!$highlightTwoVisible) $highlightTwo.show().css({
        height: '100%',
        opacity: 1
      });
    }

    if ($this.hasClass('three')) {
      if ($highlightOneVisible) $highlightOne.hide().css({
        height: '0%',
        opacity: 0
      });

      if ($highlightTwoVisible) $highlightTwo.hide().css({
        height: '0%',
        opacity: 0
      });

      if (!$highlightThreeVisible) $highlightThree.show().css({
        height: '100%',
        opacity: 1
      });
    }
  })
})