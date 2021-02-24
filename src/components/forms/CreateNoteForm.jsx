import React, {useState} from 'react';
import { Form, Button, TextArea} from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { createNote } from '../../redux/actions/noteActions'
import history from '../../history'




const CreateNoteForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  
  const handleSubmit = ( e ) => {
    e.preventDefault()
    const newNote = {
      title,
      content
    }
     dispatch( createNote( newNote ) )
     history.push('/notes')
  }
  return (
    <>
     
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>Note Title</label>
        <input
          type='text'
          name='title'
          value={ title }
          onChange={(e)=> setTitle(  e.target.value)}
        />
        </Form.Field>
        <Form.Field>
        <label>Note Content</label>
          <TextArea
            rows={ 15 }
            name='content'
            value={ content }
            onChange={(e)=> setContent(  e.target.value)}
          />
        </Form.Field>
        <Button>Create</Button>
        </Form>
       
      </>
  )
}

export default CreateNoteForm
