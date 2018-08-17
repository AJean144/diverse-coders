import React from 'react'
import Input from './styled/Input'
import Select from './styled/Select'
import Container from './styled/Container'
import InputContainer from './styled/InputContainer'
import Label from './styled/Label'
import IconLeft from './styled/IconLeft'
import IconRight from './styled/IconRight'

const TextInput = ({ type, placeholder, inline, iconRight, label, name, labelWidth, iconLeft, width, padding, options, handleChange, value }) => (
    <Container inline={inline} iconRight={iconRight} padding={padding}>
        {label && (
            <Label inline={inline} htmlFor={name} labelWidth={labelWidth}>
                {label}
            </Label>
        )}
        <InputContainer>
            {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
            {type === 'text' && <Input
                autoComplete="off"
                width={width}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
                iconLeft={iconLeft}
                iconRight={iconRight}
            />}
            {type === 'select' &&
                <Select
                    type={type}
                    width={width}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    id={name}
                    iconLeft={iconLeft}
                    iconRight={iconRight}>
                    {options && options.map((option) => <option key={option.value} value={option.value}>{option.name}</option>)}
                </Select>}
            {iconRight && <IconRight>{iconRight}</IconRight>}
        </InputContainer>
    </Container>
)

export default TextInput