// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MinHubs {
    struct Project {
        string name;
        string symbol;
        uint price;
        address contractAddress;
        address owner;
        string uri;
    }

    mapping (address => Project[]) public projects;


    function addProject(
        string memory _name, 
        string memory _symbol,
        uint256 _price,
        address _contractAddress,
        string memory _uri ) public {

            Project memory newProject;
            newProject.name = _name;
            newProject.symbol = _symbol;
            newProject.price = _price;
            newProject.contractAddress = _contractAddress;
            newProject.owner = msg.sender;
            newProject.uri = _uri;

            projects[msg.sender].push(newProject);

        }
    
    function noOfProjects() public view returns(uint) {
        //Projects[] memory allProjects = new Projects;
        return projects[msg.sender].length;
    }

    function viewProjects() public view returns(Project[] memory) {
        //Projects[] memory allProjects = new Projects;
        return projects[msg.sender];
    }
}


