import React from 'react'
import styled from "styled-components";

export default function MappedCharacters({name, status, id, gender, species, image}) {
  return (
    <div>

        <li key={id} >
            
            <h1>{name}</h1>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <div className='image-container'> {/* Hier können noch styled components für einen hover effect eingebaut werden */}
            <img src={image} alt="img"></img>
            </div>
            </li>
    </div>
  )
}


const ImgDiv = styled.div`
color: whitesmoke;
list-style: none;
`;