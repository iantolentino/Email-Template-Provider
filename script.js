// script.js - Main application logic for Email Template Maker

// Global variables
let allTemplates = [];
let currentFilter = 'All';
let currentSearch = '';

// DOM Elements
const categorySelect = document.getElementById('category');
const searchInput = document.getElementById('search');
const templateCount = document.getElementById('template-count');
const templateGrid = document.getElementById('list');
const loadingSection = document.getElementById('loading');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const loadingMsg = document.getElementById('loading-msg');

// Initialize application
async function initApp() {
  console.log('Initializing application...');
  
  try {
    // Show loading indicator
    showLoading(true);
    updateProgress(10, 'Starting application...');
    
    // Load templates
    await loadTemplates();
    
    // Setup UI components
    await setupUI();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial display
    displayTemplates();
    
    // Hide loading indicator
    showLoading(false);
    
    console.log('Application initialized successfully');
    
  } catch (error) {
    console.error('Failed to initialize application:', error);
    loadingMsg.textContent = `Error: ${error.message}`;
    loadingMsg.style.color = '#dc2626';
    
    // Show error state
    setTimeout(() => {
      showLoading(false);
      templateGrid.innerHTML = `
        <div class="empty-state error-state">
          <h3>Failed to Load Templates</h3>
          <p>Error: ${error.message}</p>
          <button onclick="location.reload()" class="btn-retry">Retry Loading</button>
        </div>
      `;
    }, 2000);
  }
}

// Load templates from JSON files
async function loadTemplates() {
  try {
    updateProgress(20, 'Loading template categories...');
    
    // Load templates using the function from templates.js
    allTemplates = await window.loadAllTemplates();
    
    if (!allTemplates || allTemplates.length === 0) {
      throw new Error('No templates were loaded. Check your JSON files.');
    }
    
    updateProgress(100, `Successfully loaded ${allTemplates.length} templates!`);
    templateCount.textContent = allTemplates.length;
    
    console.log(`Loaded ${allTemplates.length} templates`);
    
  } catch (error) {
    console.error('Error loading templates:', error);
    loadingMsg.textContent = 'Error loading templates. Using fallback data.';
    
    // Try to use fallback templates
    allTemplates = window.customTemplates || window.FALLBACK_TEMPLATES || [];
    
    if (allTemplates.length === 0) {
      throw new Error('Could not load any templates');
    }
    
    templateCount.textContent = allTemplates.length;
  }
}

// Setup UI components
async function setupUI() {
  updateProgress(30, 'Setting up UI...');
  
  // Load categories into dropdown
  const categories = window.getAvailableCategories ? window.getAvailableCategories() : ['All', 'IT', 'Support'];
  
  // Clear existing options
  categorySelect.innerHTML = '';
  
  // Add categories to dropdown
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
  
  updateProgress(50, 'UI setup complete');
}

// Setup event listeners
function setupEventListeners() {
  // Category filter
  categorySelect.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    console.log(`Category filter changed to: ${currentFilter}`);
    displayTemplates();
  });
  
  // Search input with debounce
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearch = e.target.value.trim();
      console.log(`Search query: ${currentSearch}`);
      displayTemplates();
    }, 300);
  });
  
  // Quick search on Enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      currentSearch = e.target.value.trim();
      displayTemplates();
    }
  });
}

// Display templates in the grid
function displayTemplates() {
  console.log('Displaying templates...');
  
  // Get filtered templates
  let filteredTemplates = allTemplates;
  
  // Apply category filter
  if (currentFilter !== 'All') {
    filteredTemplates = window.getTemplatesByCategory(currentFilter);
  }
  
  // Apply search filter
  if (currentSearch) {
    filteredTemplates = window.searchTemplates(currentSearch);
  }
  
  // Update count
  const count = filteredTemplates ? filteredTemplates.length : 0;
  templateCount.textContent = count;
  console.log(`Displaying ${count} templates`);
  
  // Clear current grid
  templateGrid.innerHTML = '';
  
  // Display each template
  if (filteredTemplates && filteredTemplates.length > 0) {
    filteredTemplates.forEach(template => {
      const templateCard = createTemplateCard(template);
      templateGrid.appendChild(templateCard);
    });
  } else {
    // Show empty state
    templateGrid.innerHTML = `
      <div class="empty-state">
        <h3>No Templates Found</h3>
        <p>${currentSearch ? `No results for "${currentSearch}"` : 'No templates available for this category'}</p>
        ${currentSearch ? '<button onclick="clearSearch()" class="btn-clear">Clear Search</button>' : ''}
      </div>
    `;
  }
}

