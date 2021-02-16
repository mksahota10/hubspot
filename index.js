const axios = require('axios');
const moment = require("moment");
const _ = require("lodash");

// 2 day event
// dates are 2017-05-03
// date for the country is starting date of two day period where most partners can attend both days in a row
// if multiple dates with same number of partners, pick the earlier date. 
// if no two days in a row when any partners can make it, return null.

class Scheduler {
    constructor() {
        this.dates = [];
        this.days = 366; //assumed to be within a year
        this.beginningOfYear = moment("2017-01-01");

        for (let i = 0; i < this.days; i++) {
            this.dates.push([]);
        }
    }