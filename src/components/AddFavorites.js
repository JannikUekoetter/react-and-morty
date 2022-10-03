import React from 'react'
import { FaHeart } from 'react-icons/fa';

const AddFavorites = (props) => {
  return (
    <div onClick={props.handleFavoritesClick}>
    <span>
        <h2>Your Favorits are listed below</h2>
        <span> <FaHeart size="2em"/></span>
        
        </span>
        

    </div>
  )
}
export default AddFavorites