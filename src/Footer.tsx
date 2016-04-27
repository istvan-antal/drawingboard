import React = require('react');

interface ComponentProps {
    targetX: number,
    targetY: number
}

export class Footer extends React.Component<ComponentProps, {}> {
    render() {
        return (
            <footer className="toolbar toolbar-footer">
                { this.props.targetX },{ this.props.targetY }
            </footer>
        );
    }
}