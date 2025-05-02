const routes = {
    '/': 'home',
    '/about': 'about',
    '/resume': 'resume',
    '/skills': 'skills',
    '/projects': 'projects',
    '/contact': 'contact',
    '/ai': 'ai'
};

function router() {
    const path = window.location.hash.slice(1) || '/';
    const content = document.getElementById('main-content');
    
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const sectionId = routes[path];
    if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }
}