

let cart = [];
let total = 0;

// Cargar el carrito desde el almacenamiento local al cargar la página
window.onload = function () {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        total = parseFloat(localStorage.getItem('total'));
        updateCartDisplay();
    }
}

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCartDisplay();
    saveCartToLocalStorage();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
}

function checkout() {
    // Aquí puedes agregar la lógica para procesar el pago
    alert(`Total a pagar: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCartDisplay();
    saveCartToLocalStorage();
}

document.getElementById('checkout-btn').addEventListener('click', checkout);
