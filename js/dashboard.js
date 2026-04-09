function loadDashboard() {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let images = JSON.parse(localStorage.getItem("images")) || [];

  const statsDiv = document.getElementById("stats");
  const content = document.getElementById("dashboardContent");

  if (user.role === "photographer") {
    let earnings = 0;
    let totalDownloads = 0;

    images.forEach((img) => {
      earnings += img.downloads * img.price * 0.8;
      totalDownloads += img.downloads;
    });

    statsDiv.innerHTML = `
      <div class="stat-card">
        <h3>Total Earnings</h3>
        <p>₹${earnings}</p>
      </div>

      <div class="stat-card">
        <h3>Total Downloads</h3>
        <p>${totalDownloads}</p>
      </div>

      <div class="stat-card">
        <h3>Your Uploads</h3>
        <p>${images.length}</p>
      </div>
    `;

    content.innerHTML = `
      <h2>Your Images</h2>
      <div class="grid">
        ${images
          .map(
            (img) => `
          <div class="card">
            <img src="${img.url}">
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  } else {
    statsDiv.innerHTML = `
      <div class="stat-card">
        <h3>Images Available</h3>
        <p>${images.length}</p>
      </div>
    `;

    content.innerHTML = `
      <h2>Start Exploring</h2>
      <a href="marketplace.html" class="primary-btn">Browse Images</a>
    `;
  }
}
