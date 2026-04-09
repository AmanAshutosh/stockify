function loadImages() {
  let images = JSON.parse(localStorage.getItem("images")) || [];

  // If no uploaded images → load rich demo data
  if (images.length === 0) {
    images = [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        title: "Nature",
        price: 200,
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        title: "Ocean",
        price: 300,
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        title: "Mountains",
        price: 250,
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
        title: "City",
        price: 180,
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        title: "Landscape",
        price: 400,
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        title: "Sky",
        price: 220,
      },

      {
        id: 7,
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        title: "Forest",
        price: 210,
      },
      {
        id: 8,
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        title: "Beach",
        price: 320,
      },
      {
        id: 9,
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        title: "Snow",
        price: 280,
      },
      {
        id: 10,
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        title: "Sunset",
        price: 350,
      },

      {
        id: 11,
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        title: "Hills",
        price: 260,
      },
      {
        id: 12,
        url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
        title: "Road",
        price: 190,
      },
      {
        id: 13,
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        title: "River",
        price: 230,
      },
      {
        id: 14,
        url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
        title: "Desert",
        price: 310,
      },

      {
        id: 15,
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        title: "Cliffs",
        price: 275,
      },
      {
        id: 16,
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        title: "Green",
        price: 200,
      },
      {
        id: 17,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        title: "Waves",
        price: 330,
      },
      {
        id: 18,
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        title: "Clouds",
        price: 210,
      },

      {
        id: 19,
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        title: "Valley",
        price: 370,
      },
      {
        id: 20,
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        title: "Trees",
        price: 220,
      },
    ];
  }

  render(images);
}
function searchImages() {
  const query = document.getElementById("search").value.toLowerCase();
  let images = JSON.parse(localStorage.getItem("images")) || [];

  let filtered = images.filter((img) =>
    img.title.toLowerCase().includes(query),
  );

  render(filtered);
}

function render(images) {
  const container = document.getElementById("gallery");
  container.innerHTML = "";

  images.forEach((img) => {
    container.innerHTML += `
      <div class="explore-card" onclick="viewImage(${img.id})">
        <img src="${img.url}">
        <div class="explore-overlay">
          <h4>${img.title}</h4>
          <p>₹${img.price}</p>
        </div>
      </div>
    `;
  });
}

function viewImage(id) {
  localStorage.setItem("selectedImage", id);
  window.location.href = "image.html";
}
