
/*
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


  For the Vue loop to work i used following lines in HTML:
  <li v-for="burger in menu">
  {{burger.name}} 
  <span v-if="burger.allergy.localeCompare('none') != 0"> {{burger.allergy}} </span>
  </li>
*/


window.onload = function () {
    const dynamicvm = new Vue ({
	el:'#dynamicBurger',
	data: {
	    menu: food,
	},
    });

    const vm35 = new Vue({
	el:'.info',
	data: {
	    Gender:'',
	}
    });
    
    const vm4 = new Vue({
	el: '#button',
	data: {
	    showOrder: false,
	    fullName: '',
	    mail:'',
	    Payment:'',
	    showGender:'',
	    checkedBurgers:'',
	},
	
	methods: {
	    markdone: function() {
		vm4.fullName = document.getElementById("fullname").value;
		vm4.mail = document.getElementById("email").value;
		vm4.Payment = document.getElementById("payment").value;
		vm4.showGender = vm35.Gender;

		for(items in food) {
		    if(document.getElementById(food[items].id).checked) {
			vm4.checkedBurgers += food[items].name + ' ';
		    }
		}	
	    },
	    addOrder: function() {
		/* When you click in the map, a click event object is sent as parameter
		 * to the function designated in v-on:click (i.e. this one).
		 * The click event object contains among other things different
		 * coordinates that we need when calculating where in the map the click
		 * actually happened. */
		
		socket.emit('addOrder', {
		    orderId: vm.getNext(),
		    details: {
			x: vm.localOrder.x,
			y: vm.localOrder.y,
		    },
		    orderItems: [vm4.checkedBurgers],
		    orderInfo: [vm4.fullName + ' (' + vm4.mail + ', ' + vm4.Payment + ', ' + vm4.showGender + ')'],
		});
	    },
	    
	}
    });

    /* jslint es6:true, indent: 2 */
    /* global Vue, io */
    /* exported vm */
    'use strict';
    const socket = io();

    /* eslint-disable-next-line no-unused-vars */
    const vm = new Vue({
	el: '#dots',
	data: {
	    orders: {},
	    localOrder: {x:0,y:0},
	    counter: 0,
	},
	methods: {
	    getNext: function() {
		this.counter += 1;
		return this.counter;
	    },
	    displayOrder: function(event) {
		let offset = {
		    x: event.currentTarget.getBoundingClientRect().left,
		    y: event.currentTarget.getBoundingClientRect().top,
		};
		this.localOrder = {x: event.clientX - 10 - offset.x,
				   y: event.clientY - 10 - offset.y,}
	    },
	},
    });
} 

