const {createApp} = Vue;

createApp({
    data(){
        return{
            stati:{
                images: [
                    'img/sweden.jpg', 'img/peru.jpg', 'img/chile.jpg', 'img/argentina.jpg', 'img/colombia.jpg'
                ],
                title: [
                    'Svezia', 'Perù', 'Chile', 'Argentina', 'Colombia'
                ],
                description: [
                    'Svezia: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
                    'Perù: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.', 
                    'Chile: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
                    'Argentina: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
                    'Colombia: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                ]

            },
            activeImage: 0
        }
    },
    methods:{
        cahangeImage(index){
            this.activeImage = index;
        },
        next() {
            this.activeImage++;
        },
        prev() {
            this.activeImage--;
        }

    }
}).mount('#app')

// const images = [
//     {
//         img: 'img/sweden.jpg',
//         title: 'Svezia',
//         description: 'Svezia: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
//     },

//     {
//         img: 'img/peru.jpg',
//         title: 'Perù',
//         description: 'Perù: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
//     },

//     {
//         img: 'img/chile.jpg',
//         title: 'Chile',
//         description: 'Chile: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
//     },
//     {
//         img: 'img/argentina.jpg',
//         title: 'Argentina',
//         description: 'Argentina: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
//     },
//     {
//         img: 'img/colombia.jpg',
//         title: 'Colombia',
//         description: 'Colombia: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
//     },
// ];

// // ELEMENTS
// const containerSlider = document.querySelector('.my-carousel-container');
// const containerImages = document.querySelector('.my-carousel-images');
// const containerThumb = document.querySelector('.my-thumbnails .inner');

// // DEFAULT DATA
// let counterImages = 0;
// let isOverSlider = false;
// let isNextDirection = true;

// // BUTTONS
// const nextBtn =  document.querySelector('.my-next-hook');
// const prevBtn =  document.querySelector('.my-prev-hook');
// nextBtn.isNext = true; // custom propreità che legggo al click
// prevBtn.isNext = false; // custom propreità che legggo al click
// nextBtn.addEventListener('click', handleNextPrev);
// prevBtn.addEventListener('click', handleNextPrev);

// // EVENTS
// containerSlider.addEventListener('mouseenter', () =>{
//     isOverSlider = true;
// })
// containerSlider.addEventListener('mouseleave', () =>{
//     isOverSlider = false;
// })
// containerImages.addEventListener('dblclick', () => {
//     isNextDirection = !isNextDirection; // toggle della booleana che mi inverte la direzione
// })
// document.addEventListener('keypress', (event) => {
//     // intercetto il codice della barra spaziatrice
//     if(event.code === 'Space'){
//         isOverSlider = !isOverSlider; // toggle della booleana che mi fa andare o meno l'autoscroll
//     }
// })


// init();

// function init(){
    
//     // RESET
//     containerImages.innerHTML = '';
//     containerThumb.innerHTML = '';

//     // ciclo l'array di immafini e stampo le immagini
//     // ad ogni clico aggiungo il blocco HTML delle immagini ai contenitori
//     images.forEach( (image, index) => {
//         containerImages.innerHTML += getTemplateImage(image);
//         containerThumb.innerHTML += getTemplateThumb(image, index);
//     })

//     activateImage();

// }

// // funzione richiamata da next e prev btn
// function handleNextPrev(){
//     /*
//     1. disattivo le immagini a indice counterImages
//     2. incremento o decremento counterImages
//     3. attivate le immagini a indice counterImages  
//     */
//     deactivateImage();
//     nextPrev(this.isNext)
//     activateImage();
// }

// // funzione richiamata dal click di prev  o next e dall'autoscroll
// function nextPrev(isNext){
//     if(isNext){
//         counterImages++;
//         if(counterImages === images.length) counterImages = 0;
//     }else{
//         counterImages--;
//         if(counterImages < 0) counterImages = images.length - 1;
//     }
// }

// function activateImage(){
//     // dalla collection delle immagini e delle thumb prendo l'elemto con indice counterImages e gli aggiungo la classe active
//     document.getElementsByClassName('my-carousel-item')[counterImages].classList.add('active');
//     document.getElementsByClassName('my-thumbnail')[counterImages].classList.add('active');
// }
// function deactivateImage(){
//     // dalla collection delle immagini e delle thumb prendo l'elemto con indice counterImages e gli rimuovo la classe active
//     document.getElementsByClassName('my-carousel-item')[counterImages].classList.remove('active');
//     document.getElementsByClassName('my-thumbnail')[counterImages].classList.remove('active');
// }

// // genero il template HTML per le immagini e lo restituisco compilato dei dati dinamici
// function getTemplateImage(image){
//     const {img, title, description} = image;

//     return `
//     <div class="my-carousel-item" >
//         <img class="img-fluid" src="${img}" alt="${title}  picture">
//         <div class="item-description px-3">
//             <h2>${title}</h2>
//             <p>${description}</p>
//         </div>
//     </div>
//     `
// }

// // genero il template HTML per le thumb e lo restituisco compilato dei dati dinamici
// // passo lindice dell'array per poterlo passare alla funzione del click della thumb
// function getTemplateThumb(image, index){
//     const {img, title} = image;

//     return `
//     <div class="my-thumbnail" onclick="hendleThumb(${index})">
//         <img class="img-fluid" src="${img}" alt="Thumbnail of ${title} picture">
//     </div>
//     `
// }

// // ricevo dal click della thumb l'index per valorizzare il contatore in base al suo indice
// function hendleThumb(index){
//     deactivateImage();
//     counterImages = index;
//     activateImage();
// }

// setInterval(()=>{

//     // se isOverSlider è true vuol dire che il mouse è sopra lo slider o che ho premuto la barra spaziatrice quindi non verranno chiamate le funzioni dell'autoscroll
//     if(!isOverSlider){
//         deactivateImage();
//         // isNextDirection è true o false in base al doppio click dell'immagine
//         nextPrev(isNextDirection);
//         activateImage();
//     }

// },2000);