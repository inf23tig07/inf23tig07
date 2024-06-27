<script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Form data
    var formData = new FormData(this);

    fetch('/', {
        method: 'POST',
        body: formData,
    }).then(function(response) {
        if (response.ok) {
            window.location.href = '/'; // Redirect to the homepage
        } else {
            alert('Form submission failed.');
        }
    }).catch(function(error) {
        console.error('Form submission error:', error);
        alert('Form submission error.');
    });
});
</script>
