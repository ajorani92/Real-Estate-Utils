function toggle(div_id){
	const main = document.getElementById('content-container');
	const new_content = document.getElementById(div_id);
	const clone = new_content.cloneNode(true);
	clone.style.display = "block";
	clone.style.backgroundColour = "white";
	while (main.firstChild) main.firstChild.remove();
	main.appendChild(clone);
}

function mortgage_calculator(){
	let checkbox = document.getElementById('interest-only-checkbox');
	let house_value = document.getElementById('house-value').value;
	let down_payment = document.getElementById('down-payment').value;
	let mortgage_period = document.getElementById('mortgage-period').value;
	let interest_rate = document.getElementById('interest-rate').value;

	// TODO: add validation

	if(checkbox.checked){ // Compute interest-only mortgage
		var remaining_payment = house_value - down_payment;
		var rate = interest_rate / 100;
		var calculation = ((remaining_payment * (1 + (rate * mortgage_period))) - remaining_payment) / (mortgage_period * 12);
		var output = "You would make " + (mortgage_period * 12) + " monthly mortgage payments of £" + calculation.toFixed(2);
		document.getElementById('mortgage-calculation').textContent = output;
	} else { // Compute regular mortgage
		var remaining_payment = house_value - down_payment; // Value that the bank is lending you
		var number_of_payments = mortgage_period * 12;
		var rate = interest_rate / 100
	
		var numerator = (rate / 12) * Math.pow((1 + (rate / 12)), number_of_payments);
		var denominator = Math.pow((1 + (rate / 12)), number_of_payments) - 1;
		var calculation = remaining_payment * (numerator / denominator);
		var output = "You would make " + (mortgage_period * 12) + " monthly mortgage payments of £" + calculation.toFixed(2);
		document.getElementById('mortgage-calculation').textContent = output;
	}
	return false;
}

function rental_calculator(){
	let mortgage = document.getElementById('monthly-mortgage-rental-calculator').value;
	let units = document.getElementById('number-of-units').value;
	let rent = document.getElementById('rent-per-unit').value;

	var calculation = (units * rent) - mortgage;
	var output = "Your monthly profit would be: £" + calculation.toFixed(2);
	document.getElementById('profit-calculation').textContent = output;

	return false;
}

function vacant_property(){
	let mortgage = document.getElementById('monthly-mortgage-vacant-property').value;
	let utilities = document.getElementById('cost-of-utilities').value;
	let taxes = document.getElementById('property-taxes').value;

	var calculation = parseFloat(mortgage) + parseFloat(utilities) + parseFloat(taxes);
	var output = "Your monthly losses would be: £" + parseFloat(calculation).toFixed(2);
	document.getElementById('losses-calculation').textContent = output;

	return false;
}