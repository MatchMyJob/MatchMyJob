import { getCompanyByFilters } from "../../Service/companyQuery.js";

export function generateFilters() {
    const filters = document.createElement('div');
    filters.classList = 'filter-container';
    filters.innerHTML = `
    <link rel="stylesheet" href="/js/Components/header/navoffer.css">
    <link rel="stylesheet" href="/js/Components/filters/filters.css">
    <div class="filter">
        <div class="search-filter">
            <button id="empresaButton">Empresa <i class="fa fa-chevron-down"></i></button>
            <button id="ubicationButton">Ubicación <i class="fa fa-chevron-down"></i></button>
            <button id="dateButton">Fecha <i class="fa fa-chevron-down"></i></button>
            <button id="modeButton">Modalidad <i class="fa fa-chevron-down"></i></button>
            <button id="categoryButton">Categorias <i class="fa fa-chevron-down"></i></button>
            <button>Más <i class="fa fa-chevron-down"></i></button>
        </div>
    </div>

    <!-- Modales -->
    <div id="empresaModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-header">
                <input type="text" id="empresaSearch" placeholder="Buscar empresa...">
                <div id="empresaDropdown" class="dropdown"></div>
            </div>
            <div class="modal-body scrollable" id="empresaList">
                <!-- Lista de empresas seleccionadas -->
            </div>
            <div class="modal-footer">
                <button id="empresaApply" class="apply-button">Aplicar</button>
            </div>
        </div>
    </div>

    <div id="categoryModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-header">
                <input type="text" id="categorySearch" placeholder="Buscar categoria...">
                <div id="categoryDropdown" class="dropdown"></div>
            </div>
            <div class="modal-body scrollable" id="categoryList">
                <!-- Lista de categorias seleccionadas -->
            </div>
            <div class="modal-footer">
                <button id="categoryApply" class="apply-button">Aplicar</button>
            </div>
        </div>
    </div>

    <div id="ubicationModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-header">
                <input type="text" id="ubicationSearch" placeholder="Buscar provincia...">
                <div id="ubicationDropdown" class="dropdown"></div>
            </div>
            <div class="modal-body scrollable" id="ubicationList">
                <!-- Lista de provincias seleccionadas -->
            </div>
            <div class="modal-footer">
                <button id="ubicationApply" class="apply-button">Aplicar</button>
            </div>
        </div>
    </div>

    <div id="dateModal" class="modal">
        <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-header">
                    <label for="dateSelect">Fecha</label>
                </div>
                <div class="modal-body scrollable" id="dateList">
                    <div class="modal-item">
                        <input type="checkbox" value="" checked="">
                        <label>Alguna vez</label>
                    </div>
                    <div class="modal-item">
                        <input type="checkbox" value="1" checked="">
                        <label>Hace 24 horas</label>
                    </div>
                    <div class="modal-item">
                        <input type="checkbox" value="2" checked="">
                        <label>Hace una semana</label>
                    </div>
                    <div class="modal-item">
                        <input type="checkbox" value="3" checked="">
                        <label>Hace un mes</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="dateApply" class="apply-button">Aplicar</button>
                </div>
        </div>
    </div>

    <div id="modeModal" class="modal">
        <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-header">
                    <label for="modeSelect">Modalidad</label>
                </div>
                <div class="modal-body scrollable" id="modeList">
                    <div class="modal-item">
                        <input type="checkbox" value="3" checked="">
                        <label>Remoto</label>
                    </div>
                    <div class="modal-item">
                        <input type="checkbox" value="" checked="">
                        <label>Remoto y presencial</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="modeApply" class="apply-button">Aplicar</button>
                </div>
        </div>
    </div>
    `;
    return filters;
}

