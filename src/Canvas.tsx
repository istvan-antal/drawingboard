import React = require('react');

export class Canvas extends React.Component<{ onmousemove: any }, {}> {
    render() {
        return (
            <div onMouseMove={this.props.onmousemove} className="window-content">
            </div>
        );
    }
}