import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { images } from '../../components/images';
import { SideInformation } from '../../components/helpers';
import Footer from '../../components/footer/Footer';
import { FirstSection, SecondSection, ImageSection, ImageSectionWrapper, Ul } from './Styles';


const Home = () => {
  return (
    <main>
      <FirstSection>
        <h3> 
          There are essentially two things that will make you wiser- The books
          you read and the people you meet- by Charles Jones
        </h3>
        <ImageSection>
          <img src={ images.SystemImg } alt="System-img" />
          <p>Track your TODO Lists</p>
        </ImageSection>
      </FirstSection>
      <SecondSection>
        <Ul >
          {SideInformation.map(( information, index ) => {
            return(
              <li key={ index }>{ information.icon }<span>{ information.title }</span></li>
            );
          })}
        </Ul>
        <ImageSectionWrapper>
          <ImageSection>
            <img src={ images.CodingImg } alt="Coding-img" />
            <p>Jot down reuseable code snippets</p>
          </ImageSection>
          <ImageSection>
            <img src={ images.ActivitiesImg } alt="Activities-img" />
            <p>Jot down your daily activities</p>
          </ImageSection>
        </ImageSectionWrapper>
      </SecondSection>
      <Link to='/notes'>
        <Button primary style={{ width: "220px", height: "70px", margin: "100px 0", textTransform: "uppercase", fontSize: "16px", letterSpacing: "5px" }} >Get  Started</Button>
      </Link>
      <Footer />
    </main>
  );
}

export default Home;
