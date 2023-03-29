document.getElementById('saveJourney').addEventListener('click', saveJourney);

function saveJourney() {
  const journeyData = routeData.getRouteData();

  // Send the journey data to the server-side script to save it in the database
  // Replace the URL with the path to your server-side script
  fetch('/path/to/your/server/side/script', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(journeyData),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Journey saved:', data);
  })
  .catch((error) => {
    console.error('Error saving journey:', error);
  });
}