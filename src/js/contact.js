<script>
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;
    
  
    var mailtoLink = 'mailto:A045895@umaia.pt' +
                     '?subject=' + encodeURIComponent(assunto) +
                     '&body=' + encodeURIComponent('Nome: ' + nome + '\nEmail: ' + email + '\n\n' + mensagem);
    
    
    window.location.href = mailtoLink;

   
});
</script>
