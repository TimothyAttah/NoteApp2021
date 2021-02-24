import styled from 'styled-components';


export const FirstSection = styled.section`
display: flex;
justify-content: space-between;
margin-top: 50px;
margin-right: 150px;

h3{
  width: 370px;
  line-height: 50px;
  font-size: 30px;
  font-weight: 400;
}

@media (max-width: 990px){
  margin-right: 60px;
 h3{
   width: 310px;
 }

}
@media (max-width: 720px){
  img, p {
    display: none;
    border: none;
  }
  h3{
   width: 370px;
   margin: auto;
 }
}
`

export const ImageSection = styled.div`
box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.19);
border-radius: 0.2rem;
height: 240px;
p{
  text-align: center;
  padding: 5px 0;
}
@media (max-width: 715px){
  img {
    height: 150px;
    width: 210px;
  }
}
@media (max-width: 660px){
  img {
    height: 140px;
  }
  height: 200px;
  margin-top: 30px;
}
`

export const SecondSection = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
@media (max-width: 990px){
  display: block;
  margin-top: 60px;
}

`

export const Ul = styled.ul`
li {
padding: 10px 0;
 font-size: 16px;
}
`

export const ImageSectionWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 550px;
@media (max-width: 990px){
 margin-left: 100px;
 margin-top: 30px;
}
@media (max-width: 700px){
  width: 450px;
}
@media (max-width: 600px){
  display: block;
  width: 210px;
  margin-left: 80px;
}
@media (max-width: 330px){
 
  width: 210px;
  margin-left: 40px;
}
`