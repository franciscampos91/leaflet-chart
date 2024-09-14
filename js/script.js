
/**
 * LEAFLET
 */

var map = L.map('map').setView([-23.810292, -47.727855], 13); // Coordenadas centrais de Pilar do Sul

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Função para carregar o arquivo JSON
fetch('data/enderecos.json')
    .then(response => response.json())
    .then(data => {
        data.enderecos.forEach(function(local) {
            // Adiciona o marcador para cada endereço no mapa
            var marker = L.marker([local.lat, local.lon]).addTo(map);
            
            // Adiciona um popup com o endereço
            marker.bindPopup(`<b>${local.endereco}</b>`).openPopup();
        });
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });


