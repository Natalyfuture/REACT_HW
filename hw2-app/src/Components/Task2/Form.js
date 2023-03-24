import React from 'react';
import '../User.css';


export class Form extends React.Component {
    state = {
        name: "",
        surname: "",
        error: "",
    }

    onSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.name, this.state.surname)

        const name = this.state.name;
        const surname = this.state.surname;

        if(this.formValidation(name, surname)){
            this.setState({
                error : 'There is something wrong with your data('})
                alert(this.state.error)
        } else {
            this.handleClear()
            alert (`Welcome, ${name} ${surname}`);

           
        }
 
    }

    handleClear = () => {
        this.setState({
            name: '',
            surname: '',
            error: ''
        })
    }

    changeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    formValidation = (name, surname) => {

        if(!name || !surname || name.length < 3 || surname.length < 3){
            return true
            } else {
                return false
            }

        }
    

    render() {

        return(
            <>
            <div className='task'>TASK 2</div>
            <div className='Form-content'>
            <form onSubmit={this.onSubmit}>
                <div>
                    <input 
                    placeholder='Name' 
                    name='name' 
                    value={this.state.name}
                    onChange={this.changeValue}
                    />
                </div>
                <div>
                    <input 
                    placeholder='Surname' 
                    name='surname' 
                    value={this.state.surname}
                    onChange={this.changeValue}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            </div>
            </>
        )
    }
}