function buyImage() {
  let id = localStorage.getItem("selectedImage");
  let images = JSON.parse(localStorage.getItem("images")) || [];

  let img = images.find((i) => i.id == id);

  img.downloads++;

  localStorage.setItem("images", JSON.stringify(images));

  alert("Purchase successful!");
}
