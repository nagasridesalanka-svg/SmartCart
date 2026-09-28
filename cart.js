function addToCart(name, price)
{
    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}

function loadCart()
{
    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    let table =
    document.getElementById("cart-items");

    let total = 0;

    table.innerHTML = "";

   cart.forEach((item,index) => {

        total += item.price;

        table.innerHTML += `
<tr>
    <td>${item.name}</td>
    <td>₹${item.price}</td>
    <td>
        <button onclick="removeCartItem(${index})"
        class="remove-btn">
            Remove
        </button>
    </td>
</tr>
`;
    });

    document.getElementById("grand-total")
    .innerHTML =
    "Grand Total : ₹" + total;
}
function removeCartItem(index)
{
    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
}