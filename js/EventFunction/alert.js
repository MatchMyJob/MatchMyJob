import { alertModal } from "../Components/alertModal/alertModal.js";

export const apiServiceFalledTitle = "Sistema caído";
export const apiServiceFalledDescription = "El servidor se encuentra fuera de servicio, por favor intente más tarde...";
export const applicationRegistered = "Se ha postulado exitosamente";
export const applicationRegisteredDescription = "Éxitos en el proceso..."
export const duplicatedApplication = "Ya has postulado a esta oferta anteriormente...";
export const error400 = "Ha ocurrido un error inesperado"
export const error400Description = "Por favor, intente de nuevo más tarde..."


export const createAlertModal = (title, description, optional) => {

  let modalContainer = document.getElementById("alertModalContainer");
  if (!modalContainer)
  {
    //Create Modal
    let containerModal = document.createElement("div");
    containerModal.classList.add("containerModal");
    containerModal.id = "alertModalContainer";
    let modal = alertModal(title, description, optional);
    containerModal.innerHTML=modal;
    //Open Modal
    document.body.appendChild(containerModal);
    //Close Modal
    closeAlertModal(containerModal); 
  }
}

const closeAlertModal = (modal) =>{

  modal.addEventListener("click", e => 
  {
    if(e.target.classList.contains("containerButton__button") || e.target.classList.contains("containerModal"))
    {
      modal.remove();
    }
  });
}