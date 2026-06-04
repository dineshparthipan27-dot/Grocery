// Tab Switching Elements
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

function showLoginForm() {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
}

function showSignupForm() {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
}

loginBtn.addEventListener("click", showLoginForm);
signupBtn.addEventListener("click", showSignupForm);
showSignup.addEventListener("click", showSignupForm);
showLogin.addEventListener("click", showLoginForm);

// Password Visibility Toggle
document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});

// Email Validation Regex
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Utility function to show/hide errors
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.classList.add("show");
}

function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = "";
    errorElement.classList.remove("show");
}
 // ================= LOGIN VALIDATION =================
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const role = document.getElementById("loginRole").value;

    // Email Check
    if (!emailPattern.test(email)) {
        showError("loginEmailError", "Please enter a valid email address.");
        isValid = false;
    } else {
        clearError("loginEmailError");
    }

    // Password Check
    if (password.length < 6) {
        showError("loginPasswordError", "Password must be at least 6 characters.");
        isValid = false;
    } else {
        clearError("loginPasswordError");
    }

    // If valid, redirect based on role
    if (isValid) {
        localStorage.setItem("UserMail",email);
        if (role === "admin") {
            window.location.href = "admin_dashboard.html";
        } else if (role === "user") {
            window.location.href = "user_dashboard.html";
        }
    }
});

// ================= SIGNUP VALIDATION =================
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();
    const role = document.getElementById("signupRole").value;

    // Name Check
    if (name === "") {
        showError("signupNameError", "Full name is required.");
        isValid = false;
    } else {
        clearError("signupNameError");
    }

    // Email Check
    if (!emailPattern.test(email)) {
        showError("signupEmailError", "Please enter a valid email address.");
        isValid = false;
    } else {
        clearError("signupEmailError");
    }

    // Password Check
    if (password.length < 6) {
        showError("signupPasswordError", "Password must be at least 6 characters.");
        isValid = false;
    } else {
        clearError("signupPasswordError");
    }

    // Confirm Password Check
    if (password !== confirmPassword || confirmPassword === "") {
        showError("signupConfirmError", "Passwords do not match.");
        isValid = false;
    } else {
        clearError("signupConfirmError");
    }

    // If valid, perform signup action (like redirect or API call)
    if (isValid) {
        // alert(`Account created successfully as ${role}!`);
        showLoginForm(); // Redirect back to login after signup
    }
});