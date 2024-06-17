$(document).ready(function(){

  // active classes
  var $LevelParentClass = '.level';
  var $itemListParentClass = '.item-list';
  var $itemActiveParentClass = '.item-active';


  // move items
  function moveSelected($itemSelected) {

    var $levelParent = $($itemSelected).closest($LevelParentClass);
    var $itemListParent = $($itemSelected).closest($itemListParentClass);
    var $itemContainer = $($itemSelected).parent();
    var $destination = $($itemListParent).siblings($itemActiveParentClass).children().first();
    var $newContent = $($itemSelected).html();

    // update selected content section
    $($destination).html($newContent);

    // fade animation to look like refresh
    $($itemListParent).siblings($itemActiveParentClass).fadeOut(0).fadeIn(300);
    $($levelParent).nextAll().not('.hidden').fadeOut(0).fadeIn(300);

    // toggle active item
    $($itemContainer).children().removeClass('selection');
    $($itemSelected).addClass('selection');

    // show next row/level (in the real version this would actually load new items)
    $($levelParent).next().removeClass('hidden');
    $($levelParent).addClass('expanded');

  }


  // smooth scroll to current level
  function scrollParent($scrollTarget){

    var target = $scrollTarget;
    event.preventDefault();
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-15
        }, 700);
        return false;
      }

  }


  // listeners
  $(".info-header").on("click", function(){
      scrollParent($(this).closest('.level'));
      moveSelected($(this).closest('.element-item'));
  });

  $(document).on('mouseenter','.info-header', function (event) {
     $(this).closest('.element-item').addClass('hover');
     $(this).closest('.level').addClass('hover-expanded');
     $(this).closest('.level').next('.level').addClass('hover-children');
  }).on('mouseleave','.info-header',  function(){
     $(this).closest('.element-item').removeClass('hover');
     $(this).closest('.level').removeClass('hover-expanded');
     $(this).closest('.level').next('.level').removeClass('hover-children');
  });

});
