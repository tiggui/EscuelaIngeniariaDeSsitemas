function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

async function perrito(){
    var respuesta =await fetch("https://dog.ceo/api/breeds/image/random");
    var respuestajson = await respuesta.json();

    console.log(respuestajson);

    var imagen =  respuestajson.message;
    var imagenincrustada = document.querySelector('.contenedorimg');
    imagenincrustada.innerHTML="<img style='width: 600px' src='"+imagen+"'>"; 

}

perrito();