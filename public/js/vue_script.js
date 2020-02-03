window.onload = function () {

    const vm = new Vue({
	el: '#myID',
	data: {
	    arbitraryVariableName: 'Välj en burgare'
	    FireBurger: FireBurger.info(),
	    TurkeyBurger: TurkeyBurger.info(),
	    DoubleCheese: DoubleCheese.info(),
	    TrippleCheese: TrippleCheese.info(),
	    QuadraCheese: QuadraCheese.info()
	}
    });
}
