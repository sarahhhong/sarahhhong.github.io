function fact1(){
	document.querySelector('section').innerHTML = "Did you know that Elephants can't jump? " 
		+ "This is because the bones in their legs are all pointed downwards!<br><br><img src='images/elephant.jpg' alt='Pizza'>";
		
}

function fact2(){
	document.querySelector('section').innerHTML = "Did you know that the Hawaiian pizza was created in Canada? " 
		+ "It was created by a Greek immigrant, Sam Panopoulos, in 1962!<br><br><img src='images/pizza.jpg' alt='Pizza'>";
}

function fact3(){
	document.querySelector('section').innerHTML = "Did you know that our circulatory system is 60 miles long?" 
		+ " That's as long as the diameter of Thebe, one of Jupiter's moons!<br><br><img src='images/circulatorysystem.gif' alt='CirculatorySystem'>";
}

function fact4(){
	document.querySelector('section').innerHTML = "Did you know that the Hollywood sign once said Hollywoodland? " 
		+ "The sign changed to read 'Hollywood' in 1949!<br><br><img src='images/hollywood.jpg' alt='The Hollywood Sign'>";
}

function fact5(){
	document.querySelector('section').innerHTML = "Did you ever notice how lemons float but limes sink in your drink?" 
		+ " This is because limes are denser than lemons!<br><br><img src='images/lime.jpg' alt='Lime Soda'>";
}

function theme1(){
	var menuButtons = document.getElementById('menu').getElementsByTagName('input');
	for(var i = 0; i < 5; i++){
		menuButtons[i].style.backgroundColor = "#FFC7AD";
		menuButtons[i].style.color = "#214E34";
	}
	var themeButtons = document.getElementById('themes').getElementsByTagName('input');
	for(var i = 0; i < 3; i++){
		themeButtons[i].style.backgroundColor = "#90D08A";
		themeButtons[i].style.color = "#214E34";
	}
	document.querySelector('section').style.backgroundColor = "#fff6e3";
	document.querySelector('body').style.backgroundColor = "#FFFECC";
	
}

function theme2(){
	var menuButtons = document.getElementById('menu').getElementsByTagName('input');
	for(var i = 0; i < 5; i++){
		menuButtons[i].style.backgroundColor = "#B1EDE8";
		menuButtons[i].style.color = "#364981";
	}
	var themeButtons = document.getElementById('themes').getElementsByTagName('input');
	for(var i = 0; i < 3; i++){
		themeButtons[i].style.backgroundColor = "#FFA69E";
		themeButtons[i].style.color = "#364981";
	}
	document.querySelector('section').style.backgroundColor = "#fff6e3";
	document.querySelector('body').style.backgroundColor = "#FBE89D";
	
	
}

function theme3(){
	var menuButtons = document.getElementById('menu').getElementsByTagName('input');
	for(var i = 0; i < 5; i++){
		menuButtons[i].style.backgroundColor = "#AD2E24";
		menuButtons[i].style.color = "#E7AA5F";
	}
	var themeButtons = document.getElementById('themes').getElementsByTagName('input');
	for(var i = 0; i < 3; i++){
		themeButtons[i].style.backgroundColor = "#DD9069";
		themeButtons[i].style.color = "#685044";
	}
	document.querySelector('section').style.backgroundColor = "#FFE4AD";
	document.querySelector('body').style.backgroundColor = "#FFD275";
	
}




