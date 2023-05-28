window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = "10000";
  document.getElementById("loan-years").value = "6";
  document.getElementById("loan-rate").value = "5";
}

// Get the current values from the UI
// Update the monthly payment
function update() {

  let loanObject = {
    loanAmount: parseFloat(document.getElementById("loan-amount").value), 
    loanYears: parseFloat(document.getElementById("loan-years").value), 
    loanRate: parseFloat(document.getElementById("loan-rate").value)};

  let monthlyPayment = calculateMonthlyPayment(loanObject);

  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let loanAmount = values.loanAmount;
  let loanYears = values.loanYears;
  let loanRate = values.loanRate;

  let monthlyInterestRate = loanRate/100/12

  let monthlyPaymentNum = (loanAmount*monthlyInterestRate);
  let monthlyPaymentDen = (1-((1+monthlyInterestRate)**(-loanYears*12)))
  let monthlyPayment = monthlyPaymentNum/monthlyPaymentDen;

  //Round to 2 decimal places
  monthlyPayment = Math.round(monthlyPayment * 100)/100

  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = "$" + monthly;
}
