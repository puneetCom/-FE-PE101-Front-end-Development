function hover(element, className){
    element.addEventListener('mouseenter', e => element.classList.add('active'))
    element.addEventListener('mouseleave', e => element.classList.remove('active'))
  }

  hover(document.querySelector('li'), "active");