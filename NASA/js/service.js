const apiKey = 'olt9u3kQQQb2zjNotJdqyuPUxi1gdZYC7KlmwUi3';
const sol = 1000; // El número de sol que deseas consultar
var cont = 0;

// URL del API de la NASA
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`;
//const apiUrl = `js/data.json`;

// Realizar una solicitud GET utilizando Fetch API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud al API');
    }
    return response.json();
  })
  .then((data) => {
    // Los datos de las fotos se encuentran en el objeto 'data'
    console.log(data);
    data.photos.forEach(element => {
      var newDiv = document.createElement('div');
      var newImg = document.createElement('img');
      newDiv.className = 'divImagenes';
      newImg.className = 'imagenes'
      document.getElementById('container').appendChild(newDiv);
      newImg.src = data.photos[cont].img_src;
      newDiv.appendChild(newImg);
      cont++;

    });
    //data[0].img_src
    //document.getElementById("imagen").src = data.photos[0].img_src;
    data.photos[0].img_src
    // Aquí puedes procesar los datos o mostrar las imágenes en tu aplicación
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });