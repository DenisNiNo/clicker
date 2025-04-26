//создаем переменную для денег
money = 0 
progress = 0
price_click = 1
level = 1
autoclick = 0

function autoClicker(){
	money += autoclick
	 $('.money_num').text(money)
}
setInterval(autoClicker,1000);

function auto(){
	if(money>=10){
		autoclick += 1
		money -= 10
	    $('.money_num').text(money)
	}else{
		    alert("Денег не достаточно")
	}
}
levels={
	1:{"click":10, "img":"img/001.png"},
	2:{"click":20, "img":"img/002.png"},
	3:{"click":30, "img":"img/003.png"},
	4:{"click":40, "img":"img/004.png"},
	5:{"click":50, "img":"img/005.png"},
	6:{"click":60, "img":"img/006.png"},
	7:{"click":70, "img":"img/007.png"},
	8:{"click":80, "img":"img/008.png"},
	9:{"click":90, "img":"img/009.png"},
	10:{"click":100, "img":"img/010.png"},
	11:{"click":110, "img":"img/011.png"},
	12:{"click":120, "img":"img/012.png"},
	13:{"click":130, "img":"img/013.png"},
	14:{"click":140, "img":"img/014.png"},
	15:{"click":150, "img":"img/015.png"},
	16:{"click":160, "img":"img/016.png"},
	17:{"click":170, "img":"img/017.png"},
	18:{"click":180, "img":"img/018.png"},
	19:{"click":190, "img":"img/019.png"},
	20:{"click":200, "img":"img/020.png"},
	21:{"click":210, "img":"img/021.png"},
	22:{"click":220, "img":"img/022.png"},
}
$('.personage').on('click',function(){
  money  += price_click
progress += 1  
  $('.money_num').text(money)
  if(progress == levels[level]["click"]){
	  level += 1
	  progress = 0
	  $('.level_name').text("Уровень "+level)
	  $('.personage').attr("src", levels[level]["img"])
  }
  $('.level_progress').css({"width":progress/levels[level]["click"]*100+"%"})
})

function money_plus_1(){
	if(money>=100){
		
	
	price_click += 1
	money -= 100
	$('.money_num').text(money)
	}else{
	alert("Денег не достаточно")
	}

}
function money_x_2(){
	if(money>=200){
		
	
	price_click *= 2
	money -= 200
	$('.money_num').text(money)
	}else{
	alert("Денег не достаточно")
	}

}
function money_x_3(){
	if(money>=300){
		
	
	price_click *= 3
	money -= 300
	$('.money_num').text(money)
	}else{
	alert("Денег не достаточно")
	}

}