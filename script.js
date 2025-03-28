// Toggle Search Bar
document.querySelector('.search-icon').addEventListener('click', () => {
    document.querySelector('.search-bar').style.display = 'block';
  });
  
  document.querySelector('.close-search').addEventListener('click', () => {
    document.querySelector('.search-bar').style.display = 'none';
  });
  
  // Toggle Notification Dropdown
  document.querySelector('.notification-icon').addEventListener('click', () => {
    const dropdown = document.querySelector('.notification-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Toggle Cart Sidebar
  document.querySelector('.cart-icon').addEventListener('click', () => {
    document.querySelector('.cart-sidebar').style.display = 'block';
  });
  
  document.querySelector('.close-cart').addEventListener('click', () => {
    document.querySelector('.cart-sidebar').style.display = 'none';
  });
  