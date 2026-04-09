function loadImageDetail() {
  let id = localStorage.getItem("selectedImage");
  let images = JSON.parse(localStorage.getItem("images")) || [];

  let img = images.find((i) => i.id == id);

  const box = document.getElementById("imageDetail");

  if (!img) {
    box.innerHTML = "<p>No image found</p>";
    return;
  }

  box.innerHTML = `
    <img src="${img.url}">
    <h2>${img.title}</h2>
    <p>₹${img.price}</p>

    <button class="primary-btn" onclick="goCheckout(${img.id})">
      Buy License
    </button>
  `;
}

function goCheckout(id) {
  localStorage.setItem("selectedImage", id);
  window.location.href = "checkout.html";
}
