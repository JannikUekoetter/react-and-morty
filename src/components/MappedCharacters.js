import React from 'react'
import styled from "styled-components"



const MappedCharacters = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <div>
        <CardElements className='cardscontainer'>
        <li key={props.id} >
            <h1>{props.name}</h1>
           
            <p>Gender: {props.gender}</p>
            <p>Status: {props.status}</p>
            <p>Species: {props.species}</p>
            <div>
            <img src={props.image} alt="img"></img>
            
            </div>
           <FavoriteComponent
           />
        </li>
        </CardElements>
    </div>
  )
}

export default MappedCharacters


const CardElements = styled.ul`
color: whitesmoke;
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
`;