document.addEventListener('DOMContentLoaded', function() {
    const contenedorFiltros = document.getElementById('contenedorFiltros'); 
    const barraFiltros = generateFilters();
    contenedorFiltros.appendChild(barraFiltros);

    // Obtener botones y modales
    const empresaButton = document.getElementById('empresaButton');
    const categoryButton = document.getElementById('categoryButton');
    const ubicationButton = document.getElementById('ubicationButton');
    const dateButton = document.getElementById('dateButton');
    const modeButton = document.getElementById('modeButton');

    const empresaModal = document.getElementById('empresaModal');
    const categoryModal = document.getElementById('categoryModal');
    const ubicationModal = document.getElementById('ubicationModal');
    const dateModal = document.getElementById('dateModal');
    const modeModal = document.getElementById('modeModal');
    const closeButtons = document.getElementsByClassName('close');

    // Abrir modales
    empresaButton.onclick = function() {
        empresaModal.style.display = "block";
    }

    categoryButton.onclick = function() {
        categoryModal.style.display = "block";
    }

    ubicationButton.onclick = function() {
        ubicationModal.style.display = "block";
    }

    dateButton.onclick = function() {
        dateModal.style.display = "block";
    }

    modeButton.onclick = function() {
        modeModal.style.display = "block";
    }

    initializeModal('dateModal', 'selectedDate');
    initializeModal('modeModal', 'selectedMode');


    // Cerrar modales
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            closeButtons[i].parentElement.parentElement.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == empresaModal) {
            empresaModal.style.display = "none";
        } else if (event.target == categoryModal) {
            categoryModal.style.display = "none";
        } else if (event.target == ubicationModal) {
            ubicationModal.style.display = "none";
        } else if (event.target == dateModal) {
            dateModal.style.display = "none";
        } else if (event.target == modeModal) {
            modeModal.style.display = "none";
        }
    }

    // Aplicar filtros
    document.getElementById('empresaApply').onclick = function() {
        // Lógica para aplicar el filtro de empresa
        empresaModal.style.display = "none";
    }

    document.getElementById('categoryApply').onclick = function() {
        // Lógica para aplicar el filtro de categoria
        categoryModal.style.display = "none";
    }

    document.getElementById('ubicationApply').onclick = function() {
        // Lógica para aplicar el filtro de ubicación
        ubicationModal.style.display = "none";
    }

    document.getElementById('dateApply').onclick = function() {
        // Lógica para aplicar el filtro de fecha
        dateModal.style.display = "none";
    }

    document.getElementById('modeApply').onclick = function() {
        // Lógica para aplicar el filtro de modalidad
        modeModal.style.display = "none";
    }

    getSaveCategories();    //trae las categorias almacenadas en el local storage
    getSaveCompanies();
    getSaveProvinces();

    // Buscar empresas
    const empresaSearch = document.getElementById('empresaSearch');
    empresaSearch.addEventListener('input', async function() {
        const query = empresaSearch.value;
        if (query.length > 2) {
            const companies = await getCompanyByFilters(query, null, null);
            updateDropdown(companies.result.data);
        } else {
            document.getElementById('empresaDropdown').innerHTML = '';
        }
    });

    // Buscar provincias
    const ubicationSearch = document.getElementById('ubicationSearch');
    ubicationSearch.addEventListener('input', async function() {
        const query = ubicationSearch.value;
        if (query.length > 2) {
            const ubications = await provinceList();
            updateDropdownProvince(ubications);
        } else {
            document.getElementById('ubicationDropdown').innerHTML = '';
        }
    });

    // Buscar categorias
    const categorySearch = document.getElementById('categorySearch');
    categorySearch.addEventListener('input', async function() {
        const query = categorySearch.value;
        if (query.length > 2) {
            const categories = await categoriesList();
            updateDropdownCategory(categories);
        } else {
            document.getElementById('categoryDropdown').innerHTML = '';
        }
    });

    document.addEventListener('change', function(event) {
        if (event.target.name === 'company') {
            if (event.target.checked) {
                saveToLocalStorage('selectedCompanies', event.target.value);
            } else {
                removeFromLocalStorage('selectedCompanies', event.target.value);
                removeFromLocalStorage('empresaLabels', event.target)
            }
        }

        if (event.target.name === 'ubication') {
            if (event.target.checked) {
                saveToLocalStorage('selectedProvinces', event.target.value);
            } else {
                removeFromLocalStorage('selectedProvinces', event.target.value);
                removeFromLocalStorage('ubicationLabels', event.target)
            }
        }
    
        if (event.target.name === 'category') {
            if (event.target.checked) {
                saveToLocalStorage('selectedCategories', event.target.value);
            } else {
                removeFromLocalStorage('selectedCategories', event.target.value);
                removeFromLocalStorage('categoryLabels', event.target)
            }
        }
    });
    

    

    function updateDropdown(companies) {
            let empresaDropdown = document.getElementById('empresaDropdown');
            empresaDropdown.innerHTML = '';
            (companies).forEach(company => {
                const dropdownItem = document.createElement('div');
                dropdownItem.classList.add('dropdown-item');
                dropdownItem.textContent = company.businessName;
                dropdownItem.onclick = function() {
                    addCompanyToList(company);
                    empresaDropdown.innerHTML = '';
                    empresaSearch.value = '';
                };
                empresaDropdown.appendChild(dropdownItem);
            });        
    }

    function updateDropdownProvince(provinces) {
        let ubicationDropdown = document.getElementById('ubicationDropdown');
        ubicationDropdown.innerHTML = '';
        (provinces).forEach(ubication => {
            const dropdownItem = document.createElement('div');
            dropdownItem.classList.add('dropdown-item');
            dropdownItem.textContent = ubication.name;
            dropdownItem.onclick = function() {
                addUbicationToList(ubication);
                ubicationDropdown.innerHTML = '';
                ubicationSearch.value = '';
            };
            ubicationDropdown.appendChild(dropdownItem);
        });        
    }
    
    function updateDropdownCategory(categories) {
        let categoryDropdown = document.getElementById('categoryDropdown');
        categoryDropdown.innerHTML = '';
        (categories).forEach(category => {
            const dropdownItem = document.createElement('div');
            dropdownItem.classList.add('dropdown-item');
            dropdownItem.textContent = category.name;
            dropdownItem.onclick = function() {
                addCategoryToList(category);
                categoryDropdown.innerHTML = '';
                categorySearch.value = '';
            };
            categoryDropdown.appendChild(dropdownItem);
        });        
    }

    function addCompanyToList(company) {
        const empresaList = document.getElementById('empresaList');
        
        if (![...empresaList.querySelectorAll('label')].some(label => label.textContent === company.businessName)) {
            const listItem = document.createElement('div');
            listItem.classList.add('modal-item');
            let empresaLabel = `
                <input type="checkbox" name="company" value="${company.companyId}" checked>
                <label>${company.businessName}</label>
                <span class="remove-company" style="cursor: pointer; color: #aaa; font-size: 20px; line-height: 1; padding: 5px;">&times;</span>
            `;
            listItem.innerHTML = empresaLabel;
            empresaList.appendChild(listItem);
            saveToLocalStorage('selectedCompanies', company.companyId);

            // evento para remover la empresa
            listItem.querySelector('.remove-company').onclick = function() {
                listItem.remove();
                removeFromLocalStorage('selectedCompanies', company.companyId);
                removeFromLocalStorage('empresaLabels', listItem.outerHTML);
            };
            saveToLocalStorage('empresaLabels', listItem.outerHTML);
        }
    }

    function addUbicationToList(ubication) {
        const ubicationList = document.getElementById('ubicationList');

        if (![...ubicationList.querySelectorAll('label')].some(label => label.textContent === ubication.name)) {
            const listItem = document.createElement('div');
            listItem.classList.add('modal-item');
            let ubicationLabel = `
                <input type="checkbox" name="ubication" value="${ubication.id}" checked>
                <label>${ubication.name}</label>
                <span class="remove-ubication" style="cursor: pointer; color: #aaa; font-size: 25px; line-height: 1; padding: 5px;">&times;</span>
                `;
            listItem.innerHTML = ubicationLabel;
            ubicationList.appendChild(listItem);
            saveToLocalStorage('selectedProvinces', ubication.id);

            // evento para remover la provincia
            listItem.querySelector('.remove-ubication').onclick = function() {
                listItem.remove();
                removeFromLocalStorage('selectedProvinces', ubication.id);
                removeFromLocalStorage('ubicationLabels', listItem.outerHTML);
            };
            saveToLocalStorage('ubicationLabels', listItem.outerHTML);
        }
    }

    function addCategoryToList(category) {
        const categoryList = document.getElementById('categoryList');

        if (![...categoryList.querySelectorAll('label')].some(label => label.textContent === category.name)) {
            const listItem = document.createElement('div');
            listItem.classList.add('modal-item');
            let categoryLabel = `
                <input type="checkbox" name="category" value="${category.id}" checked>
                <label>${category.name}</label>
                <span class="remove-category" style="cursor: pointer; color: #aaa; font-size: 25px; line-height: 1; padding: 5px;">&times;</span>
                `;
            listItem.innerHTML = categoryLabel;
            categoryList.appendChild(listItem);
            saveToLocalStorage('selectedCategories', category.id);

            // evento para remover la categoria
            listItem.querySelector('.remove-category').onclick = function() {
                listItem.remove();
                removeFromLocalStorage('selectedCategories', category.id);
                removeFromLocalStorage('categoryLabels', listItem.outerHTML);
            };
            saveToLocalStorage('categoryLabels', listItem.outerHTML);
        }
    }
});



