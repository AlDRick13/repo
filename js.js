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

}
function resetForm(){
    document.getElementById('user-form').reset();
}
printCars(preloadedCars);