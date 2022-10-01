import React from 'react'
import styled  from 'styled-components'


export default function Navbar() {
  return (
    <div>
        
         <StyledFooter>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'plum' }}>Nav 1</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'whitesmoke' }}>Nav 2</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'plum' }}>Nav 3</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'whitesmoke' }}>Nav 4</div>
             
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




