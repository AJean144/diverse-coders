import React from 'react'
import { Grid, GridItem } from '../Grid'
import Logo from '../Logo'
import TextInput from '../TextInput'
import Icon from '../Icon'

import { theme } from '../../../config/theme'

const NavBar = () => (
    <Grid
        gap='20px'
        cols='12'
        bgColor={theme.colors.contrast.base}
        textColor={theme.textColors.inverse}
        dropShadow
    >
        <GridItem gridCol='8'>
            <Logo />
        </GridItem>
        <GridItem gridCol='4'>
            <TextInput
                padding='5px'
                width='450px'
                placeholder='css, rails, javascript...'
                iconLeft={
                    <Icon name="search" size="14" color={theme.colors.contrast.base} />
                }
            />
        </GridItem>
    </Grid>
)

export default NavBar;