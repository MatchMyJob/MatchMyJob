function GenerarAside() {
    const asidecontainer = document.createElement('div');
    asidecontainer.className = 'aside-div-container';
    const newaside = document.createElement('div');
    newaside.className = 'sidebar';
    newaside.innerHTML = `
        <img src="./Images/dp.jpg" alt="" />
  
        <div class="profile">
          <a href="#">Giuliano Mendoza</a>
          <small>Estudiante de Ingeniería informática
            TRAER DEL BACKEND LA DESCRIPCION DEL APLICANTE
          </small>
          <hr id="profile">
        </div>
        <div class="view">
            <div class="views">
                <h6>STUDY DEL APLICANTE DEL BACKEND</h6>
            </div>
            <div class="views">
                <h6>ESTADO DESDE EL BACKEND</h6>
            </div>
            <hr id="view">
        </div>
        <div class="items">
          <i class="fa-solid fa-bookmark"></i>
          <h6>Mis cosas</h6>
        </div>`;
    const asidestudy = document.createElement('div');
    asidestudy.className = 'recent_jobs';
    asidestudy.innerHTML = `<div class="recent">
                                <h6>Estudios recientes</h6>
                                <div class="one">
                                    <i class="fa-solid fa-book"></i>
                                    <h6>Crear DINAMICAMENTE LOS STUDIO SEGUN BACKEND</h6>
                                </div>
                            </div>`;
    asidecontainer.appendChild(newaside);
    asidecontainer.appendChild(asidestudy);
    return asidecontainer;
}
const contenedor = document.querySelector('.aside-container');
const Aside = GenerarAside();
contenedor.appendChild(Aside);