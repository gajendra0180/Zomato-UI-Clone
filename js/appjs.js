var itemcount = 1;
var arr = [];
var priceobj = {
    "card1": 300,
    "card2": 200,
    "card3": 150,
    "card4": 150,
    "card5": 150,
    "card6": 150,
    "card7": 200,
    "card8": 250,
    "card9": 250,
    "card10": 150,
    "card11": 100,
    "card12": 150,
    "card13": 150,
    "card14": 100,
    "card15": 150,
};
var price = 0;
displaypaynow = 0;
var turu = 0;
var turuquestion;

function addtocart(ids) {
    turuquestion = ids;
    document.getElementById("itemcount").innerHTML = itemcount;
    itemcount++;
}

function turus(element) {
    turu = element;
    if (turu == 1) {
        arr.push(turuquestion);
    }
}

function gotocart() {
    displaypaynow = 1;
    document.getElementById("cart").innerHTML = "";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
    document.getElementById("card10").style.display = "none";
    document.getElementById("card11").style.display = "none";
    document.getElementById("card12").style.display = "none";
    document.getElementById("card13").style.display = "none";
    document.getElementById("card14").style.display = "none";
    document.getElementById("card15").style.display = "none";
    document.getElementById("inspiration-order-box").innerHTML = "<div><hr/></div>";

    document.getElementById("togglecart").innerHTML = "";

    document.getElementById("best-food").marginBottom = "15vh"
    document.getElementById("best-food").style.fontSize = "50px";
    document.getElementById("best-food").innerHTML = "ITEMS IN THE CART"
    document.getElementById("best-food").style.textDecoration = "underline";




    document.getElementById("totalamount").style.marginBottom = "100px";


    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.display = "flex";
        price += priceobj[arr[i]];
        console.log(priceobj[arr[i]])
    }
    document.getElementById("totalamount").innerHTML = ' <div class="popular-restaurants-text totalamount">Total Amount : ₹ ' + price + ' </div>';

    if (displaypaynow) {
        document.getElementById("dropdown").style.display = "flex";
    }

}

function promocode() {
    prompt("Enter Your Promo Code");
}