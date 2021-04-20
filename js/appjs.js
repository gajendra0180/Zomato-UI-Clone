var itemcount = 0;
var arr = [];
var counterforitem = 0
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
    itemcount++;
    document.getElementById("itemcount").innerHTML = itemcount;

}

function turus(element) {
    turu = element;
    if (turu == 1) {
        arr.push(turuquestion);
    }
}

function gotocart() {
    displaypaynow = 1;
    document.getElementById("cart").innerHTML = '<div class="cart float-right" id="cart"> <button type="button" onclick="gotostore()" class="btn btn-danger "><span class="cart"><i class="fas fa-cart-arrow-down"></i></span>BACK TO STORE <span class="badge badge-light" id="itemcount"></span>    <span class="sr-only">BACK TO STORE</span></button></div>';
    document.getElementById("itemcount").innerHTML = itemcount;
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

    //insprationg for your first order doer
    // document.getElementById("inspiration-order-box").innerHTML = "<div><hr/></div>";

    document.getElementById("togglecart").style.display = "none";


    document.getElementById("best-food").marginBottom = "15vh"
    document.getElementById("best-food").style.fontSize = "50px";
    document.getElementById("best-food").innerHTML = "ITEMS IN THE CART"
    document.getElementById("best-food").style.textDecoration = "underline";




    document.getElementById("totalamount").style.marginBottom = "100px";


    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.display = "flex";
        console.log(priceobj[arr[i]])
    }
    for (let i = counterforitem; i < arr.length; i++) {
        price += priceobj[arr[i]];
        counterforitem++;
    }
    document.getElementById("totalamount").innerHTML = ' <div class="popular-restaurants-text totalamount">Total Amount Payable : ₹ ' + price + ' </div>';


    document.getElementById("dropdown").style.display = "flex";



}

function gotostore() {
    displaypaynow = 0
    document.getElementById("cart").innerHTML = '<div class="cart float-right" id="cart"> <button type="button" onclick="gotocart()" class="btn btn-warning "><span class="cart"><i class="fas fa-cart-arrow-down"></i></span>GO TO CART<span class="badge badge-light" id="itemcount"></span>    <span class="sr-only">GO TO CART</span></button></div>';
    document.getElementById("itemcount").innerHTML = itemcount;
    document.getElementById("card1").style.display = "flex";
    document.getElementById("card2").style.display = "flex";
    document.getElementById("card3").style.display = "flex";
    document.getElementById("card4").style.display = "flex";
    document.getElementById("card5").style.display = "flex";
    document.getElementById("card6").style.display = "flex";
    document.getElementById("card7").style.display = "flex";
    document.getElementById("card8").style.display = "flex";
    document.getElementById("card9").style.display = "flex";
    document.getElementById("card10").style.display = "flex";
    document.getElementById("card11").style.display = "flex";
    document.getElementById("card12").style.display = "flex";
    document.getElementById("card13").style.display = "flex";
    document.getElementById("card14").style.display = "flex";
    document.getElementById("card15").style.display = "flex";
    document.getElementById("totalamount").innerHTML = '';
    document.getElementById("dropdown").style.display = "none";

    document.getElementById("best-food").innerHTML = "Best Food in Agra"
    document.getElementById("best-food").marginBottom = "4vh"
    document.getElementById("best-food").style.fontSize = "33px";
    document.getElementById("best-food").style.textDecoration = "none";

    document.getElementById("togglecart").style.display = "";



}

function promocode() {
    var code = prompt("Enter Your Promo Code");
    if (code == "AXHKJ") {
        document.getElementById("modal2body").innerHTML = "CONGRATS 🎉,YOU HAVE USED YOUR PROMOCODE. WE WILL SHORTLY DELIVER THE FOOD TO YOUR LOCATION KEEP YOUR DEVICE LOCATION ON WE WILL BE TRACKING YOU FROM THERE";
        document.getElementById("exampleModal2Label").innerHTML = "😊 🆂🆄🅲🅲🅴🆂🆂"
        price = 0;
        document.getElementById("totalamount").innerHTML = ' <div class="popular-restaurants-text totalamount">Total Amount Payable : ₹ ' + price + ' </div>';

    } else {
        document.getElementById("modal2body").innerHTML = "SORRY, BUT THE PROMOCODE YOU ENTERED IS NOT VALID.TRY ANOTHER ONE OR CONTACT THE ADMINISTRATOR GAJENDRA PAL at gajendrahitz@gmail.com or 📞 +919557139559 FOR FURTHER PROMO CODE VALIDATION";
        document.getElementById("exampleModal2Label").innerHTML = "😔 🅵🅰🅸🅻🆄🆁🅴"
    }
}

function creditcardpayment() {
    document.getElementById("exampleModal2Label").innerHTML = "😔 🅵🅰🅸🅻🆄🆁🅴"
    document.getElementById("modal2body").innerHTML = "😂SORRY BUT THIS FEATURE IS STILL NOT AVAILABLE AT PRESENT,CONTACT THE ADMINISTRATOR GAJENDRA PAL at gajendrahitz@gmail.com or 📞 +919557139559 FOR FURTHER INFORMATION";
}