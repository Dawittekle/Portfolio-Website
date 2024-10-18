/*function sendmail(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    const param = {
        name: document.querySelector('#fname-ID').value,
        email: document.querySelector('#email-ID').value,
        subject: document.querySelector('#subject-ID').value,
        message: document.querySelector('#message-ID').value
    };
    
    emailjs.send("service_dhf3gko", "template_3e1snyu", param)
    .then(function(response) {
        alert('Your email has been sent!!!');
    }, function(error) {
        alert('Failed to send email: ' + error);
    });
}
 */