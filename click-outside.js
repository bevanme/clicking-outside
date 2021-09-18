const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const imgDesc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    modalInner.innerHTML = `<img src="${imgSrc.replace('200','600')}" alt="${name}" />
                            <p>${imgDesc}</p>`;
    modalOuter.classList.add('open');
}

cardButtons.forEach((button) => 
    button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) modalOuter.classList.remove('open');
});