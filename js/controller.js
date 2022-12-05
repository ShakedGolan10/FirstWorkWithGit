'use strict'



function init() {
    renderClicksFunctions()
    createPortfolios()
}

function renderClicksFunctions() {
    console.log(`hello`)
}

function renderPortfolios() {
    var portfolios = getPortolios()
    var modalNum = 0
    var strHTMLs = portfolios.map(portfolio => {`
    <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${modalNum++}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${modalNum++}-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${portfolio.name}</h4>
            <p class="text-muted">${portfolio.lables}</p>
          </div>
        </div>
    `})

    $(`.portfolios`).html(strHTMLs)
}




















































// portfolio => `
//     <div class="portfolio-modal modal fade" id="${modalNum++}" tabindex="-1" role="dialog" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="close-modal" data-dismiss="modal">
//           <div class="lr">
//             <div class="rl"></div>
//           </div>
//         </div>
//         <div class="container">
//           <div class="row">
//             <div class="col-lg-8 mx-auto">
//               <div class="modal-body">
                
//                 <h2>${portfolio.name}</h2>
//                 <p class="item-intro text-muted">${portfolio.title}</p>
//                 <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
//                 <p>${portfolio.desc}</p>
//                 <ul class="list-inline">
//                   <li>${portfolio.createdAt}</li>
//                   <li>Client: Coding Academy</li>
//                   <li>Category: ${portfolio.labels}</li>
//                 </ul>
//                 <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     `)

//     $(`.`)