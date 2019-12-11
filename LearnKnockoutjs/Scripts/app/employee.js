/// <reference path="../knockout/knockout-3.4.2.js"/>
/// <reference path="../knockout/knockout-mapping.js" />
/// <reference path="../knockout/knockout-3.4.2.debug.js" />

class Employee {
    constructor() {
        this.firstName = ko.observable('Alex');
        this.lastName = ko.observable('Trust');
        this.age = ko.observable(18);
        this.email = ko.observable('alex@trust.com');
        this.salary = ko.observable(100500);
        this.hired = ko.observable(false);
        this.fired = ko.observable(false);
        this.position = ko.observableArray(['Developer', 'QA', 'BA', 'Sales Manager', 'Scrum Master', 'Not Defined']);
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
            alert(this.selectedPosition());
        }
    }
}