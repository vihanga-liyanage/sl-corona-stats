import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class CoronaData extends Component {

    state = {
        data: {},
        timeDiff: 0
    };

    componentDidMount() {
        console.log("Fetching...");
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(response =>
                this.setCoronaDate(response.data.data)
            );
    }

    setCoronaDate = (data) => {
        let timestamp = data.update_date_time;
        console.log(timestamp);
        let updatedTimestamp = moment(timestamp);
        let timeDiff = moment().diff(updatedTimestamp, 'minutes');
        this.setState({
            data: data,
            timeDiff: timeDiff
        })
    };

    render() {
        return (
            <div>
                <h1>SL Corona Stats</h1>
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h3>SL Deaths</h3>
                            </td>
                            <td>
                                <h3>{this.state.data.local_deaths}</h3>
                            </td>
                            <td>
                                <h3>Global Deaths</h3>
                            </td>
                            <td>
                                <h3>{this.state.data.global_deaths}</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>SL Total Cases</h3>
                            </td>
                            <td>
                                <h3>{this.state.data.local_total_cases}</h3>
                            </td>
                            <td>
                                <h3>Global Total Cases</h3>
                            </td>
                            <td>
                                <h3>{this.state.data.global_total_cases}</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>SL Recovered</h3>
                            </td>
                            <td>
                                <h3>{this.state.data.local_recovered}</h3>
                            </td>
                            <td>
                                <h3>Global Recovered</h3>
                            </td>
                            <td>
                                <h3>{this.state.data.global_recovered}</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4>Updated: {this.state.timeDiff} minutes ago.</h4>
            </div>
        );
    }
}

export default CoronaData;