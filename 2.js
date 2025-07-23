let gen = document.getElementById('gen');
let refersh = document.getElementById('Refresh');

let input = document.getElementById('input');
let Submit = document.getElementById('Submit');

let text_result = document.getElementById('text-result');
// otp

// console.log(window.location.reload())  
refersh.addEventListener('click', ongenrateOtp);

let GeneretedOTP;

function ongenrateOtp() {
  GeneretedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  gen.innerText = GeneretedOTP;
}

//validation
Submit.addEventListener('click', onValidtion);

function onValidtion() {
  const userOTP = input.value;
  
  if (userOTP === GeneretedOTP) {
    // console.log('yes');
    text_result.style.color = 'green';

    text_result.textContent = 'OTP Submmited';
  } else {
    text_result.style.color = 'red';
    text_result.textContent = 'Please enter Correct OTP !!!!';
  }
}

window.onload = ongenrateOtp();