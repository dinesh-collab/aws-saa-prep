document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    const links = document.querySelectorAll('.left-panel a');
    const contentPanel = document.getElementById('content-panel');

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

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove highlight from all links
            links.forEach(link => link.classList.remove('selected'));
            
            // Highlight the selected link
            this.classList.add('selected');
            
            // Load content based on the selected topic
            const topic = this.getAttribute('data-topic');
            loadContent(topic);
        });
    });

    function loadContent(topic) {
        // Example content loading, replace with actual content loading logic
        contentPanel.innerHTML = `<p>Content for ${topic} will be displayed here.</p>`;
    }
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

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
