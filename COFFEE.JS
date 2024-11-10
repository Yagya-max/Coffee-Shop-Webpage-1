document.getElementById('coffeeOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const coffeeType = document.getElementById('coffeeType').value;
    const quantity = document.getElementById('quantity').value;
    
    const orderMessage = `You ordered ${quantity} ${coffeeType}(s)! Thank you for choosing Coffee Bliss.`;
    document.getElementById('orderMessage').innerText = orderMessage;

    this.reset();
});
