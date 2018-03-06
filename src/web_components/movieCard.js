export class MovieCard extends HTMLElement {

    createdCallback() {
        this.innerHTML = MovieCard.template;
        this.imageSection = this.querySelector('.image-place');
        this.mainInfoSection = this.querySelector('.main-info');
        this.descriptionSection = this.querySelector('.description');
    };

    attributeChangedCallback(attr, oldVal, newVal) {

    };

    changeMovie(movie) {
        this.addMovieImg(movie.Poster);
        this.addMovieInfo(movie);
    }

    addMovieImg(url) {
        let imgElement = document.getElementById('img');
        if (imgElement) {
            imgElement.src = url;
        } else {
            imgElement = document.createElement('img');
            imgElement.id = 'img';
            imgElement.src = url;
            this.imageSection.appendChild(imgElement);
        }
    }

    addMovieInfo(movie) {
        let titleElem = document.getElementById('title');
        let actorsElem = document.getElementById('actors');
        let directorElem = document.getElementById('director');
        let descriptionElem = document.getElementById('description');

        if (titleElem || actorsElem || directorElem || descriptionElem) {
            titleElem.innerHTML = movie.Title;
            actorsElem.innerHTML = 'Actors: ' + movie.Actors;
            directorElem.innerHTML = 'Director: ' + movie.Director;
            descriptionElem.innerHTML = '<b>Short description:</b><br>' + movie.Plot;
        } else {
            titleElem = document.createElement('h1');
            titleElem.id = 'title';
            titleElem.innerHTML = movie.Title;

            actorsElem = document.createElement('p');
            actorsElem.id = 'actors';
            actorsElem.innerHTML = 'Actors: ' + movie.Actors;

            directorElem = document.createElement('p');
            directorElem.id = 'director';
            directorElem.innerHTML = 'Director: ' + movie.Director;

            descriptionElem = document.createElement('p');
            descriptionElem.id = 'description';
            descriptionElem.className = 'description-elem';
            descriptionElem.innerHTML = '<b>Short description:</b><br>' + movie.Plot;

            this.mainInfoSection.appendChild(titleElem);
            this.mainInfoSection.appendChild(actorsElem);
            this.mainInfoSection.appendChild(directorElem);
            this.mainInfoSection.appendChild(descriptionElem);
        }
    }
}
MovieCard.template = `
<div class="movie-card">
    <div class="header-section">
        <div class="image-place">
        </div>
        <div class="main-info">
        </div>
    </div>
    <div class="description">
    </div>
</div>`;
