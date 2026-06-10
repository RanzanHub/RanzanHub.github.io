document.querySelector("form").addEventListener("submit", function(event) {

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let assunto = document.getElementById("assunto").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    let regexTelefone = /^[0-9]+$/;
    


    // Validar nome
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        event.preventDefault();
        return;
    }

    // Validar e-mail
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        event.preventDefault();
        return;
    }

    // Validar telefone (opcional)
    if (telefone !== "" && telefone.length < 8) {
        alert("Digite um telefone válido.");
        event.preventDefault();
        return;
    }

    // Validar assunto
    if (assunto.length < 3) {
        alert("O assunto deve ter pelo menos 3 caracteres.");
        event.preventDefault();
        return;
    }

    // Validar mensagem
    if (mensagem.length < 10) {
        alert("A mensagem deve ter pelo menos 10 caracteres.");
        event.preventDefault();
        return;
    }
    if (telefone !== "" && !regexTelefone.test(telefone)) {
    alert("O telefone deve conter apenas números.");
    event.preventDefault();
    return;
}  
    alert("Formulário enviado com sucesso!");
});

 

