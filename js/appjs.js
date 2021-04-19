var itemcount = 0;

function addtocart() {
    alert("Item Added to Cart");
    document.getElementById("itemcount").innerHTML = itemcount;
    itemcount++;
}