import styled from 'styled-components';



export const Container = styled.div`

background-color: black;
background-size: cover;
  
display: flex;
flex-direction: column;
align-items: center;
gap: 44px; 
height: 100%;
min-height: 100vh;

`

export const Image = styled.img`

width: 246px;
height: 354px;
left: 84px;

`
export const ContainerItens = styled.div`
      
      border-radius: 61px 61px 0px 0px;
      padding: 50px 36px;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 100vh;
      color: gray;


`


export const H1 = styled.h1`
color: white;
font-size: 28px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: center;



`





export const Button = styled.button`

margin-top: 50px;
background: #D93856;

color: #FFFFFF;
width: 342px;
height: 74px;
border-radius: 14px;
font-size: 17px;
font-weight: 900;
line-height: 28px;
letter-spacing: 0px;
border: none;
outline: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

&:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.5;
}


`


export const User = styled.li`

box-shadow: 0px 4px 4px 0px #000000;
background: #FFFFFF24;
border-radius: 14px;
border: none;
padding: 10px;
outline: none;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
width: 350px;
height: 115px;
gap: 10px;



p {

font-size: 18px;
font-weight: 300;
line-height: 21px;


}

button{


    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.3;
    }

    &:active {
        opacity: 0.8;
    }
    
  
}


`