// Create a template card element
function createTemplateCard(template) {
  const card = document.createElement('div');
  card.className = 'template-card';
  card.dataset.id = template.id;
  card.dataset.category = template.category;
  
  // Truncate body for preview
  const previewBody = template.body.length > 200 
    ? template.body.substring(0, 200) + '...' 
    : template.body;
  
  // Escape HTML for safe display
  const safeSubject = escapeHtml(template.subject);
  const safeBody = escapeHtml(previewBody);
  const safeCategory = escapeHtml(template.category);
  
  card.innerHTML = `
    <div class="template-card-header">
      <span class="template-category">${safeCategory}</span>
      <span class="template-id">${template.id}</span>
    </div>
    <div class="template-card-body">
      <h3 class="template-subject">${safeSubject}</h3>
      <p class="template-body-preview">${safeBody}</p>
    </div>
    <div class="template-card-footer">
      <button class="btn-preview" data-id="${template.id}">Preview</button>
      <button class="btn-copy" data-id="${template.id}">Copy</button>
      <button class="btn-use" data-id="${template.id}">Use Template</button>
    </div>
  `;
  
  // Add event listeners to buttons
  const previewBtn = card.querySelector('.btn-preview');
  const copyBtn = card.querySelector('.btn-copy');
  const useBtn = card.querySelector('.btn-use');
  
  previewBtn.addEventListener('click', () => previewTemplate(template.id));
  copyBtn.addEventListener('click', () => copyTemplate(template.id));
  useBtn.addEventListener('click', () => useTemplate(template.id));
  
  return card;
}

// Helper function to escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Preview a template
function previewTemplate(templateId) {
  const template = allTemplates.find(t => t.id === templateId);
  if (template) {
    // Create preview modal
    const modal = document.createElement('div');
    modal.className = 'preview-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>${escapeHtml(template.subject)}</h2>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
          <div class="template-category-badge">${escapeHtml(template.category)}</div>
          <div class="template-id-label">ID: ${template.id}</div>
          <pre class="template-full-body">${escapeHtml(template.body)}</pre>
        </div>
        <div class="modal-footer">
          <button class="btn-copy-full">Copy Full Template</button>
          <button class="btn-close-modal">Close</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.modal-close');
    const closeModalBtn = modal.querySelector('.btn-close-modal');
    const copyFullBtn = modal.querySelector('.btn-copy-full');
    
    closeBtn.addEventListener('click', () => modal.remove());
    closeModalBtn.addEventListener('click', () => modal.remove());
    copyFullBtn.addEventListener('click', () => {
      copyTemplate(templateId);
      modal.remove();
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
}

// Copy template to clipboard
async function copyTemplate(templateId) {
  const template = allTemplates.find(t => t.id === templateId);
  if (template) {
    try {
      await navigator.clipboard.writeText(template.body);
      showNotification('Template copied to clipboard!', 'success');
    } catch (error) {
      console.error('Failed to copy:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = template.body;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification('Template copied to clipboard!', 'success');
    }
  }
}

// Use template (opens in email client)
function useTemplate(templateId) {
  const template = allTemplates.find(t => t.id === templateId);
  if (template) {
    // Create mailto link with template content
    const subject = encodeURIComponent(template.subject);
    const body = encodeURIComponent(template.body);
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    
    // Open in new tab/window
    window.open(mailtoLink, '_blank');
  }
}

// Show notification
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(n => n.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Clear search function
window.clearSearch = function() {
  searchInput.value = '';
  currentSearch = '';
  displayTemplates();
};

// Update loading progress
function updateProgress(percentage, message = '') {
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
  if (progressText) {
    progressText.textContent = `Loading… ${Math.round(percentage)}%`;
  }
  if (loadingMsg && message) {
    loadingMsg.textContent = message;
  }
}

// Show/hide loading indicator
function showLoading(show) {
  if (loadingSection) {
    loadingSection.style.display = show ? 'block' : 'none';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  // Small delay to ensure everything is ready
  setTimeout(initApp, 100);
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  setTimeout(initApp, 100);
}