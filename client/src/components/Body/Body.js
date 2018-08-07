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
                        return context.state.users && context.state.users.map((user, i) => {
                            const isEven = (i % 2) === 0
                            return <Grid
                                key={(user.id.value + i)}
                                gap='20px'
                                cols='2'
                                bgColor={isEven ? theme.colors.contrast.base : theme.colors.contrast.dark}
                                textColor={theme.textColors.inverse}
                                justifyItems='center'
                                alignItems='center'
                                padding='10px'
                            >
                                <Grid
                                    cols='55px 200px'
                                    justifyItems='start'
                                    alignItems='center'
                                >
                                    <img src={user.picture.thumbnail} style={{ borderRadius: '100%', width: 40 }} />
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
                                            {`${user.name.first} ${user.name.last}`}
                                        </GridItem>
                                        <GridItem textColor={theme.textColors.inverse} fontSize={theme.fonts.sizes.s}>{user.email}</GridItem>
                                    </Grid>
                                </Grid>

                                <Grid
                                    cols='1'
                                >
                                    {user.login.username}
                                    {moment(user.dob).format('DD MMM YYYY')}
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