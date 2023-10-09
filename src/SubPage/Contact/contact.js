window.validate = function validate() {
  var name = document.registerForm.fname.value;
  var telNumber = document.registerForm.number.value;
  var email = document.registerForm.email.value;
  var password = document.registerForm.password.value;

  // Validate name
  if (validateName(name) === false) return false;

  // Validate mobile number
  if (validateTelNumber(telNumber) === false) return false;

  // Validate email address
  if (validateEMail(email) === false) return false;

  // Validate password number
  if (validatePassword(password) === false) return false;

  var dataPreview =
    "You've submitted the following details: \n" +
    'Full Name: ' +
    name +
    '\n' +
    'Mobile Number: ' +
    telNumber +
    '\n' +
    'Email Address: ' +
    email +
    '\n' +
    'Password: ' +
    password +
    '\n';

  alert(dataPreview);
  return true;
};

export function validateName(name) {
  if (name === '') {
    alert('Please enter your name');
    console.log(name);
    return false;
  } else {
    var regexName = /^[a-zA-Z\s]+$/;
    if (regexName.test(name) === false) {
      alert('Please enter a valid name');
      return false;
    } else {
      return true;
    }
  }
}

export function validateTelNumber(telNumber) {
  if (telNumber === '') {
    alert('Please enter your mobile number');
    console.log(telNumber);
    return false;
  } else {
    var regexNumber = /^[1-9]\d{9}$/;
    if (regexNumber.test(telNumber) === false) {
      alert('Please enter a valid 10 digit mobile number');
      return false;
    } else {
      return true;
    }
  }
}

export function validateEMail(email) {
  if (email === '') {
    alert('Please enter your email address');
    console.log(email);
    return false;
  } else {
    var regexEMail = /^\S+@\S+\.\S+$/;
    if (regexEMail.test(email) === false) {
      alert('Please enter a valid email address');
      return false;
    } else {
      return true;
    }
  }
}

export function validatePassword(password) {
  if (password === '') {
    alert('Please enter a password');
    console.log(password);
    return false;
  } else {
    var regexPassword = /^.{10,}/;
    if (regexPassword.test(password) === false) {
      alert('Please enter a passwaord with at least 10 characters');
      return false;
    } else {
      return true;
    }
  }
}
