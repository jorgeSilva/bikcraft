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

//perguntas frequentes
const botao = document.querySelectorAll('.perguntas button')

function ativar_pergunta(e){
  const pergunta = e.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle("ativo")
  const ativa = resposta.classList.contains("ativo")
  pergunta.setAttribute('aria-expanded', ativa)
}

botao.forEach(function(item){
  item.addEventListener('click', ativar_pergunta)
})

//galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta__img img")
const galeria_container = document.querySelector(".bicicleta__img")

function trocar_img(e){
  const img = e.currentTarget
  const media = matchMedia('(min-width:940px)').matches
  if(media){
    galeria_container.prepend(img)
  }
}

galeria.forEach((item)=>{
  item.addEventListener('click', trocar_img)
})