import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";

const ExploreMenu = ({ category, setCategory }) => {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="explore-menu" id="explore-menu">
            <div className="type-of-food">
                <h2>Types of Food</h2>
                <div className="review-header-btn">        
                          <div className="btn-left">
                            <MdKeyboardArrowLeft onClick={scrollLeft} style={{fontSize:'2rem',color:'white'}}/>
                          </div>
                          <div className="btn-right ">
                             <MdKeyboardArrowRight onClick={scrollRight} style={{fontSize:'2rem',color:'white'}} />
                          </div>
                        </div>
            </div>
            <div ref={scrollRef} className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div  onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ExploreMenu