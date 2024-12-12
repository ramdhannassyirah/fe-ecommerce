<template>
    <div class="auth-layout">
      <div class="auth-container">
        <!-- Header layout -->
        <header class="auth-header">
          <h1 class="auth-title">Welcome to Our Platform</h1>
          <p class="auth-subtitle">Please log in to continue</p>
        </header>
  
        <!-- Konten halaman -->
        <main class="auth-content">
          <slot /> <!-- Slot untuk konten halaman -->
        </main>
      </div>
  
      <!-- Footer layout -->
      <footer class="auth-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "AuthLayout",
  };
  </script>
  
  <style scoped>
  .auth-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9fafb; /* Warna latar belakang */
  }
  
  .auth-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  .auth-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .auth-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .auth-subtitle {
    font-size: 1rem;
    color: #666;
  }
  
  .auth-content {
    width: 100%;
    max-width: 400px;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .auth-footer {
    text-align: center;
    padding: 1rem;
    font-size: 0.875rem;
    color: #999;
  }
  </style>
  