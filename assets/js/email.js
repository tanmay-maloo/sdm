// {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
(function() {
    emailjs.init('8yyt6sKrCfxmDk-0V');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // these IDs from the previous steps
        emailjs.sendForm('service_1buzapp', 'template_ocs3m0d', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

// function required()
// {
// let user_name = document.forms["contact-form"]["user_name"].value;
// let user_email = document.forms["contact-form"]["user_email"].value;
// let contact_number = document.forms["contact-form"]["contact_number"].value;
// let message = document.forms["contact-form"]["message"].value;
// if (user_name != "" &&  user_email != "" &&  contact_number != "" && message != ""){
//     alert("please fill the all required field in the message form.")
// }
// }