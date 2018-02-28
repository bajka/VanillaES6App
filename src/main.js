import Config from './config/app_config';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './main.css';

export class MovieApp{
    constructor(){
        let test = 1;
        console.log(`Test, Hello word: ${test + test}, and ${Config.appName}`);
    }

    setupApplication() {

    }
    setupListeners() {

    }
    findMovie() {

    }

}

window.addEventListener('load', () => new MovieApp());