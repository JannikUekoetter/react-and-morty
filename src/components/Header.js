import React from 'react'
import styled  from 'styled-components'

export default function Header() {
  return (
    <div>
        <Headline>React and Morty</Headline>
    </div>
  )
}


const Headline = styled.h1`
color: red;
`;