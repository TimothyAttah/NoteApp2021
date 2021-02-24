// import React from 'react';
// import { useDispatch, useSelector, connect } from 'react-redux'
// import {Button, Icon} from 'semantic-ui-react'

// import { DeleteModal } from '../../components/modal/Modal'
// import { deleteNotes } from '../../redux/actions/noteActions'
// import history from '../../history'
// //import {useParams, useLocation} from 'react-router-dom'



// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.match.params.currentId;
//   console.log(state.notes.notes)
//   return {
//     note: state.notes.notes.find((note) => note._id === id),
//   };
// };

// const DeleteNote = (props) => {

  
//   console.log('note', props.note)
//   const dispatch = useDispatch()
  

// //   const renderContent = () => {
// //   console.log(props.note)

// //   if ( !props.note ) {
// //     return <p>Please select a note to delete</p>
// //   } else {
// //     return (
// //       <div>Are you sure you want to delete this note:<span>{ props.note.title }</span></div>
// //     )
// //   }
// // }


// const renderContent = (props) => {

//   // if (props.note === undefined) {
//   //   return <p>Are you sure you want to delete this note?</p>;
//   // }
//   // return (
//   //   <div>
//   //     {`Are you sure you want to delete this note: ${props.note.title}`}
//   //   </div>
//   // );
// };


//   const renderDelete = ( ) => {
    
//     history.push('/notes')
//   }
//   return (
//     <>
//       <DeleteModal>
//       <Icon name='close' />
//         <Icon name='warning sign' />
//         { renderContent() }
//         <div>
//           <Button>Cancel</Button>
//           <Button onClick={()=> dispatch()}>Delete</Button>
//         </div>

       
       
//      </DeleteModal>
//     </>
//   )
// }


// export default DeleteNote;








// // const { currentId } = useParams()
//   // const  currentId  = match.params.currentId
//   // const location =useLocation()

//   // console.log('Id', currentId)
//   // console.log('location', location)
//   // // const note = useSelector( ( state ) => id ? state.notes.notes.find((note)=> note.id === id): null )
//   // const note = useSelector( ( state ) => state.notes.notes )
  
//   // const handleNote = note.map( sub => {
    
//   //   return (
//   //     <div key={sub.id}>
//   //       {sub.id === currentId ? (
//   //         <div>Are you sure you want to delete this note:<span>{ note.title }</span></div>
//   //       ) : ( <p>Please select a note to delete</p> ) }
//   //       {sub.id === currentId ? (
//   //         <div>
//   //           <Button onClick={() => dispatch(deleteNotes(sub.id))}>Delete</Button>
//   //           <Button>Cancel</Button>
//   //         </div>
//   //       ) : ''}
//   //    </div>
//   //   )
//   // })
  
 
//   // note: state.notes.notes.find((note) => note._id === id),
  
  

// //   const renderDelete = () => {
// //   console.log()

// //     if ( currentId !== undefined ) {
// //       const myNote = note.findIndex( p => p.id === currentId )
// //       console.log('myNote', myNote)
// //     }
  
// // }