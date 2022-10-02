import React from 'react'
import { MdOutlineFavorite } from "react-icons/md";

const AddFavorites = () => {
  return (
    <>
    <span className='favbutton'>
        <h4>Add to Favorites</h4>
        </span>
        <button>
            <MdOutlineFavorite/>
        </button>

    </>
  )
}
export default AddFavorites