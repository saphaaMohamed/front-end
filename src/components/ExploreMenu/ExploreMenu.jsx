import React from 'react'
import "./ExploreMenu.css";
import { menu_list } from '../../assets/assets/frontend_assets/assets';
const ExploreMenu = ({category,setCategory}) => {
    return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a wide variety of dishes.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className='explore-menu-list-item'
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
          <hr />
        })}
      
      </div>
    </div>
  );
};
       



export default ExploreMenu;