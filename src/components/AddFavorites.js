import React from 'react'


const AddFavorites = (props) => {
  return (
    <div onClick={props.handleFavoritesClick}>
    <span>
        <h2>Your Favorites are listed below</h2>
        </span>
        

    </div>
  )
}
export default AddFavorites