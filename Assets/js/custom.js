$("ul").on("click","li",function(){
    $(this).toggleClass("tamamlanmis")
})

$("ul").on("click","span",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
})

$("input[type='text']").keypress(function(event){
    if(event.which == 13){
        var yeniItem=$(this).val();
        $("ul").append("<li><span><i class='fa fa-window-close'></i></span> "+yeniItem+"</li>");
    }
})

$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
})