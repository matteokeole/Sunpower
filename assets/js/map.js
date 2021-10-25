// Leaflet map
const map = L.map("map",{scrollWheelZoom: false}).setView([43.618, 3.877], 13);
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
	attribution: "Map data &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
	maxZoom: 18,
	id: "mapbox/streets-v11",
	tileSize: 512,
	zoomOffset: -1,
	accessToken: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
}).addTo(map);

// Markers
L.marker([43.6038423422097, 3.91413688659668]).addTo(map).bindPopup("Montpellier (Odysseum)").openPopup();
L.marker([43.639542066440114, 3.872637748718262]).addTo(map).bindPopup("Montpellier (Zoo de Lunaret)");
L.marker([43.6016669758835, 3.877133131027222]).addTo(map).bindPopup("Montpellier (Gare Saint-Roch)");
L.marker([43.61033689649172, 3.8399577140808105]).addTo(map).bindPopup("Montpellier (Géant Casino / à proximité de l'A75)")