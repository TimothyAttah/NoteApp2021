import React from 'react';
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  margin-bottom: 20px;
  @media (max-width:414px){
    font-size: 12px;
    font-weight: 600;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>All right reserved. 2020 @Timothy Attah</p>
    </FooterWrapper>
  )
}

export default Footer;