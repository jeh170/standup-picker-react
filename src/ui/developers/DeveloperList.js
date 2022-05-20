import React from "react";
import RosterService from "./services/RosterService.js"
import DeveloperCard from "./DeveloperCard";

export default class DeveloperList extends React.Component {
    developers = []
    
    constructor(props, developerService = new RosterService()) {
        super(props);
        this.developerService = developerService;
        this.updateDevList = this.updateDevList.bind(this); 
    }

    updateDevList() {
        this.developers = RosterService.getDevelopers();
        console.log(this.developers);
    }

    render() {
        this.updateDevList();
        return (
            <div>
                {this.developers.map(developer => {
                    return <DeveloperCard dev={developer}/>;
                })}
            </div>
        );
    }
}