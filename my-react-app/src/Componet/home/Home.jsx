import React from 'react'
import homeimage from '../../assets/image/sofa1731948703.jpg'
import './home.css'
function Home() {
  return (
    <div>
        <div className="home-container">
            <div className="home-internal">
                {/* home left side */}
                <div className="home-left">
                    <div className="left-titile">
                        <h2></h2>
                    </div>

                    <div className="left-des-btn">
                         <div className="left-descrption">
                        <p>Crafted by <span className='nature'>Nature, </span><br /> Perfected by Hand</p>
                    </div>
                    <div className="detail-descrption">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                             Doloremque quaerat reiciendis vero pariatur. Sit, ullam rerum. <br />
                              Culpa ut qui, quia similique maxime nobis. <br />
                               Placeat exercitationem est modi cumque, ducimus minus.</p>
                    </div>
                    <div className="left-btn">
                        <div className="view-btn">
                            <button className='view'>View</button>
                        </div>
                        <div className="leran-btn">
                            <button className='learn'>Lear-More</button>
                        </div>
                    </div>
                    </div>
                   
                </div>
                {/* home-right */}
                <div className="home-right">
                    <div className="right-img">
                        <img src={homeimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
