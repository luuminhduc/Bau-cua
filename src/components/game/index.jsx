
import React, { Component } from 'react';
import Animals from '../animals';
import Header from '../header';
import ModalEl from '../modal';
import Point from '../point';
import Shaking from '../shaking';
import './index.scss';
class Game extends Component {
    render() {
        return (
            <div className="game">
                <Header />
                <Point />
                <ModalEl />
                <div className="row">
                    <div className="col m8 s12">
                        <Animals />
                    </div>
                    <div style={{ height: '100%' }} className="col m4 s12 shaking-col">
                        <Shaking />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;