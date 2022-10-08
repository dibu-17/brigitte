'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const jsjsjs = () => {
    alert('😱 Sabía que aceptarías jsjsa');
    alert('Escucha esta rolita como muestra de mi agradecimiento uwu');
    location.href = 'https://www.youtube.com/watch?v=DwrfWnqWO9U';
  };

  const nel = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('Escríbeme your nombre jsjs');
  heroTitle.innerHTML += partner + ' 🙌';

  heroButtonSi.addEventListener('click', jsjsjs);
  heroButtonNo.addEventListener('mouseover', nel);
};

document.addEventListener('DOMContentLoaded', documentReady);