function getSaveCompanies() {
    const empresaList = document.getElementById('empresaList');
    let empresas = JSON.parse(localStorage.getItem('empresaLabels'));
    if (empresas) {
        empresas.forEach(empresa => {
            empresaList.innerHTML += empresa;
        });

        //evento de eliminación a cada elemento cargado
        empresaList.querySelectorAll('.remove-company').forEach(button => {
            button.onclick = function() {
                const listItem = button.parentElement;
                listItem.remove();
                const empresaId = listItem.querySelector('input[name="company"]').value;
                removeFromLocalStorage('selectedCompanies', empresaId);
                removeFromLocalStorage('empresaLabels', listItem.outerHTML);
            };
        });
    }
}


function getSaveProvinces() {
    const ubicationList = document.getElementById('ubicationList');
    let ubications = JSON.parse(localStorage.getItem('ubicationLabels'));
    if (ubications) {
        ubications.forEach(ubication => {
            ubicationList.innerHTML += ubication;
        });

        //evento de eliminación a cada elemento cargado
        ubicationList.querySelectorAll('.remove-ubication').forEach(button => {
            button.onclick = function() {
                const listItem = button.parentElement;
                listItem.remove();
                const ubicationId = listItem.querySelector('input[name="ubication"]').value;
                removeFromLocalStorage('selectedProvinces', ubicationId);
                removeFromLocalStorage('ubicationLabels', listItem.outerHTML);
            };
        });
    }
}


