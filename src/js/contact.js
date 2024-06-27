<script>
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Construct the mailto URL
    var mailtoLink = 'mailto:seuemail@example.com' +
                     '?subject=' + encodeURIComponent(assunto) +
                     '&body=' + encodeURIComponent('Nome: ' + nome + '\nEmail: ' + email + '\n\n' + mensagem);
    
    // Open the mail client with the mailto link
    window.location.href = mailtoLink;

    // Optionally, you can redirect the user to a thank-you page
    // setTimeout(function() {
    //     window.location.href = '/thank-you.html';
    // }, 1000); // Adjust delay as needed
});
</script>
