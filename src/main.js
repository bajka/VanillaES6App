import Config from './config/app_config';
import { MovieCard } from './web_components/movieCard';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './main.css';

export class MovieApp {
    constructor() {
        let test = 1;
        console.log(`Test, Hello word: ${test + test}, and ${Config.appName}`);
        this.registerCustomComponent();
        this.setupApplication();
        this.setupListeners()
    }

    registerCustomComponent() {
        document.registerElement('movie-card', MovieCard);
    }
    setupApplication() {
        this.movieContainer = document.getElementById('movie-container');
        this.searchInput = document.getElementById('search-input');
        this.randomSearchButton = document.getElementById('random-search');
    }
    setupListeners() {
        this.randomSearchButton.addEventListener('click', () => this.findMovie(true));
        this.searchInput.addEventListener('keyup', () => this.findMovie(false));
    }
    findMovie(randomSearch) {
        if (randomSearch) {
            // RandomSearch to implement
            console.log('RandomSearch to implement');
        } else {
            // Debounce to implement
        }
    }

}

window.addEventListener('load', () => new MovieApp());