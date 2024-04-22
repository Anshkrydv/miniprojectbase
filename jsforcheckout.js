document.addEventListener('DOMContentLoaded', function() {
    console.log("Checkout page loaded.");
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('totalPrice')) {
        const totalPrice = parseFloat(urlParams.get('totalPrice'));
        console.log(`Total price received: Rs${totalPrice.toFixed(2)}`);
        const totalPriceValue = document.getElementById('total-price-value');
        console.log("Total price element found:", totalPriceValue);
        totalPriceValue.textContent = `Rs${totalPrice.toFixed(2)}`;
    } else {
        console.error("Error: Total price not found in URL parameters.");
    }
    
    // Event listener for confirm order button
    document.getElementById("confirm-order-btn").addEventListener("click", function(event) {
        event.preventDefault(); 
        document.getElementById("confirmation-modal").style.display = "block";
    });
  
    // Event listener for closing the modal
    document.getElementById("close-modal").addEventListener("click", function() {
        document.getElementById("confirmation-modal").style.display = "none";
    });
});
