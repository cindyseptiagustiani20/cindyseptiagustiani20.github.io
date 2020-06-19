function ShowPass() {
	var x = document.getElementById("pass");
	if (x.type === "password") {
		x.type = "text";
	}
	else{
		x.type = "password";
	}
}

function ShowPass2() {
	var y = document.getElementById("pass3");
	var x = document.getElementById("pass2");
	if (x.type === "password" && y.type === "password") {
		x.type = "text";
		y.type = "text";
	}
	else{
		x.type = "password";
		y.type = "password";
	}
}

function ConfirmPass() {
	var a = document.getElementById('pass');
	var b = document.getElementById('confirmpass');
	var c = document.getElementById('error');
	var d = document.getElementById('submit');

	if (a.value !== b.value) {
		b.classList.add('redtext');
		c.classList.add('show-error');
		d.setAttribute('disabled', 'true');
	}
	else {
		b.classList.remove('redtext');
		c.classList.remove('show-error');
	}
}