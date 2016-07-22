
(function(){

	window.onload = function ()
	{
		var num = Math.floor((Math.random() * 3) + 1);
		Gen(num);
	}

	function Gen (_num) {
	
		console.log(_num);
	
		var pokemon = {
			combatPower: Math.floor((Math.random() * 500) + 10),
			healthPoints: Math.floor((Math.random() * 80) + 10),
			candy: Math.floor((Math.random() * 10) + 1),
			evolve: Math.floor((Math.random() * 40) + 10),
			candyNeed: function(){
				return this.evolve - this.candy;
			}
		}
		
		
		// console.log(pokemon.candy);
		// console.log(pokemon.evolve);
		// console.log(pokemon.candyNeed().toString());
	
	
		switch (_num)
		{
			case 1:
				//venonat spawn
	
				pokemon.name = 'Venonat';
				pokemon.type = 'Bug/Poison';
				
				//name and type gen
				var name = document.querySelector('#name');
				var type = document.querySelector('#type');
				
				name.innerHTML = pokemon.name;
	
				type.innerHTML = pokemon.type;

				//image gen
				var newImg = document.createElement("img");
				newImg.setAttribute("src", "images/venonat.png");
				document.getElementById('target').appendChild(newImg);
				
				//content gen
				var content = document.querySelector('#content');
	
				content.innerHTML = 
				  "Name: " + pokemon.name + "<br/>"
				+ "Type: " + pokemon.type + "<br/>"
				+ "Combat Power: " + pokemon.combatPower + "<br/>" 
				+ "Health Points: " + pokemon.healthPoints + "<br/>"
				+ "Candy Owned: " + pokemon.candy + "<br/>"
				+ "Candy Needed to Evolve: " + pokemon.candyNeed();
				
				break;
				
			case 2:
				pokemon.name = 'Squirtle';
				pokemon.type = 'Water';
				
				//name and type gen
				var name = document.querySelector('#name');
				var type = document.querySelector('#type');
				
				name.innerHTML = pokemon.name;
	
				type.innerHTML = pokemon.type;
				
				//image gen
				var newImg = document.createElement("img");
				newImg.setAttribute("src", "images/squirt.png");
				document.getElementById('target').appendChild(newImg);
				
				//content gen
				var content = document.querySelector('#content');
				
				content.innerHTML = 
				  "Name: " + pokemon.name + "<br/>"
				+ "Type: " + pokemon.type + "<br/>"
				+ "Combat Power: " + pokemon.combatPower + "<br/>" 
				+ "Health Points: " + pokemon.healthPoints + "<br/>"
				+ "Candy Owned: " + pokemon.candy + "<br/>"
				+ "Candy Needed to Evolve: " + pokemon.candyNeed();
				
				break;
				
			case 3:
				pokemon.name = 'Voltorb';
				pokemon.type = 'Electric';
				
				//name and type gen
				var name = document.querySelector('#name');
				var type = document.querySelector('#type');
				
				name.innerHTML = pokemon.name;
	
				type.innerHTML = pokemon.type;
				
				//image gen
				var newImg = document.createElement("img");
				newImg.setAttribute("src", "images/orb.png");
				document.getElementById('target').appendChild(newImg);
				
				//content gen
				var content = document.querySelector('#content');
				
				content.innerHTML = 
				  "Name: " + pokemon.name + "<br/>"
				+ "Type: " + pokemon.type + "<br/>"
				+ "Combat Power: " + pokemon.combatPower + "<br/>" 
				+ "Health Points: " + pokemon.healthPoints + "<br/>"
				+ "Candy Owned: " + pokemon.candy + "<br/>"
				+ "Candy Needed to Evolve: " + pokemon.candyNeed();
				
				break;
			default:
				document.write("this is working");
				
		}
	
	}

}());