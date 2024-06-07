function filterOffert() {
    const filterDiv = document.createElement('div');
    filterDiv.className = 'search-filter';
    filterDiv.innerHTML = `<ul class="search-filter">
        <li class="date">
            Fecha de publicación
            <ul class="dropdown-list">
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
            </ul>
        </li>
        <li class="level">
            Experiencia
            <ul class="dropdown-list">
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
            </ul>
        </li>
        <li class="company">
            Compañia
            <ul class="dropdown-list">
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
            </ul>
        </li>
        <li class="format">                        
            Modalidad
            <ul class="dropdown-list">
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
                <li>TRAIDO DEL BACKEND</li>
            </ul>
        </li>
    </ul>`;
    return filterDiv;
}

document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('filter');
    const filternav = filterOffert();
    contenedor.appendChild(filternav);

    const filterItems = document.querySelectorAll('.search-filter > ul > li');
    filterItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const dropdownList = item.querySelector('.dropdown-list');
            if (dropdownList) {
                if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
                    document.querySelectorAll('.dropdown-list').forEach(function(list) {
                        list.style.display = 'none';
                    });
                    dropdownList.style.display = 'block';
                } else {
                    dropdownList.style.display = 'none';
                }
            }
        });
    });
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-filter > ul > li')) {
            document.querySelectorAll('.dropdown-list').forEach(function(list) {
                list.style.display = 'none';
            });
        }
    });
});