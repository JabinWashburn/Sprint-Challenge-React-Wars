import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid black;
`


const Content = props => {
    return (
        <Container>
            
            <p>{props.name}</p>
            <p>{props.birth_year}</p>
            <p>{props.homeworld}</p>
            <p>{props.films}</p>
            <p>{props.starships}</p>
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