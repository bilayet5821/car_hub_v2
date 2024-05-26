document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const navbar = document.getElementById('navbar');
    const carDetails = document.getElementById('car-details');

    boxes.forEach(box => {
        box.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('car', box.getAttribute('data-car'));
        });
    });

    navbar.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    navbar.addEventListener('drop', (e) => {
        e.preventDefault();
        const carData = JSON.parse(e.dataTransfer.getData('car'));

        document.getElementById('car-name').textContent = carData.name;
        document.getElementById('car-model').textContent = carData.model;
        document.getElementById('car-body').textContent = carData.body;
        document.getElementById('car-seating').textContent = carData.seating;
        document.getElementById('car-drive').textContent = carData.drive;
        document.getElementById('car-exterior').textContent = carData.exterior;
        document.getElementById('car-interior').textContent = carData.interior;
        document.getElementById('car-transmission').textContent = carData.transmission;
        document.getElementById('car-description').textContent = carData.description;
        document.getElementById('car-fuel').textContent = carData.fuel;

        carDetails.style.display = 'block';
    });
});