// Array of page URLs in order
const pages = [
    'personal.html', // Page 1
    'aboutme.html', // Page 2
    'blog.html', // Page 3
    'contactpg.html', // Page 5
    'enquiryform.html'// Page 6 
];
// Get the current page URL
const currentPage = window.location.pathname.split("/").pop();

// Find the current page index in the pages array
let currentPageIndex = pages.indexOf(currentPage);

// Set up the Previous and Next buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Disable "Previous" button if on the first page
if (currentPageIndex === 0) {
    prevBtn.disabled = true;
}

// Disable "Next" button if on the last page
if (currentPageIndex === pages.length - 1) {
    nextBtn.disabled = true;
}

// Navigate to the previous page
prevBtn.addEventListener('click', function() {
    if (currentPageIndex > 0) {
        window.location.href = pages[currentPageIndex - 1];
    }
});

// Navigate to the next page
nextBtn.addEventListener('click', function() {
    if (currentPageIndex < pages.length - 1) {
        window.location.href = pages[currentPageIndex + 1];
    }
});

