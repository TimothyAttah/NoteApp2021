import React, {useState} from 'react'
import { Dropdown, Icon, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import { deleteNotes } from '../../redux/actions/noteActions'
import history from '../../history'

const ModalWrapper = styled.div`
text-align: center;
span {
 display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 40px;
  padding-bottom: 40px;
}
`

const ButtonWrapper = styled.div`
 display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;
`



const NotePortal = ( { note } ) => {
  const [ open, setOpen ] = useState( false )
  const dispatch = useDispatch()
  
  const renderDelete = () => {
    dispatch( deleteNotes( note.id ) )
    history.push('/notes')
  }
  return (
    <>
      <Dropdown
        icon='ellipsis horizontal'
        floating
        labeled
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Item>
            <Modal 
             closeIcon
             open={open}
             trigger={<Button> <Icon name='trash alternate' />Delete</Button>}
             onClose={() => setOpen(false)}
              onOpen={ () => setOpen( true ) }
              size='small'
              style={{marginBottom: '200px'}}
            >
              <Modal.Content>
                <ModalWrapper>
                  <span><Icon name='warning sign' /></span>
                <hr/>
                <div>
                    Are you sure you want to delete this note:
                     <h4>{ note.title }</h4>
                  </div>
                  <hr/>
                  <ButtonWrapper>
                  <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' onClick={() => renderDelete()}>
                <Icon name='checkmark' /> Yes
              </Button>
                  </ButtonWrapper>
                </ModalWrapper>
              </Modal.Content>
            </Modal>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={ `/notes/edit-note/${ note }` }>
              <span> <Icon name='edit' /></span>
              <span>Edit</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={ `/notes/print-note/${ note }` }>
              <span> <Icon name='print' /></span>
              <span>Print</span>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default NotePortal;
