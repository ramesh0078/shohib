var base = 0;
var expenses = 0;
let budget; // base rate
var sub_type = 0;
var custom = false;
var number_of_employees1 = 3; // desktop users
var number_of_mobApps1 = 20; //mobile users
var number_of_forms = 0; // public access
var tax_returns = false; 
var tax_support = false;
var bookkeeping = false;
var sales_tax = false;
var prp_tax = false;
var add_support = false;
var public_forms = false; // public forms
var Estimate;

function roundUpNearest10(num) {
  return Math.ceil(num / 10) * 10;
}

function roundDownNearest10(num) {
  return Math.floor(num / 10) * 10;
}

function cal() {
  Flip();
  custom = false;
  budget = 20000;

 

if(document.getElementById("number_of_employees").value>3){
    budget=budget+(document.getElementById("number_of_employees").value -number_of_employees1)*1500;
  }
else if(document.getElementById("number_of_mobApps").value>20){
    budget=budget+(document.getElementById("number_of_mobApps").value - number_of_mobApps1)*500;
  }
  if (public_forms) {
    if (document.getElementById('number_of_forms-2').value > 0) {
      budget=budget+(document.getElementById('number_of_forms-2').value*300)
    } else {
      // $('#first1').prop('checked', false);
      // public_forms = false;
      // window.alert('Please choose the number of forms before selecting "Public forms" as a service.');
    }
  }
  console.log(add_support + '   '+ sub_type)
if(add_support && sub_type){
    if (sub_type === '1') {
      budget=budget+(12*6000);
    } else if (sub_type === '2') {
      budget=budget+(6*6000);
    } else if (sub_type === '3') {
      budget =budget+(3*6000);
      console.log(budget)
  }
}
if (sub_type === '1') {
    budget *=12;
    budget *=(1-(20/100));
  } else if (sub_type === '2') {
    budget *=6;
    budget *=(1-(15/100));
  } else if (sub_type === '3') {
    budget *= 3;
  } else if (sub_type === '5') {
    custom = true;
    $('.custom').addClass('active');
    $('.default').addClass('dactive');
  }

if (expenses === '1') {
    budget += 1500;
  } else if (expenses === '2') {
    budget += 500;
  } else if (expenses === '3') {
    budget += 2375;
  } else if (expenses === '4') {
    budget += 4500;
  } else if (expenses === '5') {
    budget += 6375;
  } else if (expenses === '6') {
    budget += 7500;
  }

  

  $('[bloc=b-text]').text(budget);
  if (custom === false) {
    updateValueInInput(budget, "Estimate");
  } else {
    updateValueInInput(myCustom, "Estimate");
  }
}
// Function to multiply base value
function mul(base) {
  if (expenses >= 1 && expenses <= 4) {
    budget += base * (expenses === 1 ? 1 : (expenses === 2 ? 1.5 : (expenses === 3 ? 2 : 4)));
  } else if (expenses === 5) {
    custom = true;
    $('.custom').addClass('active');
    $('.default').addClass('dactive');
  }
}
// Function to reset custom flag
function Flip() {
  $('.custom').removeClass('active');
  $('.default').removeClass('dactive');
}

myCustom = 'Custom';

    $("[name=expenses]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      expenses = getValueFromInput("expenses");
        cal();
}); 

    $("[name=sub_type]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      sub_type = getValueFromInput("sub_type");
        cal();
});
    $("[name=number_of_employees]").on("input", function () {
    number_of_employees = getValueFromInput("number_of_employees");
      cal();
});
    $("[name=number_of_employees]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      number_of_employees = getValueFromInput("number_of_employees");
        cal();
});
    $("[name=number_of_mobApps]").on("input", function () {
      number_of_mobApps = getValueFromInput("number_of_mobApps");
      cal();
});
    $("[name=number_of_mobApps]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      number_of_mobApps = getValueFromInput("number_of_mobApps");
        cal();
});
    $("[name=add_support]").on("input", function () {
    add_support = getValueFromInput("add_support");
      cal();
});
    $("[name=add_support]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      add_support = getValueFromInput("add_support");
        cal();
});
    $("[name=public_forms]").on("input", function () {
    public_forms = getValueFromInput("public_forms");
      cal();
});
    $("[name=public_forms]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      public_forms = getValueFromInput("public_forms");
        cal();
});