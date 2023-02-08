//ativar os links do menu
const links = document.querySelectorAll(".header__menu a")

links.forEach(function ativar_link(item){
  const url = location.href
  const href = item.href

  if(url.includes(href)){
    item.classList.add("ativo")
  }
})

//ativar itens do orçamento
const parametros = new URLSearchParams(location.search)

parametros.forEach(function(item){
  const elemento = document.getElementById(item)
  if(elemento){
    elemento.checked = true
  }
})
