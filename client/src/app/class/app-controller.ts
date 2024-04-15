export class AppController {
    static Admin: string = 'admin';
    static Student: string = 'student';
    static Faculty: string = 'faculty';
    static Users: string = 'users';

    static School: string = 'school';
    static Subject: string = 'subject';
    static Standard: string = 'standard';

    static Count: string = ':count';
    static Id: string = ':id';
    static Add: string = 'add';
    static All: string = 'all';

    static getRoute(...items: string[]) {
        let URL = items.join('/');
        return URL;
    }
}