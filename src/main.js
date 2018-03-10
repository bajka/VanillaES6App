import Config from './config/app_config';
import { MovieCard } from './web_components/movieCard';
import { MovieRepository } from './repositories/movieRepository';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './main.css';

export class MovieApp {
    constructor() {
        let test = 1;
        this.movieRepository = new MovieRepository();
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
        this.searchInput.addEventListener('keyup', this.debounce(this.findMovie.bind(this), 500));
    }
    findMovie(randomSearch = false) {
        if (randomSearch) {
            // RandomSearch to implement
            console.log('RandomSearch to implement');
        } else {
            const movieTitle = this.searchInput.value;
            this.movieRepository.getMovie(movieTitle).then((movie) => this.displayMovie(movie));
        }
    }
    debounce(fn, time) {
        let timeout;

        return function (...args) { // <-- not an arrow function
            const functionCall = () => fn.apply(this);

            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
        }
    }
    displayMovie(movie) {
        if (movie.Response == 'False') {
            this.displayError();
            return
        }
        let errorElement = document.getElementById('error');
        if (errorElement) {
            this.movieContainer.removeChild(errorElement);
        }
        let movieComponent = document.getElementById('movie-card');
        if (!movieComponent) {
            movieComponent = document.createElement('movie-card');
            movieComponent.id = 'movie-card';
            this.movieContainer.appendChild(movieComponent);
        }
        movieComponent.changeMovie(movie);
    }
    displayError() {
        let movieComponent = document.getElementById('movie-card');
        if (movieComponent) {
            this.movieContainer.removeChild(movieComponent);
        };
        let errorMessage = document.getElementById('error');
        if(!errorMessage) {
            errorMessage = document.createElement('h2');
            errorMessage.id = 'error';
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = 'There\'s no movie with this title';
            this.movieContainer.appendChild(errorMessage);
        }
    }

}

window.addEventListener('load', () => new MovieApp());