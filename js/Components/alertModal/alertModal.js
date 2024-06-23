export const alertModal = (title, description, optional) => {
    return `
    <link rel="stylesheet" href="/js/Components/alertModal/alertModal.css">
    <div class="alertModal">
        <p class="alertModal__title">${title}</p>
        <p class="alertModal__description">${description}</p>
        ${optional ? `<p class="alertModal__optional">${optional}</p>` : ''}
        <div class="alertModal__containerButton containerButton">
            <button class="containerButton__button option">Aceptar</button>
        </div>
    </div>
    `;
};
