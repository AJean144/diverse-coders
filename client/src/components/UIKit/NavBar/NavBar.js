import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, GridItem } from '../Grid'
import Logo from '../Logo'
import TextInput from '../TextInput'
import Icon from '../Icon'

import { theme } from '../../../config/theme'

const NavBar = () => (
    <Grid
        gap='20px'
        cols='12'
        padding={theme.spacing.s}
        bgColor={theme.colors.black}
        textColor={theme.textColors.inverse}
        dropShadow
    >
        <GridItem gridCol='8'>
            {/* TODO: refactor this code to use a real logo and not just text */}
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                <Logo />
            </Link>
        </GridItem>
        <GridItem gridCol='4'>
            <TextInput
                padding='5px'
                width='100%'
                placeholder='css, rails, javascript...'
                iconLeft={
                    <Icon name="search" size="14" color={theme.colors.contrast.base} />
                }
            />
        </GridItem>
    </Grid>
)

export default NavBar;