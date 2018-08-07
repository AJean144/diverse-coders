import React from 'react'
import { Link } from 'react-router-dom'
import SuperText from '../UIKit/SuperText'
import Headline from '../UIKit/Headline'
import Button from '../UIKit/Button'

import { Grid, GridItem } from '../UIKit/Grid'
import { theme } from '../../config/theme'

const Header = () => (
    <Grid
        gap='20px'
        cols='1'
        padding={theme.spacing.xl}
        textColor={theme.textColors.main}
    >
        <GridItem textAlign='center'>
            <SuperText color={theme.colors.main.dark} fontFamily={theme.fonts.family.heading}>DIVERSE CODERS</SuperText>
            <Headline>
                Diverse Coders is on a mission to solve the diversity issue in the tech industry.
                We've created a space where you can post jobs and find top talent from all backgrounds.
            </Headline>
        </GridItem>
        <GridItem textAlign='center'>
            <Link to='/new-job-post'>
                <Button buttonText='Post a job - $299' />
            </Link>
        </GridItem>
    </Grid>
)

export default Header