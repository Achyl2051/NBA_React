import React, {Component} from 'react';
import StatService from "../services/StatService";

class StatComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            stat:[]
        }
    }

    componentDidMount(){
        const statService = new StatService();

        statService.getStat()
            .then((res) => {
                this.setState({ stat: res.data });
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des voitures :", error);
            });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Statistiques générals</h2>
                <div className='row'>
                    <table className='table table-striped'>
                        <thead>
                        <tr>
                            <th scope="col">Joueur</th>
                            <th scope="col">Équipe</th>
                            <th scope="col">M</th>
                            <th scope="col">MJ</th>
                            <th scope="col">PPM</th>
                            <th scope="col">RPM</th>
                            <th scope="col">PDPM</th>
                            <th scope="col">LF</th>
                            <th scope="col">3P</th>
                            <th scope="col">2P</th>
                            <th scope="col">EFF</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.stat.map(
                                statis =>
                                    <tr>
                                        <td>{statis[0]}</td>
                                        <td>{statis[1]}</td>
                                        <td>{statis[2]}</td>
                                        <td>{statis[3]}</td>
                                        <td>{statis[4]}</td>
                                        <td>{statis[5]}</td>
                                        <td>{statis[6]}</td>
                                        <td>{statis[7]}</td>
                                        <td>{statis[8]}</td>
                                        <td>{statis[9]}</td>
                                        <td>{statis[10]}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StatComponent;