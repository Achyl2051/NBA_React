import React, {Component} from 'react';
import MatchService from "../services/MatchService";

class ResultatComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            match:[]
        }
    }

    componentDidMount(){
        const matchComponent = new MatchService();

        matchComponent.getMatch()
            .then((res) => {
                this.setState({ match: res.data });
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des voitures :", error);
            });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>matchs</h2>
                <div className='row'>
                    <table className='table table-striped'>
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Equipe 1</th>
                            <th scope="col">Score</th>
                            <th scope="col">Equipe 2</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.match.map(
                                m =>
                                    <tr key={m.id}>
                                        <td>{m.date}</td>
                                        <td>{m.team1.nom} ({m.team1.diminutif})</td>
                                        <td>{m.score}</td>
                                        <td>{m.team2.nom} ({m.team2.diminutif})</td>
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

export default ResultatComponent;