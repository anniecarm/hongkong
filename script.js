$(document).ready(function () {
  $(".hk").mouseover(function () {
    $(".hk").attr("style", "");
    $(".ch").attr("style", "");
    $(".bd").attr("style", "");
    $("h1").attr("style", "");
    $("#demand_1").attr("style", "");
	$("#demand_2").attr("style", "");
	$("#demand_3").attr("style", "");
	$("#demand_4").attr("style", "");
	$("#demand_5").attr("style", "");
    $("p").attr("style", "");
    $(".date").attr("style","");

  });
});

$(document).ready(function(){
	$(".ch").mouseover(function(){
		$(".ch").css("background-color","#183380");
		$(".ch").css("color","white");
		$(".hk").css("background-color","black");
		$(".hk").css("color","#ffe111");
		$(".bd").css("background-color","white");
		$("h1").css("color","#183380");
		$("#demand_1").css("background-image","url(img/1_b.png)");
		$("#demand_2").css("background-image","url(img/2_b.png)");
		$("#demand_3").css("background-image","url(img/3_b.png)");
		$("#demand_4").css("background-image","url(img/4_b.png)");
		$("#demand_5").css("background-image","url(img/5_b.png)");
		$("p").css("color","#183380");
		$(".date").css("color","#183380");
	});
});
