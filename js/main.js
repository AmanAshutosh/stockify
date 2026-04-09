// ================= AUTH CHECK =================
function checkAuth() {
  const user = localStorage.getItem("currentUser");
  const path = window.location.pathname;

  // redirect if not logged in
  if (!user && !path.includes("login") && !path.includes("index")) {
    window.location.href = "login.html";
  }
}

// ================= NAVBAR =================
function loadNavbar() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <h2>Stockify</h2>
    <div>
      <a href="marketplace.html">Explore</a>
      <a href="dashboard.html">Dashboard</a>
      <a href="upload.html">Upload</a>
      <a href="#" onclick="logout()">Logout</a>
    </div>
  `;
  document.body.prepend(nav);
}

// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// ================= INIT =================
const path = window.location.pathname;

// pages that use sidebar (NO top navbar)
const noNavbarPages = ["dashboard", "profile", "upload", "marketplace"];

const shouldHideNavbar = noNavbarPages.some((p) => path.includes(p));

// run auth check
checkAuth();

// load navbar ONLY where needed
if (!path.includes("login") && !shouldHideNavbar) {
  loadNavbar();
}
