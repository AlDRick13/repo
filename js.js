const preloadedCars = [
    {
        id: 0,
        marca: 'Nissan',
        modelo: 'Tsuru',
        color: 'blanco',
        año: 2002,
        precio: '$20000',
        image: 'https://i.pinimg.com/originals/89/8b/a8/898ba88dd483f7a85088006554ca5243.jpg'
    }
]

function printCars(carsData){
    const container = document.getElementById('cars-container');
    container.innerHTML = ('');
    carsData.forEach((car) => {
        const htmlCar = `<tr>
                    <td><img class="img-table" src=${car.image} alt=${car.modelo}></td>
                    <td>${car.marca}</td>
                    <td>${car.modelo}</td>
                    <td>${car.color}</td>
                    <td>${car.año}</td>
                    <td>${car.precio}</td>
                    <td>
                        <button class="btn-danger">Eliminar</button>
                        <button class="btn-warning">Editar</button>
                    </td>
                </tr>`;
                container.innerHTML += htmlCar;
    })
}

function addCar(){
    const inputMarca = document.getElementById('marca');
    const inputModelo = document.getElementById('modelo');
    const inputColor = document.getElementById('color');
    const inputAño = document.getElementById('año');
    const inputPrecio = document.getElementById('precio');
    const inputLinkImg = document.getElementById('link-img');
    const carMarca = inputMarca.value;
    const carModelo = inputModelo.value;
    const carColor = inputColor.value;
    const carAño = inputAño.value;
    const carPrecio = inputPrecio.value;
    const linkImg = inputLinkImg.value;
    const newCar = {
        id: 0,
        marca: carMarca,
        modelo: carModelo,
        color: carColor,
        año: carAño,
        precio: carPrecio,
        image: linkImg, 
        }
        preloadedCars.push(newCar);
        printCars(preloadedCars);
        resetForm();

}
function resetForm(){
    document.getElementById('user-form').reset();
}
printCars(preloadedCars);