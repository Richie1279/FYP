class RouteData {
    constructor() {
      this.startLocation = null;
      this.endLocation = null;
      this.distance = null;
      this.duration = null;
    }
  
    setRouteData(start, end, distance, duration) {
      this.startLocation = start;
      this.endLocation = end;
      this.distance = distance;
      this.duration = duration;
    }

      
        getStartLocation() {
          return this.startLocation;
        }
      
        getEndLocation() {
          return this.endLocation;
        }
      
        getDistance() {
          return this.distance;
        }
      
        getDuration() {
          return this.duration;
        }

        // Create a routeData instance
const routeData = new RouteData();

// Add the event listener to the Mapbox Directions instance
directions.on('route', function (event) {
  // ... extract startLocation, endLocation, distance, and duration from the event

  // Update the routeData instance with the new data
  routeData.setRouteData(startLocation, endLocation, distance, duration);

  // Handle the updated data
  handleRouteData();
});

// Function to handle the updated route data
function handleRouteData() {
  // Access the properties
  const startLocation = routeData.getStartLocation();
  const endLocation = routeData.getEndLocation();
  const distance = routeData.getDistance();
  const duration = routeData.getDuration();

  // Example usage: Display the properties in the console
  console.log('Start Location:', startLocation);
  console.log('End Location:', endLocation);
  console.log('Distance:', distance);
  console.log('Duration:', duration);
}
      
      
  }
  