const links = document.querySelectorAll(".header__menu a")

function ativar_link(item){
  const url = location.href
  const href = item.href

  if(url.includes(href)){
    item.classList.add("ativo")
  }
}

links.forEach(ativar_link)