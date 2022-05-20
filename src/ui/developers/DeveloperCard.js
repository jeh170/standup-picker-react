import React from "react"

export default class DeveloperCard extends React.Component {
    render() {
        const dev = this.props;
        let name = '';
        let image = '';
        if (dev) {
            name = dev.name;
            image = dev.image;
        }
        return (
            <div>
                <div>{name}</div>
                <img src={image} alt={dev.name} width='100' height='100'/>
            </div>
        );
    }
}