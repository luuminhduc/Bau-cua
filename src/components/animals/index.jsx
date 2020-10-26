import React, { Component } from 'react';
import { connect } from 'react-redux';
import { takeBet } from '../../redux/actions/game/actions';
class Animals extends Component {
    handleBet = (id, status) => {
        this.props.takeBet(id, status)
    }
    renderAnimal = (allAnimals) => {
        return allAnimals.map(el => <div key={el.name} className="col l4 m6">
            <div className="card purple lighten-4">
                <div className="card-image">
                    <img src={el.src} alt="" />
                </div>
                <div className="card-action valign-wrapper purple lighten-4">
                    <div className="s4 purple lighten-3 center-align col">
                        <h6 style={{ margin: '0', padding: '10px', borderRadius: '10px' }}>{el.bet}</h6>
                    </div>
                    <div className="s8 col right-align">
                        <a onClick={() => this.handleBet(el.id, false)} className="btn red waves-effect">
                            <i className="material-icons">
                                remove
                            </i>
                        </a>
                        <a onClick={() => this.handleBet(el.id, true)} className="btn waves-effect">
                            <i className="material-icons">
                                add
                            </i>
                        </a>
                    </div>
                </div>

            </div>
        </div>)
    }
    render() {
        const { game } = this.props;
        const { animals } = game;
        return (

            <div className="row animals">
                {this.renderAnimal(animals)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game,
})

export default connect(mapStateToProps, { takeBet })(Animals);