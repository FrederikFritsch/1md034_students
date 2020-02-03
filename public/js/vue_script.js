window.onload = function () {

    const vm = new Vue({
	el: '#myID',
	data: {
	    arbitraryVariableName: 'Välj en burgare'
	    FireBurger: FireBurger.info(),
	    TurkeyBurger: TurkeyBurger.info(),
	    DoubleCheese: DoubleCheese.info(),
	    TrippleCheese: TrippleCheese.info(),
	    QuadraCheese: QuadraCheese.info(),
	    menu: [{name: FireBurger.info(), allergy: 'lactose'}, {name:TurkeyBurger.info(), allergy:'none'}, {name:DoubleCheese.info(), allergy:'none'}, {name:TrippleCheese.info(), allergy:'lactose'}, {name:QuadraCheese.info(), allergy:'lactose'}]
	}
    });
}

/*
For the Vue loop to work i used following lines:
   <li v-for="burger in menu">
    {{burger.name}} 
      <span v-if="burger.allergy.localeCompare('none') != 0"> {{burger.allergy}} </span>
   </li>

*/
