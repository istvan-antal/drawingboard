import React = require('react');

interface ComponentState {
    activeItem: string
}

export class TitleBar extends React.Component<{}, ComponentState> {
    private items = [
        { name: 'select', icon: 'mouse' },
        { name: 'rect', icon: 'cloud' }
    ];
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeItem: 'select'
        };
    }
    render() {
        const items = this.items.map((item, index) => {
            const className = "icon icon-" + item.icon;
            let buttonClasses = "btn btn-default";
            if (item.name === this.state.activeItem) {
                buttonClasses += " active";
            }
            return <button key={index} onClick={ () => { this.setState({  activeItem: item.name }) } } className={buttonClasses}>
                <span className={className}></span>
            </button>
        });
        return (
            <header className="toolbar toolbar-header">
                <h1 className="title">Drawing Board</h1>
                <div className="toolbar-actions">
                    <div className="btn-group">
                        {items}
                    </div>
                </div>
            </header>
        );
    }
}