import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '../../../components';

const api = axios.create({
    baseURL: `http://localhost:5000/api/home/`
})

class SuperButton extends Component {

    constructor() {
        super();
        this.getShowButton();
        setInterval(() => {
            this.getShowButton();
        }, 500);
    }

    state = {
        showButton: false
    }

    // GET
    getShowButton = async () => {
        let data = await api.get('/').then((({ data }) => data))
            .catch(error => { console.log(error) });
        this.setState({
            showButton: data[0].marked
        })
    }

    // POST
    updateShowButton = async () => {
        let res = await api.post('/', {} );
    }

    render() {
        const button = ['button'];
        // Выделить цветом  если...
        if (this.state.showButton !== true) {
            button.push('off');
        } else {
            button.push('on');
        }

        return (
            <div>
                <Button
                    className={button.join(' ')}
                    onClick={this.updateShowButton}>  {
                        this.state.showButton === false ? "OFF" : "ON"
                    }
                </Button>
            </div>
        )
    }
}


export default SuperButton