function menuItem(burger, kcal, all, ing, src) {
    this.name = burger;
    this.kcal = kcal;
    this.allergies = all;
    this.ingredients = ing;
    this.image = src;    

    this.info = function() {
	return this.name + ' ' + this.kcal;
    }
}




let FireBurger = new menuItem('FireBurger', '750 kCal', 'gluten and lactose', 'meat', 'https://image.shutterstock.com/image-photo/closeup-home-made-tasty-burger-600w-1291051606.jpg');

let TurkeyBurger = new menuItem('TurkeyBurger', '850 kCal', 'lactose', 'turkey', 'https://assets.epicurious.com/photos/5748b2ed5a5fbbae31ae4af9/6:4/w_620%2Ch_413/shutterstock_148839410.jpg');

let DoubleCheese = new menuItem('DoubleCheese', '950 kCal', 'gluten and lacose', 'meat', 'https://images.eatthismuch.com/site_media/img/331330_dylpill21_acbc0262-ff8f-4a8e-b6d0-25486109a502.png');

let TrippleCheese = new menuItem('TrippleCheese', '1100 kCal', 'gluten and lacose', 'meat', 'https://images.eatthismuch.com/site_media/img/331330_dylpill21_acbc0262-ff8f-4a8e-b6d0-25486109a502.png');

let QuadraCheese = new menuItem('QuadraCheese', '1250 kCal', 'gluten and lacose', 'meat', 'https://images.eatthismuch.com/site_media/img/331330_dylpill21_acbc0262-ff8f-4a8e-b6d0-25486109a502.png');

document.getElementById("FireBurger").innerHTML = FireBurger.info();
document.getElementById("TurkeyBurger").innerHTML = TurkeyBurger.info();
document.getElementById("DoubleCheese").innerHTML = DoubleCheese.info();
document.getElementById("TrippleCheese").innerHTML = TrippleCheese.info();
document.getElementById("QuadraCheese").innerHTML = QuadraCheese.info();

console.log(FireBurger.info());
console.log(TurkeyBurger.info());
console.log(DoubleCheese.info());
console.log(TrippleCheese.info());
console.log(QuadraCheese.info());

let menu = [{'name': FireBurger.info(), 'allergy': 'lactose'}, {'name':TurkeyBurger.info(), 'allergy':'none'}, {'name':DoubleCheese.info(), 'allergy':'none'}, {'name':TrippleCheese.info(), 'allergy':'lactose'}, {'name':QuadraCheese.info(), 'allergy':'lactose'}]


/* Could not get the recommended way to work so had to change it a little bit */
var myElement = document.getElementById("jsLoop");
var i = 0;
for (burger in menu)
{
        let listItem = document.createElement('li');
        let listValue = document.createTextNode(menu[i].name);
        listItem.appendChild(listValue);
    		if(menu[i].allergy != 'none') {
        	let allergValue = document.createTextNode(' ' + menu[i].allergy);
        	listItem.appendChild(allergValue);
        }
       	myElement.appendChild(listItem);
        i++;
}
