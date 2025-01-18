const toggleTheme = document.getElementById('toggleTheme'); // Sleleciona o elemento com o ID 'toggleTheme
const rootHtml = document.documentElement; // Seleciona o elemento raiz <htm> do documento

function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; // Verifica o tema atual e define o novo tema (claro ou escuro)
    rootHtml.setAttribute('data-theme', currentTheme); // Define o novo tema no atributo 'data-theme' do elemento <html>

    toggleTheme.classList.toggle('bi-sun'); // Alterna a classe do elemento toggle para mudar o icone de acordo com o tema
    toggleTheme.classList.toggle('bi-moon-stars'); // Alterna a classe do elemento toggle para mudar o icone de acordo com o tema
}

toggleTheme.addEventListener('click', changeTheme); // Adiciona um evento de clique ao elemento 'toggleTheme' para chamar a função 'changeTheme'


