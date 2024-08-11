document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    const links = document.querySelectorAll('.left-panel a');
    const contentPanel = document.getElementById('content-panel');

    // Toggle sections on click
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Load content into the middle panel on link click
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove highlight from all links
            links.forEach(link => link.classList.remove('selected'));
            
            // Highlight the selected link
            this.classList.add('selected');
            
            // Load content based on the selected topic
            const topicUrl = this.getAttribute('href');
            loadContent(topicUrl);
        });
    });

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                contentPanel.innerHTML = data;
            })
            .catch(error => {
                contentPanel.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
    }
});

// Toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Expand or collapse all sections
function toggleAllSections() {
    const sections = document.querySelectorAll('.content');
    const isExpanding = Array.from(sections).some(section => section.style.display === 'none');

    sections.forEach(section => {
        section.style.display = isExpanding ? 'block' : 'none';
    });

    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.classList.toggle('active', isExpanding);
    });
}

