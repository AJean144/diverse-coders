import React, { PureComponent, Fragment } from 'react';
import NavBar from '../components/UIKit/NavBar'
import TextInput from '../components/UIKit/TextInput';
import { Grid } from '../components/UIKit/Grid';
import Button from '../components/UIKit/Button';
import MyContext from '../components/Context/MyContext';
import MyProvider from '../components/Context/MyProvider';
// import { validateURL, validatePhoneNumber } from '../lib/utils';

class CreateJobPost extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            category: '',
            headquarters: '',
            job_description: '',
            how_to_apply: '',
            company_name: '',
            company_website: '',
            company_email: '',
            company_statement: '',
            logo: '',
            company_info: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <div style={{ width: '100%', height: '2px', border: '2px solid #BADA55', boxShadow: '0px 1px 8px 1px #BADA55' }} />
                <Grid
                    gap='20px'
                    cols='1'
                    padding='0 20px'
                >
                    <h1>STEP 1: CREATE YOUR AD</h1>
                    <Grid
                        cols='2'
                    >
                        <Grid>
                            Provide some information about the position
                        <Grid
                                gap='20px'
                                cols='2'
                                height='300px'
                                border='1px solid #7A7A7A'
                            >
                                <TextInput type='text' value={this.state.title} name='title' label='Job Title' placeholder='"Front End Developer", "Senior JavaScript Role", etc...' handleChange={this.handleChange} />
                                <TextInput type='text' value={this.state.job_description} name='job_description' label='Job Description' placeholder='What are your requirement for the job?' handleChange={this.handleChange} />
                                <TextInput
                                    type='select'
                                    name='category'
                                    value={this.state.category}
                                    options={[
                                        { value: 'javascript', name: 'JavaScript' },
                                        { value: 'rubyonrails', name: 'Ruby on Rails' },
                                        { value: 'sql', name: 'SQL' },
                                        { value: 'java', name: 'Java' }
                                    ]}
                                    label='Primary programming language needed'
                                    placeholder='What are your requirement for the job?' handleChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid>
                            Location and Email
                        <Grid
                                gap='20px'
                                cols='1'
                                height='300px'
                                border='1px solid #7A7A7A'
                            >
                                <TextInput type='text' value={this.state.headquarters} name='headquarters' label='Headquarters' placeholder='"New York", "London", etc...' handleChange={this.handleChange} />
                                <TextInput type='text' value={this.state.how_to_apply} name='how_to_apply' label='Best way to apply for the job' placeholder='"Send email to job@company.com" or "Click this link to apply", etc...' handleChange={this.handleChange} />
                            </Grid>
                        </Grid>

                        <Grid>
                            Tell us about the company
                        <Grid
                                gap='20px'
                                cols='2'
                                height='300px'
                                border='1px solid #7A7A7A'
                            >
                                <TextInput type='text' value={this.state.company_name} name='company_name' label="What's your company's name?" placeholder='Coders Inc.' handleChange={this.handleChange} />
                                <TextInput type='text' value={this.state.company_statement} name='company_statement' label="What's your mission statement?" placeholder='We write code...' handleChange={this.handleChange} />
                                <TextInput type='text' value={this.state.logo} name='logo' label="Upload your company's logo" placeholder='Upload' handleChange={this.handleChange} />
                            </Grid>
                        </Grid>

                        <Grid>
                            Company contact info
                        <Grid
                                gap='20px'
                                cols='2'
                                height='300px'
                                border='1px solid #7A7A7A'
                            >
                                <TextInput type='url' value={this.state.company_website} name='company_website' label="Where can the company be found on the web?" placeholder='Coders.com' handleChange={this.handleChange} />
                                <TextInput type='email' value={this.state.company_email} name='company_email' label="What's your email?" placeholder='We will send your receipts to the email provided' handleChange={this.handleChange} />
                                <TextInput type='text' value={this.state.company_info} name='company_info' label="What's it like to work for this company?" placeholder='Discribe the company culture, pay, benifits, etc...' handleChange={this.handleChange} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <MyProvider>
                        <MyContext>
                            {(context) => <Button buttonText='Next' handleClick={() => context.state.createJobPost(this.state)} />}
                        </MyContext>
                    </MyProvider>

                </Grid>
            </Fragment>
        )
    }
}

export default CreateJobPost;
