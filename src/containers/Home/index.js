import React, { useState, useRef } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';



import Logo from '../../assets/burgerLogo.png';


import {
    Container,
    Image,
    ContainerItens,
    H1,
    InputLabel,
    Input,
    Button,
    

} from './styles'


const App = () => {

    const [users, setUsers] = useState([]);
    const history = useHistory();

    const order = useRef()
    const name = useRef()



    const addNewOrder = async (event) => {

        
        const { data: newOrder } = await axios.post('http://localhost:3001/users', {
            name: order.current.value,
            age: name.current.value,


        });             
       
       setUsers([...users, newOrder]);        
     
    }

    const orders = () => {

        history.push('/usuarios')

    }




    return (<Container>

        <Image src={Logo} alt="logo-burger" />

        <H1>Seu Pedido</H1>

        <ContainerItens>


            <InputLabel>Pedido</InputLabel>
            <Input ref={order} placeholder='Ex: 1 Coca-cola, Cheese Burguer 1' />

            <InputLabel>Nome do cliente</InputLabel>
            <Input ref={name} placeholder='Nome' />

            <Button onClick={addNewOrder}>Novo Pedido</Button>
            <Button onClick={orders}>Pedidos</Button>

          


        </ContainerItens>

    </Container>

    )

}



export default App;