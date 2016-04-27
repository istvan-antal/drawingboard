import React = require('react');

export class TitleBar extends React.Component<{}, {}> {
    render() {
        return (
            <header className="toolbar toolbar-header">
                <h1 className="title">Drawing Board</h1>
                <div className="toolbar-actions">
                    <div className="btn-group">
                        <button className="btn btn-default active">
                            <span className="icon icon-cloud"></span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}