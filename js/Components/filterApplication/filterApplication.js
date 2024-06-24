function filterApplication() {

    const filters = document.createElement('div');
    filters.classList = 'filter-container';
    filters.innerHTML = `
            <div id="applicationFilters" class="filters">
                    <button class="filter-button" value="">Todas tus postulaciones</button>
                    <button class="filter-button" value="1">Postulado</button>
                    <button class="filter-button" value="2">En proceso</button>
                    <button class="filter-button" value="3">Finalista</button>
                    <button class="filter-button" value="4">Proceso finalizado</button>
            </div>
        `
    return filters;
}

document.addEventListener('DOMContentLoaded', function() {
    const contenedorFiltros = document.getElementById('contenedorFiltros'); 
    const barraFiltros = filterApplication();
    contenedorFiltros.appendChild(barraFiltros);
})