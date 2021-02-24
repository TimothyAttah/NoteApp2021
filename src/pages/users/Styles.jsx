import styled, { css } from 'styled-components'
import { colors } from '../../components/themes/globalStyles'

export const CloseBtn = styled.div`
  float: right;
  font-size: 16px;
  margin: 10px 0;
  :hover{
    color: ${colors.red};
  }
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 10px;
  @media (max-width:500px){
    font-size: 28px;
  }
  @media (max-width:350px){
    font-size: 22px;
  }
`

export const PTag = styled.p`
  font-size: 14px;
  padding: 0;
  margin: 0px;
 ${props => props.primary && css`
  color: ${colors.lightBlue};
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
 `}
 ${props => props.or && css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  margin: 12px 0;
 `}
 ${props => props.link && css`
  text-align: center;
  margin-top: 10px;
  padding-bottom: 10px;
  a {
   text-decoration: none;
   color: ${colors.lightBlue};
  }
 `}
 @media (max-width: 411px){
   font-size: 12px;
   font-weight: 500;
   ${props => props.or && css`
   font-size: 16px;
   font-weight: bold;
   `}
   ${props => props.primary && css`
   font-size: 15px;
   font-weight: bold;
   `}
 }
`

export const GoogleBox = styled.div`
  background-color: ${colors.teal};
  box-shadow: 1px 0px 1px 1px rgba(2,0,0, 0.1) inset;
  border-radius: 6px;
  margin: 20px 0;
  opacity: 0.9;
  :hover{
    opacity: 0.8;
  }
`

export const Wrapper = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.white};
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 1px;
  span{
    color: ${colors.teal};
    background-color: ${colors.white};
    border: 1px solid ${colors.teal};
    height: 40px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 4px;
    box-shadow: 1px 0px 1px 1px rgba(2,0,0, 0.1) inset;
  }
  @media(max-width: 414px){
    width: 235px; 
  }
  @media(max-width: 350px){
    width: 180px;
    font-size: 12px;
  }
  span{
    width: 40px;
  }
`

export const Form = styled.form`
  input {
    width: 100%;
    display: block;
    border-radius: 0.5rem;
    background-color: ${colors.fadeWhite};
    padding: 1rem;
    margin: 12px 0;
    outline: none;
    border:1px solid ${colors.lightBlack};
  }
`