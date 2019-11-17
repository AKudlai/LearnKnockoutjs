﻿///<reference path="../knockout/knockout-3.4.2.js"/>

class Employee {
    constructor() {
        this.firstName = ko.observable('Alex');
        this.lastName = ko.observable('Trust');
        this.age = ko.observable(18);
        this.email = ko.observable('alex@trust.com');
        this.salary = ko.observable(100500);
        this.hired = ko.observable(true);
        this.fired = ko.observable(false);
    }
}

this.ko.applyBindings(new Employee());