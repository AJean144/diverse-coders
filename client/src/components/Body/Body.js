import React, { Fragment } from 'react'
import { Grid, GridItem } from '../UIKit/Grid'
import { theme } from '../../config/theme'

import MyProvider from '../Context/MyProvider'
import MyContext from '../Context/MyContext'
import moment from 'moment'

const Body = () => (
    <Fragment>
        <Grid
            gap='20px'
            cols='4'
            padding={theme.spacing.s}
            bgColor={theme.colors.black}
            textColor={theme.textColors.inverse}
        >
            <GridItem
                fontColor={theme.textColors.link}
                fontFamily={theme.fonts.family.heading}
                fontSize={theme.fonts.sizes.l}
                textAlign='center'
                link
            >
                JavaScript Jobs
            </GridItem>

            <GridItem
                fontColor={theme.textColors.link}
                fontFamily={theme.fonts.family.heading}
                fontSize={theme.fonts.sizes.l}
                textAlign='center'
                link
            >
                Database Jobs
            </GridItem>

            <GridItem
                fontColor={theme.textColors.link}
                fontFamily={theme.fonts.family.heading}
                fontSize={theme.fonts.sizes.l}
                textAlign='center'
                link
            >
                Ruby Jobs
            </GridItem>

            <GridItem
                fontColor={theme.textColors.link}
                fontFamily={theme.fonts.family.heading}
                fontSize={theme.fonts.sizes.l}
                textAlign='center'
                link
            >
                Python Jobs
            </GridItem>
        </Grid>
        <MyProvider>
            <MyContext>
                {
                    (context) => {
                        return context.state.jobs && context.state.jobs.map((job, i) => {
                            const isEven = (i % 2) === 0
                            return <Grid
                                key={(job.id)}
                                gap='20px'
                                cols='3'
                                bgColor={isEven ? theme.colors.contrast.base : theme.colors.contrast.dark}
                                textColor={theme.textColors.inverse}
                                justifyItems='center'
                                alignItems='center'
                                padding='10px'
                            >
                                <Grid
                                    cols='200px'
                                    justifyItems='start'
                                    alignItems='center'
                                >
                                    <Grid
                                        rows='2, 20px'
                                        justifyItems='start'
                                        alignItems='start'
                                    >
                                        <GridItem
                                            fontColor={theme.textColors.link}
                                            fontFamily={theme.fonts.family.heading}
                                            textColor={theme.textColors.inverse}
                                            fontSize={theme.fonts.sizes.base}>
                                            {job.company_name}
                                        </GridItem>
                                        <GridItem textColor={theme.textColors.inverse} fontSize={theme.fonts.sizes.s}>{job.title}</GridItem>
                                    </Grid>
                                </Grid>

                                <Grid col='1'>
                                    {job.category}
                                </Grid>

                                <Grid cols='1'>
                                    {moment(job.created_at).format('MMM DDdd, YYYY')}
                                </Grid>
                            </Grid>
                        })
                    }
                }
            </MyContext>
        </MyProvider>
    </Fragment>
)

export default Body