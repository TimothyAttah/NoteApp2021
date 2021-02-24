import React from 'react';
import styled from 'styled-components';

import { colors } from './themes/globalStyles'

const BackdropWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: ${colors.darkGray};
  opacity: 0.6;
  z-index: 20;

`

const Backdrop = (props) =>  <BackdropWrapper onClick={props.onClick}></BackdropWrapper>

export default Backdrop;