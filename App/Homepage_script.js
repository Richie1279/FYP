const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	
	const pickupLocation = form.elements['signup'].value;
	

	// Add code here to submit the form data to the server and redirect the user to a confirmation page.
});
