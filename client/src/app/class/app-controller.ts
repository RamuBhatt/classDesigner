export class AppController {
    static Admin: string = 'admin';
    static Student: string = 'student';
    static Faculty: string = 'faculty';
    static Users: string = 'users';

    static Count: string = ':count';
    static Add: string = 'add';
    static All: string = 'all';

    static getRoute(...items: string[]) {
        let URL = items.join('/');
        return URL;
    }
}