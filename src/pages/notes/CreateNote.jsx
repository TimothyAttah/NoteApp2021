import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import Backdrop from '../../components/Backdrop'
import CreateNoteForm from '../../components/forms/CreateNoteForm'
import { NoteModal } from '../../components/modal/Modal'
import history from '../../history'
import {colors} from '../../components/themes/globalStyles'


const Header = styled.header`
position: relative;
span {
 float: right;
 position: absolute;
  width: 20px;
  top: 10px;
  right: 10px;
  font-size: 16px;
  width: 35px;
  height:30px;
  display: flex;
  justify-content:center;
  align-items:center;
  :hover{
    background-color: ${colors.darkGray};
    color: ${colors.white};
    border-radius: 5px;
    cursor: pointer;
  }
}
h1{
  display: flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
  @media(max-width:411px){
    font-size: 18px;
  }
}
`

const CreateNote = () => {
  return (
    <>
      <Backdrop />
      <NoteModal>
      <Header>
      <h1>Writing a Note</h1>
      <span><Icon name='close' onClick={()=> history.push('/notes')} /></span>
      </Header>
        <CreateNoteForm />
        </NoteModal>
    </>
  )
}

export default CreateNote
