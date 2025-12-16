// FILTROS ---------------------------------------------------------------
const filterLocation = document.querySelector('#filter-location');
const mensaje = document.querySelector('#filter-selected-value');
const jobs = document.querySelectorAll('.job-listing-card');

filterLocation.addEventListener('change', () => {
    const jobs = document.querySelectorAll('.job-listing-card');

    const selectedValue = filterLocation.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = '';
    }

    jobs.forEach((job) => {
        // const modalidad = job.dataset.modalidad;
        const modalidad = job.getAttribute('data-modalidad');
        const isShown = selectedValue === '' || selectedValue === modalidad;

        job.classList.toggle('is-hidden', isShown === false);
    });
});
