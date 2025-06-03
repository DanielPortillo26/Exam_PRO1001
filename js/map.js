document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([60.472, 8.4689], 6); // Central Norway

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Real farms coordinates to be marked in the map using OpenStreetMap API
  const farms = [
    {
      name: "Krukkegården",
      coords: [59.66061247856853, 10.732730164371144],
    },
    {
      name: "Breivoll Gårdskafe",
      coords: [59.7378900206473, 10.72923220666117],
    },
    {
      name: "Østre Treider Gård",
      coords: [59.66108181542558, 10.734441945924198],
    },
    {
      name: "Lykkegården",
      coords: [59.5415298217236, 11.123201107846064],
    },
  ];

  farms.forEach((farm) => {
    L.marker(farm.coords).addTo(map).bindPopup(`<strong>${farm.name}</strong>`);
  });
});
