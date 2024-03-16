export class AppRoute {
    static Dashboard: string = 'dashboard';
    static Holiday: string = 'holiday';
    static Login: string = 'login';
    static Attendance: string = 'attendance';
    static TimeTable: string = 'timetable';
    static Profile: string = 'profile';
    static Standard: string = 'standard';
    
    static Add: string = 'add';
    static All: string = 'all';
    static List: string = 'list';

    static getRoute(...items: string[]) {
        let URL = items.join('/');
        return URL;
    }
};
