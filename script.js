document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  message.textContent = "⏳ Registering...";
  message.style.color = "yellow";

  try {
    // Replace with your Render backend URL
    const res = await fetch("https://nexora-backend.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      message.textContent = data.message || "✅ Registration successful! Check your email to verify.";
      message.style.color = "lightgreen";
    } else {
      message.textContent = data.message || "❌ Error during registration.";
      message.style.color = "red";
    }
  } catch (err) {
    console.error(err);
    message.textContent = "⚠️ Network error. Please try again.";
    message.style.color = "red";
  }
});
