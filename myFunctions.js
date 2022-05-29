jQuery.validator.addMethod(
  "noSpace",
  function (value, element) {
    return value == "" || value.trim().length != 0;
  },
  "No space please and don't leave it empty"
);
jQuery.validator.addMethod(
  "customEmail",
  function (value, element) {
    return (
      this.optional(element) ||
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        value
      )
    );
  },
  "Please enter valid email address!"
);
$.validator.addMethod(
  "alphanumeric",
  function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  },
  "Letters, numbers, and underscores only please"
);
jQuery.validator.addMethod (
  "Isidcardno", 
  function (value, Element) {
  return this.optional (Element) || Idcardnoutil.checkidcardno (value);
  },
  "Please enter your ID number correctly"
  );
var $registrationForm = $("#registration");
if ($registrationForm.length) {
  $registrationForm.validate({
    rules: {
      fullname: {
        required: true,
        alphanumeric: true,
      },
      email: {
        required: true,
        customEmail: true,
      },
      card: {
        Required:true,
        Isidcardno:true
      },
      loanvalue: {
        required: true,
        noSpace: true,
        max: 10000000,
        min: 1000000,
      },

      country: {
        required: true,
      },
      address: {
        required: true,
      },
    },
    messages: {
      username: {
        required: "Please enter Fullname!",
      },
      email: {
        required: "Please enter email!",
        email: "Please enter valid email!",
      },

      loanvalue: {
        required: "Please enter idNumber!",
        max: "الرجاء ادخال 10 مليون على الاكثر",
        min: "الرجاء ادخال مليون على الاقل",
      },
      lname: {
        required: "Please enter last name!",
      },
      country: {
        required: "Please select country!",
      },
      address: {
        required: "Please enter address!",
      },
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents(".gender"));
      } else if (element.is(":checkbox")) {
        error.appendTo(element.parents(".hobbies"));
      } else {
        error.insertAfter(element);
      }
    },
  });
}

