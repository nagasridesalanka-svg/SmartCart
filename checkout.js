window.onload = function()
{
    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    if(cart.length === 0)
    {
        alert(
        "No products found in cart."
        );

        window.location.href =
        "cart.html";

        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    document.getElementById(
        "checkout-total"
    ).innerHTML =
    "Order Total : ₹" + total;
};

function placeOrder()
{
    localStorage.setItem(
        "orderStatus",
        "Placed"
    );

    alert("Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href=
"order_tracking.html";
}