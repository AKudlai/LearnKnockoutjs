///<reference path="../knockout/knockout-3.4.2.js"/>

class Employee {
    constructor() {
        firstName = ko.observable('');
        lastName = ko.observable('');
        age = ko.observable();
        email = ko.observable('');
        salary = ko.observable();
        hired = ko.observable();
        fired = ko.observable();
    }
}