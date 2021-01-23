import * as moment from 'moment';
export interface customeDay {
    title: string;
    date : moment.Moment;
}
export interface modifiedDay{
    year: Number;
    freeDays: Array<customeDay>;
    workDays: Array<customeDay>;
}


