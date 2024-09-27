document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Coletando os dados do formulário
    const photo = document.getElementById('photo').files[0];
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Criando um objeto para armazenar os dados
    const studentData = {
        name: name,
        message: message,
    };

    // Armazenando a foto em Base64 (opcional)
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            studentData.photo = e.target.result; // Armazenando a foto em Base64
            console.log(studentData); // Exibindo os dados no console
        };
        reader.readAsDataURL(photo);
    } else {
        console.log(studentData); // Exibindo os dados no console
    }
});