export class MovieCard extends HTMLElement {

    createdCallback() {
        console.log('Component created');
    };

    attributeChangedCallback(attr, oldVal, newVal) {
        
    };
}
MovieCard.template = '<p>Test</p>';
