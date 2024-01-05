const darkButton = document.querySelector('#dark');
const lightButton = document.querySelector('#light');

function createIframe(pdfLinks) {
    const loadPDF = document.querySelector("#loadPDF");

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', pdfLinks);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '600px');

    loadPDF.innerHTML = ''; // Clear previous iframe
    loadPDF.appendChild(iframe);
}

darkButton.addEventListener('click', () => {
    const pdfLinks = 'Dark.pdf';
    createIframe(pdfLinks);
});

lightButton.addEventListener('click', () => {
    const pdfLinks = 'Light.pdf';
    createIframe(pdfLinks);
});