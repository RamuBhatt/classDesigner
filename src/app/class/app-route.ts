export class AppRoute {
    static Dashboard: string = 'dashboard';
    static Holiday: string = 'holiday';
    static Login: string = 'login';
    static Attandance: string = 'attandance';
    static TimeTable: string = 'timetable';

    static getRoute(...items: string[]) {
        let URL = items.join('/');
        return URL;
    }
};