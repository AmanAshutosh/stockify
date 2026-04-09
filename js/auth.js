function signup() {
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ email, role });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup success");
}

function login() {
  const email = document.getElementById("email").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find((u) => u.email === email);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("User not found");
  }
}
