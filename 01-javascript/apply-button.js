const jobsListingSection = document.querySelector('.jobs-listings');

jobsListingSection.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});

// Comentarios con otras Formas interesantes de añadir eventos a un elemento

// // 1ra forma: Recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job');
// console.log(boton); // null si no lo encuentra

// if (boton !== null) {
//     boton.addEventListener('click', () => {
//         boton.textContent = '¡Aplicado!';
//         boton.classList.add('is-applied');
//         boton.disabled = true;
//     });
// }

// // 2da Forma: Recupera todos los botones que encuentre
// const botones = document.querySelectorAll('.button-apply-job');
// // devuelve una NodeList (array-like) con todos los botones que encuentre
// // o una lista vacía si no encuentra ninguno

// botones.forEach((boton) => {
//     boton.addEventListener('click', () => {
//         boton.textContent = '¡Aplicado!';
//         boton.classList.add('is-applied');
//         boton.disabled = true;
//     });
// });

// 3er forma: Delegación de eventos
// const jobsListingSection = document.querySelector('.jobs-listings');

// jobsListingSection.addEventListener('click', (event) => {
//     const element = event.target;

//     if (element.classList.contains('button-apply-job')) {
//         element.textContent = '¡Aplicado!';
//         element.classList.add('is-applied');
//         element.disabled = true;
//     }
// });

// Ejemplos de otros eventos
// const filterLocation = document.querySelector('#filter-location');

// filterLocation.addEventListener('change', () => {
//     console.log(filterLocation.value);
// });

// const filterExperienceLevel = document.querySelector('#filter-experience-level');

// filterExperienceLevel.addEventListener('change', () => {
//     console.log(filterExperienceLevel.value);
// });

// const searchInput = document.querySelector('#empleos-search-input');

// searchInput.addEventListener('input', () => {
//     console.log(searchInput.value);
// });

// searchInput.addEventListener('blur', () => {
//     console.log('se dispara cuando el campo pierde el foco');
// });

// const searchForm = document.querySelector('#empleos-search-form');

// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // ... todo lo que quiero hacer cuando se envía el formulario
//     console.log('Submit');
// });

// document.addEventListener('keydown', function (event) {
//     console.log('Tecla presionada: ', event.key);
//     console.log('Esta pulsada la tcla Shift: ', event.shiftKey);
//     console.log('Esta pulsada la tcla Ctrl: ', event.ctrlKey);
//     console.log('Esta pulsada la tcla Alt: ', event.altKey);
// });
