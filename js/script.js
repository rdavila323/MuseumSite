function getTemplateHTML(el, url) {
    fetch(url)
      .then(res => res.text())
      .then(res => el.innerHTML = res);
  }

const navbar = document.getElementById('navbar');
getTemplateHTML(navbar, 'html/navbar.html');

if (document.getElementById('carousel-sites')) {
  const carouselSites = document.getElementById('carousel-sites');
  getTemplateHTML(carouselSites, 'html/carousel.html')
}

if (document.getElementById('art-piece')) {
  const artPiece = document.getElementById('art-piece');
  getTemplateHTML(artPiece, 'html/artpiece.html')
}
if (document.getElementById('about-us')) {
  const ourMission = document.getElementById('about-us');
  getTemplateHTML(ourMission, 'html/ourmission.html')
}
if (document.getElementById('footer')) {
  const ourFooter = document.getElementById('footer');
  getTemplateHTML(ourFooter, 'html/footer.html')
}




//actual example------------------
function getMuseumsCards() {
  const museums = document.getElementById('museums');

  fetch('js/data.json')
    .then(res => res.json())
    .then(res => {
      //console.log(res);
      let htmlMuseums = '';

      res.museumsCards.forEach(function (card) {
        htmlMuseums += `
      <article class="col-11 col-sm-3 ml-1 mr-1">
        <a class="text-white text-center" >
           <p>${card.section}</p>
           <h1>${card.name}</h1>
        </a>
        
        <div class="card mb-3 text-center" col-lg-3>
          
          <img src="${card.img}" class="card-img-top rounded" alt="${card.name}">
           <div class="card-body text-white" style="background-color:black">
             <h5 class="card-title">${card.openingHours}</h5>
             <p class="card-text">${card.description}</p>
           <div> 
               <a href="#" data-toggle="modal" data-target="#${card.modal}">Location</a>
           </div>
          
          </div>
        </div>

           
            <div class="modal fade" id="${card.modal}" tabindex="-1" role="dialog" aria-labelledby="${card.modal}" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content text-white border-white" style="background-color:black">
                  <div class="modal-header">
                    <h5 class="modal-title" id="${card.modal}">
                    <iframe src="${card.link}" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>${card.name}</p>
                  </div>
                </div>
              </div>
            </div>
       

        </article>    
        `
      })

      museums.innerHTML = htmlMuseums;
    })
}

if (document.getElementById('museums')) {
  getMuseumsCards();
}

//communication

function getCommunicationCards() {
  const communication = document.getElementById('communication');

  fetch('js/data.json')
    .then(res => res.json())
    .then(res => {
      //console.log(res);
      let htmlCommunication = '';

      res.communicationCards.forEach(function (card) {
        htmlCommunication += `
        <article class="col-11 col-md-3 ml-2 mr-2">
          <div class="card text-white mb-3" style="background-color:black" col-lg-3>
           <div class="card-body bg-black">
         <h5 class="card-title">${card.title}</h5>
         <br>
          <p class="card-text">${card.message}</p>
          <img src="${card.communi}" class="card-img-top rounded" alt="${card.communi-name}">
        </div>
            </div>
        </article>    
        `
      })

      communication.innerHTML = htmlCommunication;
    })
}

window.addEventListener('scroll', e => {
  console.log(window.pageXOffset, window.pageYOffset);

  if (window.pageYOffset >= 90) {
    $('.navbar').addClass('bg-red')
  } else {
    $('.navbar').removeClass('bg-red')
  }
});

if (document.getElementById('communication')) {
  getCommunicationCards();
}

$('.navbar-nav>li>a' ).on('click', () =>{
  $('.navbar-collapse').collapse('hide')
});

