function RenderSidebar() {
    const jobsListDiv = document.createElement('div');
    jobsListDiv.className = 'sidebar';
    jobsListDiv.innerHTML =`
               <ul>
               <li class="ember-view">
                <div class="ember-views">
                <div class="ember-img">
                    <img src="/Images/google.png" alt="">
                </div>
                <div class="ember-jobs">
                    <a href="#">TRAIDO DEL BACKEND</a> <i class="fa-solid fa-check-double"></i>
                    <div class="ember-span">
                        <span>TRAIDO DEL BACKEND</span>
                    </div>
                    <div class="ember-p">
                        <p>TRAIDO DEL BACKEND</p>
                    </div>
                </div>
                <div id="close"><i class="fa-solid fa-xmark"></i></div>                
            </div>
            </li>
        `;
    return jobsListDiv;
}
const contenedor = document.getElementById('asidebar');
const jobsList = RenderSidebar();
contenedor.appendChild(jobsList);
