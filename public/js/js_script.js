/*
let myButton = document.getElementById('placebutton')

myButton.onclick = function () {
    console.log(document.getElementById("fullname").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("street").value);
    console.log(document.getElementById("house").value);
    console.log(document.getElementById("payment").value);
    
    var radios = document.getElementsByName("gender");
    for(var i = 0; i < radios.length; i++) {
	if(radios[i].checked)
	    console.log(radios[i].value)
    }
}





let fstHeader = document.createElement('P');
fstHeader.innerHTML = "Fire Burger";
document.getElementById("burger1").appendChild(fstHeader);

let fstIMG = document.createElement('img');
fstIMG.src = "https://image.shutterstock.com/image-photo/closeup-home-made-tasty-burger-600w-1291051606.jpg";
fstIMG.width = "350";
fstIMG.height = "250";
document.getElementById("burger1").appendChild(fstIMG);

let fstList = document.getElementById('burger1List');
let fstInfo = ["750 kCal", "Contains lactose", "Contains gluten"];
var i;
for(i = 0; i < 3; i++) {
    let lItem = document.createElement('li');
    let lValue = document.createTextNode(fstInfo[i]);
    lItem.appendChild(lValue);
    fstList.appendChild(lItem);
}
document.getElementById("burger1").appendChild(fstList);



let sndHeader = document.createElement('P');
sndHeader.innerHTML = "Turkey Burger";
document.getElementById("burger2").appendChild(sndHeader);

let sndIMG = document.createElement('img');
sndIMG.src = "https://assets.epicurious.com/photos/5748b2ed5a5fbbae31ae4af9/6:4/w_620%2Ch_413/shutterstock_148839410.jpg";
sndIMG.width = "350";
sndIMG.height = "250";
document.getElementById("burger2").appendChild(sndIMG);

let sndList = document.getElementById('burger2List');
let sndInfo = ["Deep fired Turkish turkey", "A slice of pink stuff", "Shake n-bake gluten-free bread"];
for(i = 0; i < 3; i++) {
    let lItem = document.createElement('li');
    let lValue = document.createTextNode(sndInfo[i]);
    lItem.appendChild(lValue);
    sndList.appendChild(lItem);
}
document.getElementById("burger2").appendChild(sndList);


let trdHeader = document.createElement('P');
trdHeader.innerHTML = "A double w/ Cheese";
document.getElementById("burger3").appendChild(trdHeader);

let trdIMG = document.createElement('img');
trdIMG.src = "https://images.eatthismuch.com/site_media/img/331330_dylpill21_acbc0262-ff8f-4a8e-b6d0-25486109a502.png";
trdIMG.width = "350";
trdIMG.height = "250";
document.getElementById("burger3").appendChild(trdIMG);

let trdList = document.getElementById('burger3List');
let trdInfo = ["Two layers of pure meat", "Lots of yummy cheese", "Sweet bread bun"];
for(i = 0; i < 3; i++) {
    let lItem = document.createElement('li');
    let lValue = document.createTextNode(trdInfo[i]);
    lItem.appendChild(lValue);
    trdList.appendChild(lItem);
}
document.getElementById("burger3").appendChild(trdList);

*/


/*
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

let menu = [{'name': FireBurger.info(), 'allergy': 'lactose'}, {'name':TurkeyBurger.info(), 'allergy':'none'}, {'name':DoubleCheese.info(), 'allergy':'none'}, {'name':TrippleCheese.info(), 'allergy':'lactose'}, {'name':QuadraCheese.info(), 'allergy':'lactose'}]




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
*/
/*
 Could not get the recommended way to work so had to change it a little bit 
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
}*/
