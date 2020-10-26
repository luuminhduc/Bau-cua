import React, { Component } from 'react';
import ShakingAminals from '../shakingAminals';
import { connect } from 'react-redux';
import { changeSelected, changeTheLastTime, stopShaking } from '../../redux/actions/game/actions';
import './index.scss';
import { showModal } from '../../redux/actions/modal/actions'

class Shaking extends Component {
    state = {
        isShaking: false,
    }
    handleClick = () => {
        const { game } = this.props;
        const { animals, point } = game;
        const { isShaking } = this.state;
        this.setState({ isShaking: true });
        setTimeout(() => {
            this.props.changeSelected(animals);
            setTimeout(() => {
                this.props.changeSelected(animals);
                setTimeout(() => {
                    this.props.changeSelected(animals);
                    setTimeout(() => {
                        this.props.changeTheLastTime(animals);
                        setTimeout(() => {
                            this.setState({ isShaking: false });
                            this.props.stopShaking();
                            if (!isShaking) {
                                const { game } = this.props;
                                if (game.point <= 0) {
                                    this.props.showModal();
                                }
                            }
                        })
                    }, 500)
                }, 1000)
            }, 1000)
        }, 500)
    }
    render() {
        const { isShaking } = this.state;
        const { game } = this.props;
        //console.log(game.point);
        return (
            <div className={isShaking ? "valign-wrapper row shaking shakingActive" : "valign-wrapper row shaking"}>
                <ShakingAminals />
                {isShaking ? <a onClick={() => this.handleClick()} className="waves-effect waves-light disabled btn-large"><i className="material-icons left"></i>SHAKE</a> : <a onClick={() => this.handleClick()} className="waves-effect waves-light btn-large"><i className="material-icons left"></i>SHAKE</a>}

            </div>
        );
    }
}
const mapStateToProps = state => ({
    game: state.game,
})
export default connect(mapStateToProps, { changeSelected, changeTheLastTime, showModal, stopShaking })(Shaking);