function getSaveCategories() {
    const categoryList = document.getElementById('categoryList');
    let categories = JSON.parse(localStorage.getItem('categoryLabels'));
    if (categories) {
        categories.forEach(category => {
            categoryList.innerHTML += category;
        });

        //evento de eliminación a cada elemento cargado
        categoryList.querySelectorAll('.remove-category').forEach(button => {
            button.onclick = function() {
                const listItem = button.parentElement;
                listItem.remove();
                const categoryId = listItem.querySelector('input[name="category"]').value;
                removeFromLocalStorage('selectedCategories', categoryId);
                removeFromLocalStorage('categoryLabels', listItem.outerHTML);
            };
        });
    }
}




function saveToLocalStorage(key, value) {
    let items = JSON.parse(localStorage.getItem(key)) || [];
    if (!items.includes(value)) {
        items.push(value);
        localStorage.setItem(key, JSON.stringify(items));
    }
}

function removeFromLocalStorage(key, value) {
    let items = JSON.parse(localStorage.getItem(key)) || [];
    items = items.filter(item => item !== value);
    localStorage.setItem(key, JSON.stringify(items));
}


function handleCheckboxSelection(modalId, storageKey) {
    const checkboxes = document.querySelectorAll(`#${modalId} input[type="checkbox"]`);
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => cb !== this && (cb.checked = false));
                localStorage.setItem(storageKey, this.value);
            } else {
                localStorage.removeItem(storageKey);
            }
        });
    });
}

