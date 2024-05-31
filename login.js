document.getElementById("cadastroForm").addEventListener("submit", function(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
   
    var usuario = JSON.parse(localStorage.getItem("usuario"));

    if(usuario && email === usuario.email && senha === usuario.senha){
        document.getElementById("resultados").textContent = "Login bem sucedido";
    } else {
        document.getElementById("resultados").textContent = "Email ou senha incorretos. Verifique suas credenciais."
    }
});