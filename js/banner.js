
const bannerImages = [
    '../image/slide1.jpg',
    '../image/slide2.jpg',
    '../image/slide3.jpg',
    '../image/slide4.jpg',
    '../image/slide5.jpg',
    '../image/slide6.jpg',
    // add here
];

const backgroundColors = [
    'yellow',
    '#220000',
    '#330000',
    '#440000',
    '#550000',
];

const contentContainer = document.getElementById('contentContainer');
const indicatorParent = document.getElementById('pageIndicator');
const frontImage = document.getElementById('frontImage');
const backImage = document.getElementById('backImage');

let autoPagingStopped = false;
let currentImageIndex = 0;
let currentBackColorIndex = 0;
const IMAGE_INDEX_MAX = bannerImages.length - 1;
const BACKCOLOR_INDEX_MAX = backgroundColors.length - 1;
const normalIndicatorColor = 'red';
const hightlightIndicatorColor = 'blue';

const createDot = (size) => {
    const dot = document.createElement('div');
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.borderRadius = `${size / 2}px`;
    dot.style.backgroundColor = normalIndicatorColor;
    dot.style.marginRight = '5px';
    return dot;
}

const renderPageIndicator = () => {
    const dotCount = bannerImages.length;
    for(let i=0; i<dotCount; i++) {
        const newDot = createDot(10);
        if(i === currentImageIndex) {
            newDot.style.backgroundColor = hightlightIndicatorColor;
        }
        indicatorParent.appendChild(newDot);
    }
}

const updateAll = () => {
    const indicators = [...indicatorParent.children];
    indicators.forEach((item, idx) => {
        if(idx === currentImageIndex) {
            item.style.backgroundColor = hightlightIndicatorColor;
        } else {
            item.style.backgroundColor = normalIndicatorColor;
        }
    });
    
    frontImage.setAttribute('src', bannerImages[currentImageIndex]);
    if(currentImageIndex === IMAGE_INDEX_MAX) {
        backImage.setAttribute('src', bannerImages[0]);
    } else {
        backImage.setAttribute('src', bannerImages[currentImageIndex + 1]);
    }

    contentContainer.style.backgroundColor = backgroundColors[currentBackColorIndex];
}

const onLeftButtonClicked = () => {
    console.log('left button clicked.');
    if(currentImageIndex === 0) {
        currentImageIndex = IMAGE_INDEX_MAX;
    } else {
        currentImageIndex--;
    }
    if(currentBackColorIndex === 0) {
        currentBackColorIndex = BACKCOLOR_INDEX_MAX;
    } else {
        currentBackColorIndex--;
    }
    updateAll();
}

const nextAction = () => {
    if(currentImageIndex === IMAGE_INDEX_MAX) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    if(currentBackColorIndex === BACKCOLOR_INDEX_MAX) {
        currentBackColorIndex = 0;
    } else {
        currentBackColorIndex++;
    }
    updateAll();
}

const onRightButtonClicked = () => {
    console.log('right button clicked.');
    nextAction();
}

const onStopButtonClicked = () => {
    console.log('stop button clicked.');
    autoPagingStopped = !autoPagingStopped;
}

const renderPageController = () => {
    const createButton = (text) => {
        const newButton = document.createElement('div');
        newButton.style.width = '50px';
        newButton.style.height = '50px';
        newButton.style.borderRadius = '25px';
        newButton.style.backgroundColor = 'blue';
        newButton.textContent = text;
        return newButton;
    }

    const pageController = document.getElementById('pageController');
    const leftButton = createButton();
    const rightButton = createButton();
    const stopButton = createButton();
    pageController.appendChild(leftButton);
    pageController.appendChild(rightButton);
    pageController.appendChild(stopButton);

    leftButton.addEventListener('click', onLeftButtonClicked);
    rightButton.addEventListener('click', onRightButtonClicked);
    stopButton.addEventListener('click', onStopButtonClicked);
}

const intervalHandler = () => {
    if(autoPagingStopped === false) {
        nextAction();
    }
}

export const renderBanner = () => {
    renderPageIndicator();
    renderPageController();

    updateAll();

    const timerId = setInterval(intervalHandler, 500);
    console.log('timer created : ', timerId);
}
