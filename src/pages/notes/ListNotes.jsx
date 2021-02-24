import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Input } from 'semantic-ui-react'

import NotePortal from '../../components/portals/NotePortal'

const ListNotes = () => {
  return (
    <div>
      <div>
        <h2>Note One</h2>
        <h4>postedBy:<Link to='user/profile'>Timothy Attah</Link></h4>
        <p>This is note content</p>
        <Icon name='heart' color='red' />
        <div>
          <div>Today at 10:00 Am</div>
          <div><Link to='user/note/id'>Read More</Link></div>
          <div><NotePortal /></div>
        </div>
        <div>
          <Input
            type='text'
            placeholder='Add Comment'
            action={{ color: 'blue', content: 'Add comment' }}
          />
        </div>
      </div>
    </div>
  )
}

export default ListNotes