function loadSelectedCheckbox(modalId, storageKey) {
    const checkboxes = document.querySelectorAll(`#${modalId} input[type="checkbox"]`);
    const savedValue = localStorage.getItem(storageKey);
    if (savedValue) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = checkbox.value === savedValue;
        });
    }
}

function initializeModal(modalId, storageKey) {
    loadSelectedCheckbox(modalId, storageKey);
    handleCheckboxSelection(modalId, storageKey);
}

export const categoriesList = async () => {
    return [
        { "id": "1", "name": "Diseño y Desarrollo" },
        { "id": "2", "name": "Comercial, Ventas y Negocios" },
        { "id": "3", "name": "Administración, Contabilidad y Finanzas" },
        { "id": "4", "name": "Ingenierías" },
        { "id": "5", "name": "Tecnología, Sistemas y Telecomunicaciones" },
        { "id": "6", "name": "Secretarias y Recepción" },
        { "id": "7", "name": "Oficios y Otros" },
        { "id": "8", "name": "Gastronomía y Turismo" },
        { "id": "9", "name": "Abastecimiento y Logística" },
        { "id": "10", "name": "Atención al Cliente, Call Center y Telemarketing" },
        { "id": "11", "name": "Recursos Humanos y Capacitación" },
        { "id": "12", "name": "Salud, Medicina y Farmacia" },
        { "id": "13", "name": "Producción y Manufactura" },
        { "id": "14", "name": "Legales" },
        { "id": "15", "name": "Aduana y Comercio Exterior" },
        { "id": "16", "name": "Ingeniería Civil y Construcción" },
        { "id": "17", "name": "Seguros" },
        { "id": "18", "name": "Gerencia y Dirección General" },
        { "id": "20", "name": "Comunicación y Relaciones Públicas" },
        { "id": "21", "name": "Educación, Docencia e Investigación" },
        { "id": "22", "name": "Departamento Tecnico" },
        { "id": "23", "name": "Enfermería" },
        { "id": "24", "name": "Minería, Petróleo y Gas" },
        { "id": "25", "name": "Naviero, Maritimo, Portuario" },
        { "id": "26", "name": "Marketing y Publicidad" }
    ];
};



export const provinceList = async () => {
    return [
        { "id": "2", "name": "Ciudad Autónoma de Buenos Aires" },
        { "id": "6", "name": "Buenos Aires" },
        { "id": "10", "name": "Catamarca" },
        { "id": "14", "name": "Cordoba" },
        { "id": "18", "name": "Corrientes" },
        { "id": "22", "name": "Chaco" },
        { "id": "26", "name": "Chubut" },
        { "id": "30", "name": "Entre Rios" },
        { "id": "34", "name": "Formosa" },
        { "id": "38", "name": "Jujuy" },
        { "id": "42", "name": "La Pampa" },
        { "id": "46", "name": "La Rioja" },
        { "id": "50", "name": "Mendoza" },
        { "id": "54", "name": "Misiones" },
        { "id": "58", "name": "Neuquen" },
        { "id": "62", "name": "Rio Negro" },
        { "id": "66", "name": "Salta" },
        { "id": "70", "name": "San Juan" },
        { "id": "74", "name": "San Luis" },
        { "id": "82", "name": "Santa Fe" },
        { "id": "90", "name": "Tucuman" },
        { "id": "94", "name": "Tierra Del Fuego" }
      ];          
}