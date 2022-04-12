import React from "react";
import storeImage from '../../Assets/Img/storeImage.png'


const StoreOrder = (props) => (
    <div>
        <div className ="data_ui">
        <img className="store_image" src={storeImage} alt=""/> 
        <div className="store_content">
        We don't have access to your store's orders yet.
        </div>
        <div className="store_content">
        Please connect your store
        </div>
      
     
        </div>
    </div>);


export default StoreOrder;