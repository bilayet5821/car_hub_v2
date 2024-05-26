document.getElementById('place-order-btn').addEventListener('click', function() {
    const paymentMethod = document.getElementById('payment-method').value;
    
    if (paymentMethod) {
        document.getElementById('payment-form').classList.add('hidden');
        document.getElementById('success-message').classList.remove('hidden');
    } else {
        alert('Please select a payment method.');
    }
});
