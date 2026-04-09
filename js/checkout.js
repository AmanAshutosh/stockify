function loadCheckout() {
  let id = localStorage.getItem("selectedImage");
  let images = JSON.parse(localStorage.getItem("images")) || [];

  let img = images.find((i) => i.id == id);

  const box = document.getElementById("checkoutBox");

  if (!img) {
    box.innerHTML = "<p>No item selected</p>";
    return;
  }

  box.innerHTML = `
    <img src="${img.url}" style="width:100%;border-radius:10px;">
    <h2>${img.title}</h2>
    <p>Price: ₹${img.price}</p>

    <button onclick="completePurchase(${img.id})" class="primary-btn">
      Pay & Download
    </button>
  `;
}

function completePurchase(id) {
  let images = JSON.parse(localStorage.getItem("images")) || [];

  let img = images.find((i) => i.id == id);
  img.downloads++;

  localStorage.setItem("images", JSON.stringify(images));

  alert("Payment Successful! Download unlocked.");
}
