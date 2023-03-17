const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	
	const pickupLocation = form.elements['pickup'].value;
	const deliveryLocation = form.elements['delivery'].value;
	const deliveryTime = form.elements['time'].value;

	console.log('Pickup Location:', pickupLocation);
	console.log('Delivery Location:', deliveryLocation);
	console.log('Delivery Time:', deliveryTime);

	// Add code here to submit the form data to the server and redirect the user to a confirmation page.
});
