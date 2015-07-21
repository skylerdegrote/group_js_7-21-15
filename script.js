function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
var cash = 100;

var apples = {name:"apples", price:randomNumber(.5, 9.5)};
var oranges = {name:"oranges", price:randomNumber(.5, 9.5)};
var banana = {name:"banana", price:randomNumber(.5, 9.5)};
var grapes = {name:"grapes", price:randomNumber(.5, 9.5)};
var pears = {name:"pears", price:randomNumber(.5, 9.5)};

var market = [apples, oranges, banana, grapes, pears];


$(document).ready(function(){

// $("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
// 			+first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
// 			"</p><p>"+salary+" </p><button id='removeButton'>Fire this Person</button></div>");
// 	}
console.log(apples);

	
	 setInterval(function(){
	 	// function variatePrice (array) {
	 	// 	var upDown = randomNumber(1, 2);
	 	// 	for (var i = 0; i < market.length; i++) {
	 	// 		if (market[i].price == 9.5) {
	 	// 			market[i].price -= .5;
	 	// 		} else if (market[i].price == .5) {
	 	// 			market[i].price += .5;
	 	// 		} else{
	 	// 			if (upDown == 1){
	 	// 				market[i].price += .5;
	 	// 			} else {	
	 	// 				market[i.price] -= .5;
	 	// 			}
	 	// 		}
	 	// 	}
	 	for(var i=0;i<market.length; i++){
	 		if(randomNumber(1,2) == 1&&market[i].price>=.5){
	 			market[i].price -=.5;
	 		}else if(randomNumber(1,2) == 2&&market[i].price<=9.5){
	 			market[i].price +=.5;
	 		}else{}
	 	}

	$("p").append("<div class='apples'> "+apples.name+" "+ apples.price+" "
		+oranges.name+ " "+oranges.price+" "+banana.name+" "+ banana.price+" "
		+" "+grapes.name+" "+ grapes.price+" "+" "+pears.name+" "+ pears.price+" "+"</div>")
		
	}, 500);



});



