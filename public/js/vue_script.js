
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

    const vm = new Vue({
	el: '#burger1',
	data: {
	    burger1Header: "Fire Burger",
	    image1: "https://image.shutterstock.com/image-photo/closeup-home-made-tasty-burger-600w-1291051606.jpg",
	    burger1List: [
		{burger1info: '750 kCal'},
		{burger1info: 'Contains lactose'},
		{burger1info: 'Contains gluten'}
	    ]
	}
    });
    const vm2 = new Vue({
	el: '#burger2',
	data: {
	    burger2Header: "Turkey Burger",
	    image2: "https://assets.epicurious.com/photos/5748b2ed5a5fbbae31ae4af9/6:4/w_620%2Ch_413/shutterstock_148839410.jpg",
	    burger2List: [
		{burger2info: 'Deep fired Turkish turkey'},
		{burger2info: 'A slice of pink stuff'},
		{burger2info: 'Shake n-bake gluten-free bread'}
	    ]
	}
    });
    const vm3 = new Vue({
	el: '#burger3',
	data: {
	    burger3Header: "A Double w/ Cheese",
	    image3: "https://images.eatthismuch.com/site_media/img/331330_dylpill21_acbc0262-ff8f-4a8e-b6d0-25486109a502.png",
	    burger3List: [
		{burger3info: 'Two layers of pure meat'},
		{burger3info: 'Lots of yummy cheese'},
		{burger3info: 'Sweet bread bun'}
	    ]
	}
    });
}
