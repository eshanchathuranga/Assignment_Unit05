// Showing and hiding sections
function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(menu => {
        menu.style.display = 'none'
    })
   const section = document.querySelector(sectionId)
    section.style.display = 'block'  
}
// Adding animation to home welocome photos
let currentIndex = 0;
const images = document.querySelectorAll('.home .container .photos img');
if(currentIndex <= images.length){
    setInterval(() => {
    images[currentIndex].classList.add('hidden');
        currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
images[currentIndex].classList.remove('hidden');
}, 2500);
}

// Showing and hiding sections
function showCat(CatId) {
    document.querySelectorAll('.cat').forEach(menu => {
        menu.style.display = 'none'
    })
    const section = document.querySelector(CatId)
    section.style.display = 'block' 
}
// show and hide list catogery
function showList(listId) {
    document.querySelectorAll('.list').forEach(menu => {
        menu.style.display = 'none'
    })
    const section = document.querySelector(listId)
    section.style.display = 'flex' 
}
