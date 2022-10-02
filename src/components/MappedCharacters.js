import React from 'react'

const MappedCharacters = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <div>

        <li key={props.id} >
            <h1>{props.name}</h1>
            <p>Gender: {props.gender}</p>
            <p>Status: {props.status}</p>
            <p>Species: {props.species}</p>
            <div className='image-container'> {/* Hier können noch styled components für einen hover effect eingebaut */}
            <img src={props.image} alt="img"></img>

            </div>
            <FavoriteComponent />

        </li>
    </div>
  )
}

export default MappedCharacters

/* 
const ImgDiv = styled.div`
color: whitesmoke;
list-style: none;
`; */