import * as moment from 'moment';
export interface CustomeDay {
    title: string;
    date: moment.Moment;
}
export interface ModifiedDay{
    year: number;
    freeDays: Array<CustomeDay>;
    workDays: Array<CustomeDay>;
}


