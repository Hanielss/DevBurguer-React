import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';



import Box from '../../assets/burgerBox.png';
import Trash from '../../assets/trash.svg'

import {
    Container,
    Image,
    ContainerItens,
    H1,
    Button,
    User,

} from './styles'



const Users = () => {

    const [users, setUsers] = useState([]);

    const history = useHistory();




    useEffect(() => {


        async function fetchUsers() {

            const { data: newOrders } = await axios.get('http://localhost:3001/users');

            setUsers(newOrders)

        }

        fetchUsers()


    }, [])


    const deleteOrder = async (userId) => {
        axios.delete(`http://localhost:3001/users/${userId}`)

        const newOrder = users.filter(user => user.id !== userId)
        setUsers(newOrder);


    }

    const newOrder = () => {

        history.push('/')

    }




    return (<Container>

        <Image src={Box} alt="embalagem-de-lanche" />

        <H1>Pedidos</H1>

        <ContainerItens>

            <ul>
                {users.map((user) => (

                    <User key={user.id} >

                        <p> {user.name} </p>  <p> {user.age} </p>

                        <button onClick={() => deleteOrder(user.id)}> <img src={Trash} alt="lata-de-lixo" /> </button>

                    </User>

                ))}
            </ul>

            <Button onClick={newOrder} >Voltar</Button>

        </ContainerItens>

    </Container>

    )

}



export default Users;