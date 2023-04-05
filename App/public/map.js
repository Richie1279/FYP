function saveJourney(journeyData) {
  // Send the journey data to the server-side script to save it in the database
  fetch("http://localhost:3000/api/save-journey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(journeyData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Journey saved:", data);
    })
    .catch((error) => {
      console.error("Error saving journey:", error);
    });
}
