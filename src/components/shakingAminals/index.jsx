import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
class ShakingAnimals extends Component {
    render() {
        const { game } = this.props;
        const { animals, selectedAnimals } = game;
        const shakingAnimals = selectedAnimals.map(el => animals[el]);
        return (
            <div className="shakingAnimals">
                {shakingAnimals.map((el, idx) => <img key={idx} src={el.src} />)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game,
})
export default connect(mapStateToProps)(ShakingAnimals);