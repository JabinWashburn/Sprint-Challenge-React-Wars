import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid black;
    max-width: 20%;
    display: flex;
    flex-direction: column;
    margin: 3% 0% 0% 40%;
    background-color: #bbc3c5;
    border-radius: 15px;
`


const Content = props => {
    return (
        <Container>
            <p>Name = {props.name}</p>
            <p>Birth = {props.birth}</p> 
            <p>Mass = {props.mass}</p>
        </Container>

    )
}

export default Content;

//             key={index}
//             name={info.name}
//             birthyear={info.birth_year}
//             homeworld={info.homeworld}
//             films={info.films}
//             starships={info.starships}