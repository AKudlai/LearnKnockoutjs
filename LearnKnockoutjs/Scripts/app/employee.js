/// <reference path="../knockout/knockout-3.4.2.js"/>
/// <reference path="../knockout/knockout-mapping.js" />
/// <reference path="../knockout/knockout-3.4.2.debug.js" />

class Employee {
    constructor() {
        this.firstName = ko.observable('Alex');
        this.lastName = ko.observable('Trust');
        this.age = ko.observable(18);
        this.email = ko.observable('alex@trust.com');
        this.salary = ko.pureComputed(() => this.selectedPosition() ? this.selectedPosition().salary : '');
        this.hired = ko.observable(false);
        this.fired = ko.observable(false);
        this.position = ko.observableArray([
            { name: 'Developer', salary: 200 }, 
            { name: 'QA', salary: 100 }, 
            { name: 'BA', salary: 150 }, 
            { name: 'Sales Manager', salary: 180 }, 
            { name: 'Scrum Master', salary: 160 },
            { name: 'Not Defined', salary: null }]);
        this.selectedPosition = ko.observable(false);
    }

    setHiredCheckbox(data, event) {
        if (event.target.value === '') {
            this.hired(false);
        } else {
            this.hired(true);
        }

    }

    setFiredCheckbox(data, event) {
        if (event.target.value === '') {
            this.fired(false);
        } else {
            this.
                fired(true);
        }
    }

    showSelectedPosition(data, event) {
        if (this.selectedPosition()) {
            alert(this.selectedPosition().name);
        }
    }
}