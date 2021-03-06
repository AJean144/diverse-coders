import React from 'react'
import Container from './styled/Container'

const Button = ({ buttonText, handleClick }) => (
    <Container onClick={handleClick}>
        {buttonText}
    </Container>
)

export default Button