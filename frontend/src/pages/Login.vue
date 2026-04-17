<template>
  <div class="page-wrapper">
    <div class="login-container">

      <section class="branding-panel">
        <div class="top-logo">
          <img src="/logo.svg" alt="Logo" class="logo-img" />
        </div>

        <div style="display: flex; flex-direction: column; gap: 24px; align-items: center;">
          <div class="hero-container">
            <img src="/hero-image.png" alt="Happy Team" class="hero-img" />
          </div>

          <div class="branding-footer">
            <h2 class="brand-title">Team Achieve</h2>
            <p class="brand-tagline">Your perfect solution for funding your desires</p>
          </div>
        </div>
      </section>

      <section class="form-panel">
        <div class="mobile-logo">
          <img src="/logo.svg" alt="Logo" class="logo-img" />
        </div>

        <div class="form-content">
          <header class="form-header">
            <h1>Welcome Back</h1>
            <p>Enter your email address and password to access your account.</p>
          </header>

          <form @submit.prevent="handleLogin" class="login-form">
            <div class="input-group">
              <label>Email Address <span class="required">*</span></label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div class="input-group">
              <label>Password <span class="required">*</span></label>
              <div class="password-wrapper">
                <input :type="showPass ? 'text' : 'password'" placeholder="Enter your password" required />
                <button type="button" @click="showPass = !showPass" class="toggle-btn">
                  <img src="/eye.png" alt="">
                  <!-- <img v-else src="/eye-off.png" alt=""> -->
                </button>
              </div>
            </div>

            <div class="form-options">
              <label class="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" class="forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" class="submit-btn">Sign in</button>
          </form>

          <footer class="form-footer">
            <p>Don't have an account? <a href="#" class="signup-link">Sign up</a></p>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showPass = ref(false);
const handleLogin = () => console.log("Login triggered");
</script>

<style scoped>
/* Reset & Base Styles */
.page-wrapper {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  background-color: #fcfcfc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-container {
  display: flex;
  /* width: 100%; */
  width: 1512px;
  background: #ffffff;
  min-height: 726px;
  overflow: hidden;
}

/* --- Branding Panel (Left) --- */
.branding-panel {
  /* flex: 1; */
  width: 756px;
  background-color: #f6e8fb;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  padding: 30px;
}

.top-logo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo-img {
  width: 198px;
  height: 97px;
}

.logo-text {
  color: #632195;
  font-weight: 700;
  font-size: 1.2rem;
}

.hero-container {
  width: 100%;
}

.hero-img {
  width: 626px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(99, 33, 149, 0.15);
}

.branding-footer {
  text-align: center;
}

.brand-title {
  color: #4c1d95;
  margin-bottom: 8px;
  font-weight: 700;
}

.brand-tagline {
  color: #666;
  font-size: 0.95rem;
}

/* --- Form Panel (Right) --- */
.form-panel {
  /* flex: 1; */
  width: 756px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.mobile-logo {
  display: none;
  margin-bottom: 30px;
  text-align: center;
}

.form-content {
  width: 100%;
  max-width: 438px;
}

.form-header {
  text-align: center;
  margin-bottom: 40px;
}

.form-header h1 {
  color: #4c1d95;
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight: 800;
}

.form-header p {
  color: #777;
  font-size: 0.9rem;
  line-height: 1.5;
}

.login-form {
  width: 100%;
}

.input-group {
  margin-bottom: 24px;
}

.input-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.required {
  color: #ff4d4d;
}

.input-group input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #632195;
}

.password-wrapper {
  position: relative;
}

.toggle-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  margin-bottom: 30px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  cursor: pointer;
}

.forgot-link {
  color: #632195;
  font-weight: 700;
  text-decoration: none;
}

.submit-btn {
  width: 100%;
  background-color: #632195;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background-color: #4c1d95;
}

.form-footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.signup-link {
  color: #632195;
  font-weight: 800;
  text-decoration: none;
}

/* --- Responsiveness (Mobile View) --- */
@media (max-width: 900px) {
  .branding-panel {
    display: none;
  }

  .login-container {
    max-width: 100%;
    min-height: 100vh;
  }

  .mobile-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .form-panel {
    width: 100%;
    background-color: #fff;
  }
}
</style>