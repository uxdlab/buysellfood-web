import React from 'react'
import './Restaurantlist.css'
import { Link } from 'react-router-dom'

const RestaurantList = () => {
  return (
    <div className='container'>
        <h3>Restaurant list</h3>
        <div className='restaurantlist'>
        <Link to="/restaurantview" style={{textDecoration:"none",color:'black'}}><div className="card onecard" >
            <img style={{borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Waaw Momo</h5>
                <a href="#" className="btn btn-primary">Explore</a>
            </div>
        </div></Link>
        <Link to="/restaurantview"><div className="card onecard" >
            <img style={{borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Waaw Momo</h5>
                <a href="#" className="btn btn-primary">Explore</a>
            </div>
        </div></Link>
        <Link to="/restaurantview"><div className="card onecard" >
            <img style={{borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Waaw Momo</h5>
                <a href="#" className="btn btn-primary">Explore</a>
            </div>
        </div></Link>
        <Link to="/restaurantview"><div className="card onecard" >
            <img style={{borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Waaw Momo</h5>
                <a href="#" className="btn btn-primary">Explore</a>
            </div>
        </div></Link>
        <Link to="/restaurantview"><div className="card onecard" >
            <img style={{borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Waaw Momo</h5>
                <a href="#" className="btn btn-primary">Explore</a>
            </div>
        </div></Link><Link to="/restaurantview"><div className="card onecard" >
            <img style={{borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Waaw Momo</h5>
                <a href="#" className="btn btn-primary">Explore</a>
            </div>
        </div></Link>


    </div>
    </div>
 
  )
}

export default RestaurantList