
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

    const vm0 = new Vue({
	el: '#burger1',
	data: {
	    burger1Header: food[0].name,
	    image1: food[0].img,
	    burger1List: [
		{burger1info: food[0].kCal},
		{burger1info: food[0].info1},
		{burger1info: food[0].info2}
	    ]
	    
	}
    });
    const vm2 = new Vue({
	el: '#burger2',
	data: {
	    burger2Header: "Turkey Burger",
	    image2: "https://assets.epicurious.com/photos/5748b2ed5a5fbbae31ae4af9/6:4/w_620%2Ch_413/shutterstock_148839410.jpg",
	    burger2List: [
		{burger2info: food[1].kCal},
		{burger2info: food[1].info1},
		{burger2info: food[1].info2}
	    ]
	}
    });
    const vm3 = new Vue({
	el: '#burger3',
	data: {
	    burger3Header: "A Double w/ Cheese",
	    image3: "https://images.eatthismuch.com/site_media/img/331330_dylpill21_acbc0262-ff8f-4a8e-b6d0-25486109a502.png",
	    burger3List: [
		{burger3info: food[2].kCal},
		{burger3info: food[2].info1},
		{burger3info: food[2].info2}
	    ]
	}
    });

    const vm35 = new Vue({
	el:'.info',
	data: {
	    Gender:'',
	    fullName:'',
	    mail:'',
	    Payment:'',
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
	    Burger1IsChecked:'',
	    Burger2IsChecked:'',
	    Burger3IsChecked:''
	},
	
	methods: {
	    markdown: function() {
		vm4.fullName = document.getElementById("fullname").value;
		vm4.mail = document.getElementById("email").value;
		//vm4.streetName = document.getElementById("street").value;
		//vm4.houseNumber = document.getElementById("house").value;
		vm4.Payment = document.getElementById("payment").value;
		vm4.showGender = vm35.Gender;

		if(document.getElementById("fireburger").checked)
		{
		    vm4.Burger1IsChecked = "Fire Burger";
		}
		else
		{
		    vm4.Burger1IsChecked = "";
		}

		if(document.getElementById("turkeyburger").checked)
		{
		    vm4.Burger2IsChecked = "Turkey Burger";
		}
		else
		{
		    vm4.Burger2IsChecked = "";
		}

		if(document.getElementById("doublecheese").checked)
		{
		    vm4.Burger3IsChecked = "Double Cheese";
		}
		else
		{
		    vm4.Burger3IsChecked = "";
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
		    orderItems: [vm4.Burger1IsChecked + ' ' + vm4.Burger2IsChecked + ' ' + vm4.Burger3IsChecked],
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

