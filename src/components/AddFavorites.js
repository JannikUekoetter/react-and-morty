import React from 'react'
import { MdOutlineFavorite } from "react-icons/md";


const AddFavorites = (props) => {
  return (
    <div onClick={props.handleFavoritesClick}>
    <span>
        <h3>Add to Favorites</h3>
        </span>
        <button>
            <MdOutlineFavorite size="3em"/>
        </button>

    </div>
  )
}
export default AddFavorites