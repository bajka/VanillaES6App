import { Helper } from './repositoryHelper';

export class MovieRepository{
    constructor(){
        this.serviceBase = Helper.buildServiceBaseString();
    }

    getMovie(title){
        const url = this.serviceBase + 't=' + title;
        return fetch(url).then( (response) => response.json());
    }
    getRandomly(){

    }
}