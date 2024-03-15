export class AppRoute {
    static Dashboard: string = 'dashboard';
    static Holiday: string = 'holiday';
    static Login: string = 'login';
    static Attendance: string = 'attendance';
    static TimeTable: string = 'timetable';
    static Profile: string = 'profile';
    static Add: string = 'add';
    static Standard: string = 'standard';

    static getRoute(...items: string[]) {
        let URL = items.join('/');
        return URL;
    }
};
