function renderResume() {
    const article = document.createElement('article');
    article.className = 'formulario_cv'
    article.innerHTML = `
            <div class="main-content">
                <div class="boxx">
                    <div class="form_fields form_header">
                        <div class="photo_user">
                            <img src="/Images/dp.jpg" alt="NOMBREDELBACKEND" class="user-photo" />
                        </div>
                        <div class="info_user">
                            <div class="user-info">
                                <p class="user-name">NOMBRE DEL BACKEND</p>
                                <p class="user-region">DE DONDE ES BACKEND</p>
                            </div>
                            <ul class="user-contact">
                                <li class="cols">
                                    <span class="user-mail-icon"><i class="fa-regular fa-envelope"></i><span
                                            class="user-mail"> CORREO CON EL QUE SE REGISTRO </span></span>

                                </li>
                                <li class="cols">
                                    <span class="user-phone-icon"><i class="fa-solid fa-phone"></i><span
                                            class="user-phone"> TELEFONO ADICIONAL </span></span>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="user-form">
                        <div class="dFlex">
                            <p class="title_cv">Descripción</p>
                            <a class="lapiz-icon"><i class="fa-solid fa-pencil"></i></a>
                        </div>
                        <p>Descripción traida del back cuando termina de escribirla en el front</p>
                        <div class="lamparita-icon"><i class="fa-regular fa-lightbulb"></i>
                            Una descripción bien detallada y extensa de tu perfil profesional te ayudará a destacar
                            entre otros
                            candidatos.
                        </div>
                    </div>
                    <div class="user-form">
                        <p class="title_cv">Mis experiencias profesionales</p>
                        <ul id="experiences-container" class="list_timeline">
                            <li>
                                <div class="w100 dFlex">
                                    <div>
                                        <p class="fs15">SI TUVIESE EXP DEL BACK</p>
                                        <p class="fc80">NOMBRE DE LA EMPRESA DESDE EL BACKEND</p>
                                        <p><span>DESCRIPCION DEL PUESTO EN EL QUE TRABAJO DESDE EL BACKEND.</span></p>
                                        <p class="fc80 mt5">FECHA DE INICIO - FIN DEL BACKEND</p>
                                    </div>
                                    <a class="lapiz-edit"><span class="lapiz-icon"><i
                                                class="fa-solid fa-pencil"></i></span></a>
                                </div>
                            </li>
                            <li id="add-experience-container">
                                <div class="w100 dFlex">
                                    <Button class="btn">AÑADIR MÁS EXPERIENCIAS</Button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="user-form">
                        <div class="dFlex">
                            <p class="title_cv">Mis estudios</p>
                            <a class="lapiz-edit"><span class="lapiz-icon"><i class="fa-solid fa-pencil"></i></span></a>
                        </div>
                        <ul class="list_timeline">
                            <li>
                                <div class="w100 dFlex">
                                    <div>
                                        <p class="fs15">TIPO DE ESTUDIO DESDE EL BACK</p>
                                        <p class="fc80">DONDE ESTUDIO DESDE EL BACK</p>
                                        <p class="fc80 mt5">FECHA DE INICIO - FIN DEL BACKEND</p>
                                    </div>
                                </div>
                            </li>
                            <li id="add-education-container">
                                <div class="w100 dFlex">
                                    <Button class="btn">AÑADIR MÁS ESTUDIOS</Button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="Skills" class="user-form">
                        <div class="dFlex">
                            <p class="title_cv">Skills</p>

                        </div>
                        <div>
                            <span class="item_tag">NOMBRE DE LA SKILL TRAIDA DEL BACKEND.<a class="delete-edit"><span class="delete-icon"><i
                                class="fa-solid fa-xmark"></i></span></a></span>
                        </div>
                        <Button class="btn">AÑADIR NUEVA SKILL</Button>
                    </div>
                </div>
            </div>
            <aside class="sidebar">
                <section class="formulario_lateral">
                    <h3 class="fs20 mb0">MIS POSTULACIONES</h3>
                    <ul class="list_timeline">
                        <li>
                            <div class="postulaciones">
                                <p class="fs20-">POSTULACION 1 DESDE EL BACK</p><span class="post-estado">ESTADO</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </aside>
    `;
    return article;
}
const contenedor = document.querySelector('.container');
const resume = renderResume();
contenedor.appendChild(resume);