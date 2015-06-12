// template found at http://www.thomashardy.me.uk/using-html5-localstorage-on-a-form
// changed his .keyup to .change


$(document).ready(function() {
    function init() {
        if (localStorage["givenName"]) {
            $('#givenName').val(localStorage["givenName"]);
        }
        if (localStorage["familyName"]) {
            $('#familyName').val(localStorage["familyName"]);
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);
        }
        if (localStorage["sizeW"]) {
            $('#sizeW').val(localStorage["sizeW"]);
        }
        if (localStorage["sizeL"]) {
            $('#sizeL').val(localStorage["sizeL"]);
        }
        if (localStorage["message"]) {
            $('#message').val(localStorage["message"]);
        }
        if (localStorage["address"]) {
            $('#address').val(localStorage["address"]);
        }
        if (localStorage["postCode"]) {
            $('#postCode').val(localStorage["postCode"]);
        }
        if (localStorage["country"]) {
            $('#country').val(localStorage["country"]);
        }
    }
    init();
});
$('.stored').change(function() {
    localStorage[$(this).attr('name')] = $(this).val();
});
$('#localStorageTest').submit(function() {
    localStorage.clear();
});
