import React, {useEffect} from 'react';
import {Card, Icon, Input} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'

import NotePortal from '../../components/portals/NotePortal';
import { getNotes } from '../../redux/actions/noteActions'
import { Main, Wrapper, H3 } from './Styles'
import {user} from '../../App'


const ListNotes = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes.notes)
  console.log(notes)
  
  useEffect( () => {
    dispatch( getNotes() )
    console.log(user)
  }, [dispatch])
  return (
    <>
    <Main>
      {notes.length ? (
        notes.map( note => {
          return (
            <Card key={note._id}  >
              <Card.Content>
                <Card.Header>{ note.title }</Card.Header>
                <Card.Meta>Posted By: <span>{ note.postedBy.firstName }</span> <span>{ note.postedBy.lastName }</span></Card.Meta>
                <Card.Description>
                {note.content}
                </Card.Description>
                <Card.Description>
                  <p><Icon name='heart' size='large' color='red' /></p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Wrapper>
                  <p>Today at 10:AM</p>
                  <p>Read More</p>
                  <div><NotePortal note={ note }/></div>
                </Wrapper>
               
              </Card.Content>
              <Card.Content extra>
                <div>
                 
                  <Input
                    type='text'
                    placeholder='Add comment'
                    style={ { width: '100%' } }
                    action={{ color: 'blue', content: 'Add comment' }}
                  />
                </div>
              </Card.Content>
            </Card>
          )
        })
        ) :
        ( <H3>You have no notes</H3> ) }
      </Main>
      <H3>{ `You have ${ notes.length } notes in your page` }</H3>
      </>
  )
}

export default ListNotes
