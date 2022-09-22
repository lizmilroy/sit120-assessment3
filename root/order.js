// SIT120 Assessment 3
// Elizabeth Milroy - s222075016
// order.js - Vue applications and components specific to the order.html page.

// Application used in the process of creating the validation form. Data stores user input which is displayed in the validation form.
// Filter is used in the validation form to capitalize the first letter of the user input.
// A custom directive is used to automatically focus on the first form field when the page is navigated to.
var orderForm = new Vue ({
    el: '.form',
    data: {
        fname: '',
        lname: '',
        addr: '',
        state: '',
        postcode: '',
        email: ''
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    }
});

// Function is used to create an alert when the submit button is clicked. It displays a thank you message and the time the order was placed.
function submitAlert () {
    const d = new Date();
    alert("We have recieved your order. Thank you! \n" + "You will recieve an email confirmation soon. \n \n" + "Order recieved at: " + d.toUTCString());
};