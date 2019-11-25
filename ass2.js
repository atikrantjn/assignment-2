var count = 0;

function validate() {
	var first_name = document.getElementById('first_name');

	var last_name = document.getElementById('last_name');

	var phone_no = document.getElementById('phone_no');
	var office_no = document.getElementById('office_no');

	var user_conf = document.getElementById('user_conf');

	var about_us = document.getElementById('about_us');

	var residence1 = document.getElementById('residence1');
	var residence2 = document.getElementById('residence2');

	var check_box1 = document.getElementById('checkbox_sample18');
	var check_box2 = document.getElementById('checkbox_sample19');
	var check_box3 = document.getElementById('checkbox_sample20');

	var alert_phone = document.getElementById('alert_phone');

	if (!(residence1.checked || residence2.checked)) {
		count = 1;
		document.getElementById('alert_gender').innerHTML = 'Please select your gender';
		setTimeout(function() {
			document.getElementById('alert_gender').innerHTML = '';
		}, 5000);
	}

	if (!(check_box1.checked || check_box2.checked || check_box3.checked)) {
		count = 1;
		document.getElementById('alert_check').innerHTML = 'Please select atleast one interest ';
		setTimeout(function() {
			document.getElementById('alert_check').innerHTML = '';
		}, 5000);
	} else {
		alert('form submitted successfully');
	}
}

// checking first name input field

function validateFirst() {
	if (first_name.value === '') {
		count = 1;
		document.getElementById('alertFirst').innerHTML = 'This field cannot be empty';
		setTimeout(function() {
			document.getElementById('alertFirst').innerHTML = '';
		}, 5000);
		//first_name.focus();
	}
}

// checking last name input field

function validateLast() {
	if (last_name.value === '') {
		count = 1;
		document.getElementById('alertLast').innerHTML = 'This field cannot be empty';
		setTimeout(function() {
			document.getElementById('alertLast').innerHTML = '';
		}, 5000);
		//last_name.focus();
	}
}

// checking input value of phone field;

function validPhone() {
	if (phone_no.value === '') {
		count = 1;
		document.getElementById('alertPhone').innerHTML = 'this field cannot be empty';
		setTimeout(function() {
			document.getElementById('alertPhone').innerHTML = '';
		}, 5000);
		//phone_no.focus();
	} else if (phone_no.value.length > 10 || phone_no.value.length < 10) {
		count = 1;
		document.getElementById('alertPhone').innerHTML = 'please enter 10 digits only';
		setTimeout(function() {
			document.getElementById('alertPhone').innerHTML = '';
		}, 5000);
		// phone_no.focus();
	} else if (isNaN(phone_no.value)) {
		count = 1;
		document.getElementById('alertPhone').innerHTML = 'please enter digits only';
		setTimeout(function() {
			document.getElementById('alertPhone').innerHTML = '';
		}, 5000);
		//phone_no.focus();
	}
}

//checking input value for office field

function valid_officePhone() {
	if (office_no.value === '') {
		count = 1;
		document.getElementById('alert_officePhone').innerHTML = 'This field cannot be empty';
		setTimeout(function() {
			document.getElementById('alert_officePhone').innerHTML = '';
		}, 5000);
		//office_no.focus();
	} else if (office_no.value.length > 10 || office_no.value.length < 10) {
		count = 1;
		document.getElementById('alert_officePhone').innerHTML = 'please enter 10 digits only';
		setTimeout(function() {
			document.getElementById('alert_officePhone').innerHTML = '';
		}, 5000);
		//office_no.focus();
	} else if (isNaN(office_no.value)) {
		count = 1;
		document.getElementById('alert_officePhone').innerHTML = 'please enter digits only';
		setTimeout(function() {
			document.getElementById('alert_officePhone').innerHTML = '';
		}, 5000);
		//office_no.focus();
	}
}

// validate email entered by user

function validateEmail() {
	var alert_email = document.getElementById('alert_email');
	var pattern = /^([a-zA-Z0-9_\.\-])+\@+(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;
	var user_email = document.getElementById('user_email');

	/*
	if (user_email.value.match(pattern)) {
		return true;
	} else {
		alert_email.style.display = 'block';
		setTimeout('hideAlert()', 5000);

		return false;
	}
	*/

	if (user_email.value === '') {
		count = 1;
		document.getElementById('alert_email').innerHTML = 'this field cannot be empty';
		setTimeout(function() {
			document.getElementById('alert_email').innerHTML = '';
		}, 5000);
	} else if (!user_email.value.match(pattern)) {
		count = 1;
		document.getElementById('alert_email').innerHTML = 'please enter valid email address';
		setTimeout(function() {
			document.getElementById('alert_email').innerHTML = '';
		}, 5000);
	} else {
		count = 0;
		return true;
	}
}

//validate password function

function validatePassword(min, max) {
	var alert_pass = document.getElementById('alert_pass');
	var user_pass = document.getElementById('user_pass');
	var pass_pattern = /^[a-zA-Z0-9]+$/;
	var pass_len = user_pass.value.length;

	if (pass_len < min || pass_len > max || !user_pass.value.match(pass_pattern)) {
		count = 1;
		document.getElementById('alert_pass').innerHTML = 'please enter password between 8-15 alphanumeric characters';
		setTimeout(function() {
			document.getElementById('alert_pass').innerHTML = '';
		}, 5000);
	} else {
		count = 0;
		return true;
	}
}

//confirm password validation function.

function validateConfPass() {
	var alert_conf_pass = document.getElementById('alert_conf_pass');
	if (user_conf.value === user_pass.value) {
		count = 0;
		return true;
	} else {
		count = 1;
		document.getElementById('alert_conf_pass').innerHTML = "Password did'nt matched ";
		setTimeout(function() {
			document.getElementById('alert_conf_pass').innerHTML = '';
		}, 5000);
	}
}

//age validation function

function getAge() {
	var inputMonth = document.getElementById('month');
	var inputYear = document.getElementById('year');
	var inputDay = document.getElementById('day');

	var today = new Date();
	//var currentYear = today.getFullYear();

	var newdate = new Date(inputYear.value, inputMonth.value, inputDay.value);
	// var birth_year = newdate.getFullYear();
	// var birth_month = newdate.getMonth();

	//var calc_year = currentYear - birth_year;

	var diff = Math.abs(today.getTime() - newdate.getTime());

	var age = diff / (1000 * 3600 * 24 * 365.25);

	var fixed_age = age.toFixed(2);

	if (inputMonth.value == 'month' || inputYear.value == 'year' || inputDay.value == 'day') {
		count = 1;
		document.getElementById('alert_birth').innerHTML = 'please enter valid date,year,month';
		setTimeout(function() {
			document.getElementById('alert_birth').innerHTML = '';
		}, 5000);
	} else {
		count = 0;
		document.getElementById('age').value = fixed_age + ' years';
	}
}

//validate about us
function validateAbout() {
	if (about_us.value == '') {
		document.getElementById('alert_about').innerHTML = 'This field is mandatory ';
		setTimeout(function() {
			document.getElementById('alert_about').innerHTML = '';
		}, 5000);
	}
}

var year = 1980;
var day = 1;
var max_day = 31;
var max = new Date().getFullYear();
var select = document.getElementById('year');

var select_day = document.getElementById('day');

for (var j = day; j <= max_day; j++) {
	var day_option = document.createElement('option');
	day_option.value = j;
	day_option.innerHTML = j;
	select_day.appendChild(day_option);
}

for (var i = year; i <= max; i++) {
	var optn = document.createElement('option');
	optn.value = i;
	optn.innerHTML = i;
	select.appendChild(optn);
}
