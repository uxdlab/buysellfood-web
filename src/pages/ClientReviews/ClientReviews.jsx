import React, { useState } from 'react'
import './ClientReviews.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const ClientReviews = () => {

    const clients = [
        {
          name: 'John Cena',
          title: 'CEO & Co-Founder',
          image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium saepe ipsam...'
        },
        {
          name: 'Jane Doe',
          title: 'CTO',
          image: 'https://uxwing.com/wp-content/uploads/2020/12/female-avatar.png',
          description: 'Quis cupiditate nam in sapiente fuga dignissimos qui aspernatur debitis veritatis...'
        },
        {
          name: 'Mike Ross',
          title: 'Head of Marketing',
          image: 'https://uxwing.com/wp-content/uploads/2020/12/male-avatar.png',
          description: 'Illo aliquam, iusto quam animi corrupti, repellendus repudiandae commodi, modi qui...'
        }
      ];
    
      const [currentClient, setCurrentClient] = useState(0);
    
      const handleNext = () => {
        setCurrentClient((prevClient) => (prevClient + 1) % clients.length);
      };
    
      const handlePrev = () => {
        setCurrentClient((prevClient) => (prevClient - 1 + clients.length) % clients.length);
      };

  return (
    <div className="client-container">
    <h2 style={{textAlign:'center',fontWeight:'bold',marginTop:'20px'}}>Our Happy Client Says</h2>
    <div className='client'>

                        
            <div className="client-first">
                <div className="client-profile">
                  <img
                    style={{ width: '74px', height: '74px', borderRadius: '50%' }}
                    src={clients[currentClient].image}
                    alt="client"
                  />
                  <div className="client-name-container">
                    <h5>{clients[currentClient].name}</h5>
                    <p>{clients[currentClient].title}</p>
                  </div>
                </div>
                <div className="client-description">
                  {clients[currentClient].description}
                </div>

                <div className="client-btn-left" style={{ left: '-20px' }} onClick={handlePrev}>
                  <MdKeyboardArrowLeft style={{ fontSize: '2rem',color:'white' }} />
                </div>
                <div className="client-btn-right" style={{ right: '-20px' }} onClick={handleNext}>
                  <MdKeyboardArrowRight style={{ fontSize: '2rem',color:'white' }} />
                </div>
              </div>



        <div className="client-second">
            <div className="food-img">
            <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"} alt="" />
            </div>
        </div>
    </div>
  </div>
  )
}

export default ClientReviews