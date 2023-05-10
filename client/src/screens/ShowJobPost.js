import React, { Fragment } from 'react';
import MyProvider from '../components/Context/MyProvider';
import MyContext from '../components/Context/MyContext';
import { Grid, GridItem } from '../components/UIKit/Grid';
import { theme } from '../config/theme'
import NavBar from '../components/UIKit/NavBar';
import moment from 'moment';

const ShowJobPost = (props) => (
    <Fragment>
        <MyProvider>
            <MyContext>
                {
                    (context) => {
                        const { match: { params: { id } } } = props;
                        const { state: { jobs } } = context;
                        const selectedJob = jobs.find((job) => job.id === parseInt(id, 10));
                        console.log({ selectedJob })
                        return selectedJob && (
                            <Fragment>
                                <NavBar {...props} />
                                <Grid
                                    cols='1'
                                    padding={theme.spacing.base}
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
                                            fontSize={theme.fonts.sizes.xl}>
                                            {selectedJob.title}
                                        </GridItem>
                                        <GridItem textColor={theme.textColors.inverse} fontSize={theme.fonts.sizes.m}>
                                            Posted {moment(selectedJob.created_at).format('MMM DDdd')}
                                        </GridItem>
                                    </Grid>
                                </Grid>

                                <Grid
                                    cols='1'
                                    padding={theme.spacing.base}
                                    justifyItems='start'
                                    alignItems='center'
                                >
                                    <Grid
                                        rows='2, 20px'
                                        justifyItems='start'
                                        alignItems='start'
                                    >
                                        <GridItem
                                            textColor={theme.textColors.inverse}
                                            fontSize={theme.fonts.sizes.xl}>
                                            {selectedJob.company_name}
                                        </GridItem>
                                        <GridItem textColor={theme.textColors.inverse} fontSize={theme.fonts.sizes.l}>
                                            Headquarters: {selectedJob.headquarters}
                                        </GridItem>
                                        <GridItem textColor={theme.textColors.inverse} fontColor={theme.textColors.link} fontSize={theme.fonts.sizes.m}>
                                            {selectedJob.company_website}
                                        </GridItem>
                                    </Grid>
                                </Grid>

                                <Grid
                                    cols='1'
                                    padding={theme.spacing.base}
                                    justifyItems='start'
                                    alignItems='center'
                                >
                                    <Grid
                                        rows='2, 20px'
                                        justifyItems='start'
                                        alignItems='start'
                                    >
                                        <GridItem textColor={theme.textColors.inverse} fontSize={theme.fonts.sizes.l}>
                                            {selectedJob.job_description}
                                        </GridItem>
                                    </Grid>
                                </Grid>
                            </Fragment>
                        )
                    }
                }
            </MyContext>
        </MyProvider>
    </Fragment>
)

export default ShowJobPost;
