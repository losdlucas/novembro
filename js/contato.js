function enviarWhatsApp() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verificação dos campos
    if (!nome || !email || !mensagem) {
        alert("⚠️ Todos os campos devem ser preenchidos antes de enviar.");
        return;
    }

    // Mensagem personalizada
    const texto = `Oi, meu nome é ${nome} e meu email é ${email}.%0A` +
        `Mensagem: ${mensagem}`;

    const telefone = "5519986075321";

    //  Redireciona pro WhatsApp
    window.open(`https://wa.me/${telefone}?text=${texto}`, "_blank");
}