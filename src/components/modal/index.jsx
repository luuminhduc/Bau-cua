import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/modal/actions';
import { startAgain } from '../../redux/actions/game/actions';
import './index.scss';
class Modal extends Component {
    handleClick = () => {
        this.props.hideModal();
        this.props.startAgain();
    }
    render() {
        const { modal } = this.props;
        return (
            <div style={{ display: modal.modal ? 'flex' : 'none' }} className="modalEl">
                <div className="modalEl-content z-depth-1">
                    <h4>Sorry</h4>
                    <p>You lost</p>
                    <button onClick={this.handleClick} className="btn waves-effect waves-light">Replay</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    modal: state.modal,
})
export default connect(mapStateToProps, { hideModal, startAgain })(Modal);

