import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewCard = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <img src=${obj.image} alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="edit-card-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-card--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title}'<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     <p>${obj.description || ''}</p>
     <hr>   
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewCard;
