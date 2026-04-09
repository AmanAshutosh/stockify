function previewImage() {
  const url = document.getElementById("url").value;
  document.getElementById("previewImage").src =
    url || "https://via.placeholder.com/400x300?text=Preview";
}

function uploadImage() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  if (!title || !url || !price || !category) {
    alert("Please fill all fields");
    return;
  }

  let images = JSON.parse(localStorage.getItem("images")) || [];

  images.push({
    id: Date.now(),
    title,
    url,
    price,
    category,
    downloads: 0,
  });

  localStorage.setItem("images", JSON.stringify(images));

  alert("Uploaded Successfully!");

  // reset form
  document.getElementById("title").value = "";
  document.getElementById("url").value = "";
  document.getElementById("price").value = "";
  document.getElementById("category").value = "";
  previewImage();
}
