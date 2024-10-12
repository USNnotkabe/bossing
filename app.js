// Select elements
const addCart = document.querySelectorAll('.addCart'); // Get all "Add to Cart" buttons
const cartCount = document.getElementById('cartCount'); // Select the cart count element
const cartList = document.querySelector('.cartList'); // Select the cart list where items will be added
const proceedButton = document.querySelector('.proceedButton'); // Select the proceed button

let cart = []; // Initialize the cart array

// Add click event listener to each "Add to Cart" button
addCart.forEach((button) => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement; // Get the parent element (the product div)

        const productName = productElement.querySelector('h2').textContent; 
        const productPrice = productElement.querySelector('.price').textContent;



const existingProduct = cart.find(item => item.name === productName);
if (existingProduct) {
    alert(`${productName} is already in the cart`);
    return; 
}

        // Add the product to the cart array
        cart.push({ name: productName, price: productPrice });

        // Update the cart count
        cartCount.textContent = cart.length;

        // Create a new element for the cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${productName} - ${productPrice}`; 

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.textContent = 'Remove';

        // Add event listener for removing the item
        removeButton.addEventListener('click', () => {
            removeFromCart(productName, cartItem);
        });

        // Append the remove button to the cart item
        cartItem.appendChild(removeButton);
        cartList.appendChild(cartItem); // Append cart item to the cart list
    });
});

// Function to remove an item from the cart
function removeFromCart(productName, cartItem) {
    // Remove the item from the cart array
    cart = cart.filter(item => item.name !== productName); 

    // Remove the item from the DOM
    cartItem.remove(); 
    
    // Update the cart count
    cartCount.textContent = cart.length; // This should correctly decrement the count
}

// Proceed to checkout
proceedButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Calculate total price
    let total = cart.reduce((sum, item) => {
        let price = parseFloat(item.price.replace('$', '')); // Ensure price conversion is done correctly
        return sum + price;
    }, 0);
    
    // Show alert with the total
    alert(`You have ${cart.length} items in your cart. Total: $${total.toFixed(2)}`);
    console.log(`Checkout: ${cart.length} items, Total: $${total.toFixed(2)}`); // Log the checkout details
});
