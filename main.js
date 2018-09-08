var allButtons = $('#menu div');

console.log(allButtons);
// 为每个按钮添加事件监听
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(x) {
    var index = $(this).parent().prevAll('.menuItem').length;
    var p = index * -920
    $('#slides').css({
      transform: 'translate(' + p + 'px)'
    })
    $(x.currentTarget)
      .addClass('act')
      .siblings('.act').removeClass('act')

    $('li.menuItem div').removeClass('act');
    $(this).addClass('act');
  })
}