import { Icon } from 'semantic-ui-react';
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'


export const SideInformation = [
  {
    title: 'Track your daily activities',
    icon: <Icon name='angle double right' />
  },
  {
    title: ' Save important note or code snippets you\'re likely to reuse',
    icon: <Icon name='angle double right' />
  },
  {
    title: 'keep a diary of you daily activities',
    icon: <Icon name='angle double right' />
  }
]

export const NavbarData = [
  {
    title: 'Notes',
    path: '/notes',
    icon: <Icon name='clipboard list' />,
    cName: 'nav-text',
    noteCounter: 10
  },
  {
    title: 'Todos',
    path: '/todos',
    icon: <Icon name='tasks' />,
    cName: 'nav-text',
    todosCounter: 100
  },
  {
    title: 'Events',
    path: '/events',
    icon: <Icon name='trophy' />,
    cName: 'nav-text',
    eventsCounter: 5
  },
  {
    title: 'Budgets',
    path: '/budgets',
    icon: <Icon name='dollar sign' />,
    cName: 'nav-text',
    budgetsCounter: 2
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <Icon name='setting' />,
    cName: 'nav-text'
  }
]
