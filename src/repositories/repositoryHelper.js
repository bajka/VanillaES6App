import Config from './../config/app_config';

export class Helper {
    static buildServiceBaseString(){
        let url = Config.connectionString;
        let connectionString = url.replace('KEY', Config.appKey);
        return connectionString;
    }
}