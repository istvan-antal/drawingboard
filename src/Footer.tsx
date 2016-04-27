import React = require('react');

export class Footer extends React.Component<{}, {}> {
    render() {
        return (
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
        );
    }
}