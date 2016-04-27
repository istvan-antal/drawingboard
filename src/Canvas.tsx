import React = require('react');

interface ComponentProps {
    onmousemove: any,
    targetX: number,
    targetY: number
}

export class Canvas extends React.Component<ComponentProps, { stuff: any }> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            stuff: [ ]
        };
    }
    handleClick() {
        const newState = Object.assign({}, this.state);
        newState.stuff.push({
            type: 'rect',
            props: {
                y: this.props.targetY,
                x: this.props.targetX,
                width: "50",
                height: "30",
                fill: "#000"
            }
        });
        this.setState(newState);
    }
    render() {
        const stuff = this.state.stuff.map((item, index) => {
            return React.createElement(item.type, Object.assign({}, item.props, { key: index }));
        });
        return (
            <svg onMouseMove={this.props.onmousemove} onClick={this.handleClick.bind(this)} className="window-content">
                {stuff}
            </svg>
        );
    }
}