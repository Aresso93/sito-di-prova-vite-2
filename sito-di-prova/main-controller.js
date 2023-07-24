import confetti from "canvas-confetti";

export class MainController{

    constructor(){

    }

    render(){

    const header = document.querySelector('header');
    
    const headerImage = document.createElement('img');
    headerImage.src = 'https://www.shutterstock.com/image-vector/good-news-banner-colorful-paper-260nw-1162094869.jpg'
    header.appendChild(headerImage);

    const mainContainer = document.getElementById('main-container');
    const buttonDP = document.createElement('button');
    buttonDP.appendChild(document.createTextNode('EVVIVA EVVIVONA!!'));
    buttonDP.addEventListener("click", () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
    })
    mainContainer.appendChild(buttonDP);
    }
}

