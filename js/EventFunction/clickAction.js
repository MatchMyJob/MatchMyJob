
export function offerClick() {
    const emberViews = document.querySelectorAll("ul .ember-view");
        emberViews.forEach(card => {
            card.addEventListener("click", function() {
                // Remover la clase 'active' de todas las tarjetas
                emberViews.forEach(card => {
                    card.classList.remove("active");
                });
    
                // Añadir la clase 'active' solo a la tarjeta clickeada
                this.classList.add("active");
            });
        });
}