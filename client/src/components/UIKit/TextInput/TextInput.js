import React from 'react'
import Input from './styled/Input'
import Container from './styled/Container'
import InputContainer from './styled/InputContainer'
import Label from './styled/Label'
import IconLeft from './styled/IconLeft'
import IconRight from './styled/IconRight'

const TextInput = ({ type, placeholder, inline, iconRight, label, name, labelWidth, iconLeft, width, padding }) => (
    <Container inline={inline} iconRight={iconRight} padding={padding}>
        {label && (
            <Label inline={inline} htmlFor={name} labelWidth={labelWidth}>
                {label}
            </Label>
        )}
        <InputContainer>
            {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
            <Input
                autoComplete="off"
                width={width}
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
                iconLeft={iconLeft}
                iconRight={iconRight}
            />
            {iconRight && <IconRight>{iconRight}</IconRight>}
        </InputContainer>
    </Container>
)

export default TextInput