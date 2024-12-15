document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tourName = urlParams.get("tour");

    if (tourName) {
        document.getElementById("tourName").textContent = tourName;
        document.getElementById("tour").value = tourName;
    } else {
        console.error("Tour name is missing from URL parameters.");
    }

    const form = document.getElementById("bookingForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const flightID = document.getElementById("flightID").value;
        const flightClass = document.getElementById("class").value;
        const seats = document.getElementById("seats").value;

        if (!flightID || !flightClass || !seats) {
            alert("Please fill in all required fields!");
            return;
        }

        const queryString = new URLSearchParams({
            tour: tourName,
            flightID: flightID,
            class: flightClass,
            seats: seats,
        }).toString();

        window.location.href = `summary.html?${queryString}`;
    });
});
