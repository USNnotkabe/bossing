document.addEventListener('DOMContentLoaded', () => {
    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutCart = document.getElementById('checkOutCart');
    const totalAmount = document.getElementById('totalAmount');

    let totalPrice = 0;

    // Loop through the cart items and display them
    cart.forEach(item => {  // Fixed to cart.forEach
        const cartItem = document.createElement('div');
        cartItem.classList.add('checkOut');
        cartItem.textContent = `${item.name} - ${item.price}`;
        checkoutCart.appendChild(cartItem);

        // Calculate the total price
        const price = parseFloat(item.price.replace('$', ''));
        totalPrice += price;
    });

    // Display the total price
    totalAmount.textContent = totalPrice.toFixed(2);

    // Handle form submission
    const checkoutForm = document.getElementById('checkoutForm');  // Corrected the form ID
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        // Display a confirmation message
        alert(`Thank you for your purchase, ${name}!\nAn email confirmation has been sent to ${email}.\nTotal: $${totalPrice.toFixed(2)}`);

        // Clear the cart after checkout
        localStorage.removeItem('cart');

        // Optional: redirect to success page
        window.location.href = 'success.html';
    });
});
