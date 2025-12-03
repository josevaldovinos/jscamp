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
const jobsListingSection = document.querySelector('.jobs-listings');

jobsListingSection.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});
