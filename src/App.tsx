import React = require('react');
/*import { remote } from 'electron';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';*/

interface ComponentProps {
}

export class App extends React.Component<ComponentProps, {}> {
    /*constructor(props, context) {
        super(props, context);
    }*/
    render() {
        return <div className="window">
            <header className="toolbar toolbar-header">
                <h1 className="title">Header with actions</h1>
                <div className="toolbar-actions">
                    <div className="btn-group">
                        <button className="btn btn-default">
                            <span className="icon icon-home"></span>
                        </button>
                        <button className="btn btn-default">
                            <span className="icon icon-folder"></span>
                        </button>
                        <button className="btn btn-default active">
                            <span className="icon icon-cloud"></span>
                        </button>
                        <button className="btn btn-default">
                            <span className="icon icon-popup"></span>
                        </button>
                        <button className="btn btn-default">
                            <span className="icon icon-shuffle"></span>
                        </button>
                    </div>

                    <button className="btn btn-default">
                        <span className="icon icon-home icon-text"></span>
                        Filters
                    </button>

                    <button className="btn btn-default btn-dropdown pull-right">
                        <span className="icon icon-megaphone"></span>
                    </button>
                </div>
            </header>
            <div className="window-content">
                Hello
            </div>
            <footer className="toolbar toolbar-footer">
                <div className="toolbar-actions">
                    <button className="btn btn-default">
                        Cancel
                    </button>

                    <button className="btn btn-primary pull-right">
                        Save
                    </button>
                </div>
            </footer>
        </div>
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