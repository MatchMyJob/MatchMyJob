function RenderOffert() { 
    const renderoffer = document.createElement('div');
    renderoffer.className = 'main_section';
    renderoffer.innerHTML =`<div id="close"><i class="fa-solid fa-xmark"></i></div>
                <div class="box">
                    <div class="content">
                        <div class="ember-job-det">
                            <div class="ember-img">
                                <img src="/Images/google.png" alt="">
                                <span>TRAIDO DEL BACKEND</span>
                            </div>
                            <div class="ember-jobs">
                                <div class="ember-a">
                                    <a href="#">TRAIDO DEL BACKEND </a>
                                </div>
                            </div>                  
                            <div class="ember-location">
                                <p>TRAIDO DEL BACKEND </p>
                            </div>
                        </div>
                            <div class="information">
                                <ul>
                                    <li class="job-details">
                                        <div class="icon">
                                            <i class="fa-solid fa-bag-shopping"></i>
                                        </div>
                                        <span>
                                            <span class="job-modality">
                                                TRAIDO DEL BACKEND
                                            </span>
                                            <span class="job-jornada">
                                                TRAIDO DEL BACKEND
                                            </span>
                                        </span>
                                    </li>
                                    <li class="job-details">
                                        <div class="icon">
                                            <i class="fa-solid fa-building"></i>
                                        </div>
                                        <span>
                                            <span class="company-info">
                                                Más de N°(traido del back) empleados · Desarrollo de software(traido del back)
                                            </span>
                                        </span>
                                    </li>
                                    <li class="job-details">
                                        <div class="icon">
                                            <i class="fa-solid fa-list-check"></i>
                                        </div>
                                        <span>
                                            <span class="aplicant-info">
                                                Aptitudes: TRAIDAS DEL BACKEND
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <button class="btn">Aplicar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submain_section">
                    <article class="jobs-description">
                        <div class="description-title">
                            <h2>Acerca del empleo</h2>
                            <div class="description">
                                TRAIDO DEL BACKEND
                                <span><br></span>
                                <span><br></span>
                                TRAIDO DEL BACKEND
                                <span><br></span>
                                <span><br></span>
                                TRAIDO DEL BACKEND
                                <span class="space-pre"></span>
                                <span><strong> TRAIDO DEL BACKEND</strong></span>
                                <span><br></span>
                                <span><br></span>
                                Que vas a hacer
                                <span><br></span>
                                <span><br></span>
                                <span>
                                    <ul>
                                        <span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>CTRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span>
                                    </ul>
                                </span>
                                <span><br></span>
                                <span><br></span>
                                Requisitos:
                                <span><br></span>
                                <span><br></span>
                                <span>
                                    <ul>
                                        <span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span>
                                    </ul>
                                </span>
                                <span><br></span>
                                <span><br></span>
                                Beneficios:
                                <span><br></span>
                                <span><br></span>
                                <span>
                                    <ul>
                                        <span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span><span>
                                            <li>TRAIDO DEL BACKEND</li>
                                        </span>
                                    </ul>
                                </span>
                            </div>
                        </div>

                    </article>`;
    return renderoffer;

}
const contenedor = document.getElementById('main_section');
const renderofferts = RenderOffert();
contenedor.appendChild(renderofferts);