function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
document.getElementById("generate").addEventListener("click", function () {
  const length = parseInt(document.getElementById("length").value);
  if (isNaN(length) || length <= 0) {
    alert("Please enter a valid password length.");
    return;
  }
  const password = generatePassword(length);
  document.getElementById("password").textContent = password;
});