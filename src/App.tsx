import React = require('react');
/*import { remote } from 'electron';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';*/

import { TitleBar } from './TitleBar';
import { Canvas } from './Canvas';
import { Footer } from './Footer';

interface ComponentProps {
}

interface ComponentState {
    targetX: number,
    targetY: number
}

export class App extends React.Component<ComponentProps, ComponentState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            targetX: 0,
            targetY: 0
        };
    }
    onMouseMove(e) {
        const canvasBox = e.target.getBoundingClientRect();

        this.setState({
            targetX: e.clientX - canvasBox.left,
            targetY: e.clientY - canvasBox.top
        });
    }
    render() {
        return (
            <div className="window">
                <TitleBar/>
                <Canvas onmousemove={this.onMouseMove.bind(this)}  targetX={this.state.targetX} targetY={this.state.targetY}/>
                <Footer targetX={this.state.targetX} targetY={this.state.targetY}/>
            </div>
        );
    }
};
/*
const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export = connect((state) => {
    return state;
}, mapDispatchToProps)(App);
*/