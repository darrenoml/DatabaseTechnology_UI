document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get("tour");
    const flightID = urlParams.get("flightID");
    const flightClass = urlParams.get("class");
    const seats = parseInt(urlParams.get("seats"), 10) || 0;

    const tourPrices = {
        "America": 30000000,
        "France": 25000000,
        "Greece": 30000000,
        "Egypt": 20000000,
    };

    const tourPrice = tourPrices[tourId] || 0;
    let pricePerSeat = 0;
    if (flightClass === "Economy") pricePerSeat = 5000000;
    else if (flightClass === "Business") pricePerSeat = 10000000;
    else if (flightClass === "First") pricePerSeat = 15000000;

    const ticketPrice = pricePerSeat * seats;
    const grandTotal = tourPrice + ticketPrice;

    document.getElementById("tourName").textContent = tourId || "Tour Not Selected";
    document.getElementById("flightDetails").textContent = flightID || "Flight Not Selected";
    document.getElementById("classDetails").textContent = flightClass || "Class Not Selected";
    document.getElementById("seatsDetails").textContent = seats || "0";
    document.getElementById("tourPrice").textContent = `IDR ${tourPrice.toLocaleString()}`;
    document.getElementById("ticketPrice").textContent = `IDR ${ticketPrice.toLocaleString()}`;
    document.getElementById("grandTotal").textContent = `IDR ${grandTotal.toLocaleString()}`;

    function goHome() {
        window.location.href = "france.html";
    }
});
