import pic1 from '../assets/template-1.png'
import pic2 from '../assets/template-2.png'
import pic3 from '../assets/template-3.png'
import pic4 from '../assets/template-4.png'
import pic5 from '../assets/template-5.png'
import $ from 'jquery';


export const imgDetails = [
    {
      id: "1",
      url: pic1,
    },
    {
      id: "2",
      url: pic2,
    },
    {
      id: "3",
      url: pic3,
    },
    {
      id: "4",
      url: pic4,
    },
    {
      id: "5",
      url: pic5,
    },
  ];

export default function Templates({setId}) {


    const onClickhandler = (id) => {

        setId(id)

        document.getElementById('edit-modal-btn').click()

        
    }

    return (
        <div className="container text-center">
        <div className="row">
          {imgDetails.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <div className="card" onClick={() => onClickhandler(item.id)}>
                  <img src={item.url} className="card-img-top" alt="..." />
                  <label className='card-text'>Click to edit</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
}