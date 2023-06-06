document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('comprar');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        alert('O produto foi adicionado ao carrinho!');
      });
    }
  });