import React = require('react');
/*import { remote } from 'electron';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';*/

import { TitleBar } from './TitleBar';
import { Canvas } from './Canvas';
import { Footer } from './Footer';

interface ComponentProps {
}

export class App extends React.Component<ComponentProps, {}> {
    /*constructor(props, context) {
        super(props, context);
    }*/
    render() {
        return (
            <div className="window">
                <TitleBar/>
                <Canvas/>
                <Footer/>
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