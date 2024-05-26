document.addEventListener("DOMContentLoaded", function() {
    // Display the popup
    function showPopup() {
        const overlay = document.getElementById('popup-overlay');
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
    }

    // Hide the popup
    function hidePopup() {
        const overlay = document.getElementById('popup-overlay');
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
    }

    // Show the popup immediately for demo purposes
    showPopup();

    // Close button event listener
    document.getElementById('close-btn').addEventListener('click', hidePopup);

    // OK button event listener
    document.getElementById('ok-btn').addEventListener('click', hidePopup);
});
