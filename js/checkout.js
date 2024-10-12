document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutCart = document.getElementById('checkOutCart');
    const totalAmount = document.getElementById('totalAmount');

    let totalPrice = 0;

    cart.array.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('checkOut');
        cartItem.textContent= `${item.name} - ${item.price}`;
        checkoutCart.appendChild(cartItem);

        const price = parseFloat(item.price.replace ('$', ''));
        totalPrice += price;
    });
    totalAmount.textContent = totalPrice.toFixed(2);

})