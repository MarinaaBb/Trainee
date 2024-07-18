

//Cuándo MOUSE OVER en cada .Contenedor-titulo
//le ADD isVisible  a cada .Contenedor-img


const contenedor = document.querySelector(`.Contenedor`);
const titulos = contenedor.querySelectorAll(`.Contenedor-titulo`);
const containerImg = document.querySelectorAll(`.Contenedor-img`);


console.log(titulos)
console.log(containerImg)




const tituloEachHandler = (_, index) => {


    const titulosOverHandler = () => {

        containerImg[index].classList.add(`isVisible`)

    }


    const titulosOutHandler = () => {

        containerImg[index].classList.remove(`isVisible`)

    }



    titulos[index].addEventListener(`mouseover`, titulosOverHandler)
    

    titulos[index].addEventListener(`mouseout`, titulosOutHandler )



}



titulos.forEach( tituloEachHandler )





