var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 6000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

// Enable smooth horizontal scrolling with the mouse wheel
document.querySelectorAll('.scroll-container').forEach((container) => {
    container.addEventListener('wheel', (event) => {
        // Only trigger horizontal scroll if the user is scrolling vertically
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            // Prevent default vertical scroll ONLY if the container can actually scroll further
            const canScrollLeft = container.scrollLeft > 0;
            const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
            
            if ((event.deltaY > 0 && canScrollRight) || (event.deltaY < 0 && canScrollLeft)) {
                event.preventDefault();
                container.scrollBy({
                    left: event.deltaY * 2.5, // Faster, more natural scroll speed
                    behavior: 'auto', // 'auto' feels more responsive for wheel input
                });
            }
        }
    }, { passive: false });
});
