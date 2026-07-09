let currentTheme = 'dark';

function toggleTheme() {
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('light');
        currentTheme = 'light';
        document.getElementById('theme-icon').classList.remove('fa-moon');
        document.getElementById('theme-icon').classList.add('fa-sun');
    } else {
        document.documentElement.classList.remove('light');
        currentTheme = 'dark';
        document.getElementById('theme-icon').classList.add('fa-moon');
        document.getElementById('theme-icon').classList.remove('fa-sun');
    }
}

function switchTab(tab) {
    const home = document.getElementById('content-home');
    const downloads = document.getElementById('content-downloads');
  
    document.getElementById('tab-home').classList.remove('active');
    document.getElementById('tab-downloads').classList.remove('active');
    
    if (tab === 0) {
        home.classList.remove('hidden');
        downloads.classList.add('hidden');
        document.getElementById('tab-home').classList.add('active');
    } else if (tab === 1) {
        home.classList.add('hidden');
        downloads.classList.remove('hidden');
        document.getElementById('tab-downloads').classList.add('active');
    }
}
function startDownload() {
    const btn = event.currentTarget;
    const originalText = btn.textContent;
    
    btn.textContent = "Redirecting...";
    btn.disabled = true;
    setTimeout(() => {
        window.location.href = "https://example.com";
    }, 800);
}
window.onload = function() {
    switchTab(0);
};
