import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid black;
`


const Characters = props => {
    return (
        <Container>
            <h1>React Wars</h1>
            
        </Container>

    )
}

export default Characters;

//             key={index}
//             name={info.name}
//             birthyear={info.birth_year}
//             homeworld={info.homeworld}
//             films={info.films}
//             starships={info.starships}