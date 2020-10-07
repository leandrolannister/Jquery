function insertPlacar(){
  let tbody = $('.placar').find("tbody");
  let name = 'Leandro';
  let pontos = $('#count-words').text(); 
  
  row = rows(name, pontos);    
  row.find(".btn-remover").click(removerLinha);

  tbody.prepend(row);  
}

function removerLinha(){
  event.preventDefault();
  $(this).parent().parent().remove();  
}  

function rows(nome, score){
  let tr = $("<tr>");
  let user = $("<td>").text(nome);
  let pontos = $("<td>").text(score);  
  
  let columnRemove = $("<td>");
  let link = $("<a>").addClass("btn-remover").attr('href', '#');
  let icon = $("<i>").addClass('small').addClass('material-icons')
  .text('delete');

  link.append(icon);
  columnRemove.append(link);

  tr.append(user);
  tr.append(pontos);
  tr.append(columnRemove);

  return tr;
  
}