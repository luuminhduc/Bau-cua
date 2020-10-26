import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.scss';
import { showModal } from '../../redux/actions/modal/actions'
class Point extends Component {
    render() {
        const { game } = this.props;
        const { point } = game;
        return (
            <div className="container center-align point white-text">
                <span className="red z-depth-2">Point: {point}</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game,
})

export default connect(mapStateToProps, { showModal })(Point);