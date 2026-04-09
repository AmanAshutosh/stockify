function loadAdmin() {
  let images = JSON.parse(localStorage.getItem("images")) || [];

  const stats = document.getElementById("adminStats");
  const gallery = document.getElementById("adminGallery");

  // Stats
  stats.innerHTML = `
    <div class="stat-card">
      <h3>Total Images</h3>
      <p>${images.length}</p>
    </div>

    <div class="stat-card">
      <h3>Total Downloads</h3>
      <p>${images.reduce((a, b) => a + b.downloads, 0)}</p>
    </div>
  `;

  // Images
  gallery.innerHTML = images
    .map(
      (img) => `
    <div class="card">
      <img src="${img.url}">
      <div style="padding:10px;">
        <h4>${img.title}</h4>
        <p>₹${img.price}</p>
        <button onclick="deleteImage(${img.id})">Delete</button>
      </div>
    </div>
  `,
    )
    .join("");
}

function deleteImage(id) {
  let images = JSON.parse(localStorage.getItem("images")) || [];
  images = images.filter((img) => img.id !== id);

  localStorage.setItem("images", JSON.stringify(images));

  loadAdmin();
}
