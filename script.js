document.addEventListener('DOMContentLoaded', function() {
    // Captura o formulário pelo ID
    const form = document.getElementById('studentForm');

    // Função que lida com o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Captura os dados do formulário
        const photo = document.getElementById('photo').files[0];
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Cria um objeto com os dados
        const formData = {
            photo: photo ? photo.name : 'Nenhuma foto selecionada',
            name: name,
            message: message
        };

        // Exibe os dados no console
        console.log(formData);
    });
});