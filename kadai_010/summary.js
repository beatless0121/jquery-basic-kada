
$(function() {
// 文字色変化
$('#change-color').on("click", function () {
    
    $('#target').css('color', 'Red');
  });

// 文字内容変化
$("#change-text").on("click", function(){
    $("#target").text("Hello!");
  });

   // フェードアウトする
   $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });
});
