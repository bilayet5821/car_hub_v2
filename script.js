document.getElementById('buyButton').addEventListener('click', function() {
    const carDetails = document.getElementById('carDetails');
    if (carDetails.style.display === 'none' || carDetails.style.display === '') {
        carDetails.style.display = 'block';
    } else {
        carDetails.style.display = 'none';
    }
});
