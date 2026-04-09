function loadProfile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const images = JSON.parse(localStorage.getItem("images")) || [];

  document.getElementById("userEmail").innerText = user.email;
  document.getElementById("userRole").innerText = user.role;

  // Avatar initials
  const initials = user.email.charAt(0).toUpperCase();
  document.getElementById("avatar").innerText = initials;

  const stats = document.getElementById("profileStats");

  if (user.role === "photographer") {
    let earnings = 0;
    let downloads = 0;

    images.forEach((img) => {
      earnings += img.downloads * img.price * 0.8;
      downloads += img.downloads;
    });

    stats.innerHTML = `
      <div class="stat-card">
        <h3>Total Earnings</h3>
        <p>₹${earnings}</p>
      </div>

      <div class="stat-card">
        <h3>Total Downloads</h3>
        <p>${downloads}</p>
      </div>

      <div class="stat-card">
        <h3>Uploads</h3>
        <p>${images.length}</p>
      </div>
    `;
  } else {
    stats.innerHTML = `
      <div class="stat-card">
        <h3>Account Type</h3>
        <p>Business</p>
      </div>

      <div class="stat-card">
        <h3>Images Available</h3>
        <p>${images.length}</p>
      </div>
    `;
  }
}
