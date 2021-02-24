import React from 'react';
import ReactDOM from 'react-dom';
import styled,{css} from 'styled-components';
import { colors } from '../themes/globalStyles';

const Container = styled.div`
  width: 370px;
  background-color: ${colors.white};
  position: absolute;
  margin: 0 auto;
  border: none;
  padding: 0 15px;
  z-index: 999;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  ${props => props.primary && css`
  width: 300px;
  `}

  ${props => props.secondary && css`
  width: 500px;
  `}
  
  ${props => props.todo && css`
  width: 500px;
  background: #e5e5e5;
  top: 180px;
  `}


  @media (max-width: 414px){
    width: 320px;
  }
  @media (max-width: 340px){
    width: 250px;
  }
 ${props =>  props.secondary  && css`
 @media (max-width: 550px){
    width: 400px;
  }
  @media (max-width: 414px){
    width: 300px;
  }
  @media (max-width: 314px){
    width: 280px;
  }
  @media (max-width: 285px){
    width: 250px;
  }
 `}
 ${props =>  props.todo  && css`
 @media (max-width: 550px){
    width: 400px;
  }
  @media (max-width: 414px){
    width: 300px;
  }
  @media (max-width: 314px){
    width: 280px;
  }
  @media (max-width: 285px){
    width: 250px;
  }
 `}
`

export const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <Container>
      {children}
    </Container >,
    document.getElementById('modal')
  )
}
export const DeleteModal = ({children}) => {
  return ReactDOM.createPortal(
    <Container primary>
      {children}
    </Container >,
    document.getElementById('modal')
  )
}

export const NoteModal = ({children}) => {
  return ReactDOM.createPortal(
    <Container secondary>
      {children}
    </Container >,
    document.getElementById('modal')
  )
}
export const TodosModal = ({children}) => {
  return ReactDOM.createPortal(
    <Container todo>
      {children}
    </Container >,
    document.getElementById('modal')
  )
}