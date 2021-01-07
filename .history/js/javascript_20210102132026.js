$("ul").on("click", "li", function() {
    //목록 클릭씨 해당줄에 라인을 치거나 지움
    $(this).toggleClass('completed');
});

//x를 클릭씨 해당 아이템을 지움
$('ul').on("click", "span", function(event) {
event.stopPropagation();
$(this).parent().fadeOut(500, function(){
$(this).remove();
});
});

$('input[type="text"]').keypress(function(event) {
if(event.which===13) {
    //event.which : enter
    var todoText =$(this).val();
    $(this).val("");
    //새로운 일을 li로 ul에 넣기
    $('ul').append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>");
}
});

$('.fa-plus').on('click', function() {
$('input[type="text"]').fadeToggle();
});