const projects = [
    { name: "Symbol Alloc Cal", url: "https://1abtk.github.io/symbol-alloc-cal/", icon: "calculator" },
    { name: "Rakuten Number Search", url: "https://1abtk.github.io/rakuten-available-number-search/", icon: "search" },
    { name: "PDF to Image", url: "https://1abtk.github.io/pdf-to-image/", icon: "file-type" },
    { name: "DOB Calculation", url: "https://1abtk.github.io/date-of-birth-calculation-description/", icon: "calendar" },
    { name: "5G NR ARFCN Converter", url: "https://1abtk.github.io/5g-nr-arfcn-converter/", icon: "radio" },
    { name: "Image to PDF", url: "https://1abtk.github.io/image2pdf/", icon: "file-up" },
    { name: "QR Code Maker", url: "https://1abtk.github.io/qr-code-maker/", icon: "qr-code" }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('project-grid');

    projects.forEach((project, index) => {
        const anchor = document.createElement('a');
        anchor.href = project.url;
        anchor.className = 'card';
        anchor.target = "_blank";
        anchor.style.animationDelay = `${index * 0.08}s`;
        
        anchor.innerHTML = `
            <div class="tool-icon">
                <i data-lucide="${project.icon}"></i>
            </div>
            <div class="preview-window">
                <iframe src="${project.url}" loading="lazy"></iframe>
            </div>
            <div class="card-info">
                <h2 class="card-title">${project.name}</h2>
            </div>
        `;

        grid.appendChild(anchor);
        
        // Trigger the reveal animation
        setTimeout(() => anchor.classList.add('reveal'), 50);
    });

    // Initialize Lucide icons after dynamic content is added
    if (window.lucide) {
        lucide.createIcons();
    }
});
