import React from 'react'
import styled  from 'styled-components'

export default function Card() {
  return (
    <div>
        <MyCard>
        <h3>Character Name:</h3>
        <p>Morty Smith</p>
        <img alt="character img" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"></img>
        <br></br>
        <button>Show more</button>
      </MyCard>
    </div>
  )
}


const MyCard = styled.h3`
color: whitesmoke;
`;