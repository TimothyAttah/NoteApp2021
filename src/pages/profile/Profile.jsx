import React from 'react'
import styled, {css} from 'styled-components';
import { Icon, Grid, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const FirstSection = styled.section`
  display: flex;
  justify-content: space-around;
  border: 2px solid #b3ff00;
  margin: 0;
  padding: 0;
  @media (max-width: 700px){
    display: block;
    margin: 0 auto;
 }
`
const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
p{
  margin-top: 80px;
}
`

const ProfileTag = styled.div`
 width: 600px;
 h2{
   font-size: 30px;
 }
 h4{
   padding: 0;
   margin: 0;
 }
 ${props => props.primary && css`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 350px;
  margin-top: 30px;
 h5{
  padding: 0;
  margin: 0;
  font-size: 16px;
 }
 `}
 @media (max-width: 975px){
   width: 400px;
 }
 @media (max-width: 700px){
   margin: 0 auto;
   h2, h4{
     margin-left: 100px;
   }
 h4{
 padding-bottom: 20px;
 }
 }
 @media (max-width: 415px){
  h2, h4{
     margin-left: 75px;
   }
}
@media (max-width: 320px){
  h2, h4{
     margin-left: 30px;
   }
}
 ${props => props.primary && css`
 @media (max-width: 445px){
  display: block;
  margin-left: 100px;
  h5{
    padding: 5px 0;
  }
 }
 @media (max-width: 415px){
 margin-left: 75px;
}
 @media (max-width: 320px){
 margin-left: 30px;
}
 `}
`


const Profile = () => {
  return (
  <>
    <FirstSection>
      <ProfileImage>
          <h1>User Profile</h1>
          <p><Icon name='user circle' style={{ fontSize: '170px',}} /></p>
        </ProfileImage>
        <ProfileTag>
          <h2>Timothy Attah</h2>
          <h4>timothy@gmail.com</h4>
          <ProfileTag primary>
            <h5>20 Posts</h5>
            <h5>100 Followers</h5>
            <h5>130 Following</h5>
          </ProfileTag>
        </ProfileTag>
      </FirstSection>
      <div>
        <h2>Welcome Timothy Attah</h2>
        <p>Here are your notes</p>
      </div>
      <Grid>
        <Grid.Row columns={3} >
          <Grid.Column >
            <Card
              header="Note Title"
              link
              meta={<Link>Read More...</Link>}
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
              "
            />
            </Grid.Column>
          <Grid.Column >
            <Card
              header="Note Title"
              link
              meta={<Link>Read More...</Link>}
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
              "
            />
            </Grid.Column>
          <Grid.Column >
            <Card
              header="Note Title"
              link
              meta={<Link>Read More...</Link>}
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
              "
            />
            </Grid.Column>
          <Grid.Column >
            <Card
              header="Note Title"
              link
              meta={<Link to=''>Read More...</Link>}
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
              "
            />
            </Grid.Column>
          <Grid.Column >
            <Card
              header="Note Title"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.'
             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eum necessitatibus possimus tenetur deserunt recusandae quos 
              laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
              "
             
            />
            </Grid.Column>
        </Grid.Row>
      </Grid>
     
  </>
  )
}

export default Profile
