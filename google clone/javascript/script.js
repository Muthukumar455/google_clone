async function fetchHTML(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch HTML');
        }
        const html = await response.text();
        return html;
    } catch (error) {
        console.error('Error fetching HTML:', error);
        return null;
    }
}

// Example usage:
const url = 'https://example.com'; // Replace with the URL of the webpage you want to fetch
fetchHTML(url)
    .then(html => {
        if (html) {
            console.log('HTML content:', html);
            // Now you can process the HTML content as needed
        } else {
            console.log('Failed to fetch HTML');
        }
    });
