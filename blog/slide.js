function manejarDesplazamiento() {
    var subtemas = document.querySelectorAll('.subtema');
    subtemas.forEach(function(subtema) {
      var rect = subtema.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        subtema.classList.add('destacado');
      } else {
        subtema.classList.remove('destacado');
      }
    });
  } 
  window.addEventListener('scroll', manejarDesplazamiento);
  manejarDesplazamiento();