function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
   let campoPesquisa = document.getElementById("campo-pesquisa").value

   // se campoPesquisa for uma string sem nada
   if (!campoPesquisa){
    section.innerHTML = "<p class='mensagem-erro'>Nada foi encontrado</p>";
    return;
   }

   campoPesquisa = campoPesquisa.toLowerCase()

   
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados){
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se titulo includes campoPesquisa 
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
// Constrói o HTML para cada item do resultado da pesquisa, incluindo título, descrição e botão
resultados += `
<div class="item-resultado">
  <h2>
    <a href="https://store.steampowered.com/?l=portuguese" target="_blank">${dado.titulo}</a>
  </h2>
  <p class="descricao-meta">${dado.descricao}</p>
  <button class="btn-promocoes"><a href="${dado.link}" target="_blank">Ver Promoções</a></button>
</div>
`;
      }
      
    }

    if (!resultados){
      resultados = "<p class='erro'>Nada foi encontrado</p>"
    
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }


