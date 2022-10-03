import React from 'react'
import styled  from 'styled-components'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
        
         <StyledFooter>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <li>
              <Link to="/" style={{ width: 100, height: 50}}>Home</Link>
            </li>
            <li>
              <Link to="favorites" style={{ width: 100, height: 50}}>Favorites</Link>
            </li>
            <li>
              <Link to="random" style={{ width: 100, height: 50}}>Random</Link>
            </li>
            <div>
   
    </div>
          </ul>
        </nav>
      </StyledFooter>
    </div>
  )
}



const StyledFooter = styled.footer`
background-color: gray;
`;




