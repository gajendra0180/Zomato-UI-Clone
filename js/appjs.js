var itemcount = 1;
var arr = []
var price = { "card1": 10, "card2": 20 }

function addtocart(ids) {
    alert("𝓒𝓞𝓝𝓖𝓞 🎉 𝓘𝓣𝓔𝓜 𝓐𝓓𝓓𝓔𝓓 𝓣𝓞 𝓒𝓐𝓡𝓣 😂");
    arr.push(ids);
    document.getElementById("itemcount").innerHTML = itemcount;
    itemcount++;
}

function gotocart() {
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



    document.getElementById("totalamount").innerHTML = ' <div class="popular-restaurants-text">Total Amount : </div>'
    document.getElementById("totalamount").style.position = "relative";
    document.getElementById("totalamount").style.top = "-21vh";

    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.display = "flex";

    }

}