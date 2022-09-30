import React from 'react'
import styled  from 'styled-components'

export default function Navbar() {
  return (
    <div>
        
         <StyledFooter>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'blue' }}>Nav 1</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'red' }}>Nav 2</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'green' }}>Nav 3</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'yellow' }}>Nav 4</div>
            </li>
          </ul>
        </nav>
      </StyledFooter>
    </div>
  )
}



const StyledFooter = styled.footer`
background-color: gray;
`;


