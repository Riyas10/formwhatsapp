function sendToWhatsapp(){
	let number = "+919042265879";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "*Name :* " +name+ "%0a"
	+ "*Email :* " +email+ "%0a"
	+ "*Message :* " +message
    + "%0a%0a"
    +"*This is an example of send HTML form data to WhatsApp...*";

	window.open(url, '_blank').focus();
}
