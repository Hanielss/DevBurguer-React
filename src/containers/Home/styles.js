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

margin-top: 50px;
width: 500px;
height: 490px;


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
font-weight: 700;
width: 213px;
height: 33px;



`

export const InputLabel = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.408px;
text-align: left;
color: #eeeeee;
font-style: normal;
margin-left: 25px;

    


`

export const Input = styled.input`

box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
border-radius: 14px;
border: none;
width: 342px;
height: 58px;
outline: none;
padding-left: 25px;
margin-bottom: 34px;
font-size: 20px;
font-weight: 300;
font-style: normal;
line-height: 28px;
color: #FFFFFF;


`;


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

