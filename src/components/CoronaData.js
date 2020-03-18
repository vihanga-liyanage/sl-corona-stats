import React, {Component} from 'react';
import axios from 'axios';

class CoronaData extends Component {

    state = {
        data: {}
    };

    componentDidMount() {
        console.log("Fetching...");
        axios.get('http://hpb.health.gov.lk/api/get-current-statistical')
            .then(response =>
                this.setState({data: response.data.data})
            );
    }

    render() {
        return (
            <div>
                <h1>SL Corona Stats</h1>
                <br/>
                <table>
                    <tr>
                        <td>
                            <h3>SL Deaths</h3>
                            <h3>SL Total Cases</h3>
                            <h3>SL Recovered</h3>
                        </td>
                        <td>
                            <h3>{this.state.data.local_deaths}</h3>
                            <h3>{this.state.data.local_total_cases}</h3>
                            <h3>{this.state.data.local_recovered}</h3>
                        </td>
                        <td>
                            <h3>Global Deaths</h3>
                            <h3>Global Total Cases</h3>
                            <h3>Global Recovered</h3>
                        </td>
                        <td>
                            <h3>{this.state.data.global_deaths}</h3>
                            <h3>{this.state.data.global_total_cases}</h3>
                            <h3>{this.state.data.global_recovered}</h3>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CoronaData;