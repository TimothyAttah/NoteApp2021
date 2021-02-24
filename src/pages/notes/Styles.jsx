import styled from 'styled-components'

export const Main = styled.div`
   width: 500px;
   height: 500px;
  border: 2px solid darkslategrey;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border: 1px solid #232943;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #2762f7, #060b26);
    border-radius: 3px;
    outline: none;
   
  }
  @media (max-width:500px){
    width: 350px;
  }
  @media (max-width:352px){
    width: 300px;
  }
  @media (max-width:305px){
    width: 250px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #807300;
  position: relative;
  p {
    margin: 0;
    padding: 0;
  }
`

export const H3 = styled.h3`
   margin-left: 30px;
  padding: 10px 0 20px;
  text-transform: capitalize;
     @media (max-width:414px){
        font-size: 18px;     
  }
     @media (max-width:310px){
        font-size: 14px;     
  }
`
