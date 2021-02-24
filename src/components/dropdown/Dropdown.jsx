import React from 'react';
import { Icon, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { logout } from '../../redux/actions/userAction'
import history from '../../history'

const renderLogout = () => {
  localStorage.clear()
  history.push('/')
}

const trigger = (
  <span>
    <Icon name='user' /> Timothy Attah
  </span>
)

const options = [
  
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Timothy Attah</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: <Link to="/profile">Your Profile</Link>  },
  { key: 'stars', text: 'Your Stars'  },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
{ key: 'sign-out', text: <Link to="#"  onClick={ ()=> renderLogout()}><span><Icon name='log out' />Sign Out</span></Link> },
 
]


const DropdownNav = () => (
  <Dropdown trigger={trigger} options={options} />
)

export default DropdownNav;

