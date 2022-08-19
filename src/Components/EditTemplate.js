import { useEffect, useState } from "react"
import { imgDetails } from "./Templates"


export default function EditTemplate({id,setId}) {

    const selectedTemplate = imgDetails.filter((template) => template.id===id)

    const [offerheader,setOfferheader] = useState(null);

    const [offerDiscount,setOfferDiscount] = useState(null);


    useEffect(() => {

        const header = document.getElementById('offer-header');
        const disc =  document.getElementById('offer-discount');


        header.style.top='100px'
        header.style.left='200px'


        disc.style.top='200px'
        disc.style.left='200px'


        let initialX,initialY,finalX,finalY;
        

        document.addEventListener('dragend',(ev) => {


            finalX=ev.clientX;
            finalY=ev.clientY;
            
            console.log(header.style.top,header.style.left)

            let top= finalX - initialX + parseInt(header.style.top);
            let left = finalY - initialY + parseInt(header.style.left);
            
            ev.target.style.top = top + 'px'

            ev.target.style.left = left + 'px'


            console.log(header.style.top,header.style.left)

            ev.stopImmediatePropagation();

        })

        document.addEventListener('dragstart',(ev) => {

            initialX=ev.clientX
            initialY=ev.clientY

        })

    },[])

    return (
        <div>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id='edit-modal-btn'
        style={{display:'none'}}
      >
        Launch demo mo
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-9" id='img-edit-container'>
                    <img width="100%" height="100%" src={selectedTemplate[0] && selectedTemplate[0].url} />
                    <h1 id="offer-header" draggable="true">{offerheader}</h1>
                    <h3 id="offer-discount" draggable="true">{offerDiscount}</h3>
                  </div>
                  <div className="col-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Offer header
                    </label>
                    <input
                     onChange={(ev) => setOfferheader(ev.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="enter offer header"
                    />

                     <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                    >
                      Offer discount
                    </label>
                    <input

onChange={(ev) => setOfferDiscount(ev.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="enter offer discount"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}