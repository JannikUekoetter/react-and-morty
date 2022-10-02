import React from 'react'
import styled  from 'styled-components'
import { MdOutlineFavorite } from "react-icons/md";


export default function Header() {
  return (
    <div>
        <Headline>React and Morty</Headline>

    </div>
  )
}


const Headline = styled.h1`
color: plum;
font-size: 4rem;
text-decoration: underline;

`;