const projects = [
    { name: "Mili Clock", url: "https://1abtk.github.io/mili-clock/", icon: "clock-2" },
    { name: "Wheel Picker", url: "https://1abtk.github.io/wheel-picker/", icon: "loader-pinwheel" },
    { name: "QR Banana", url: "https://microsoftedge.microsoft.com/addons/detail/qr-banana/lifampapcbbacfknifiaflagdbeojicp", icon: "qr-code" },
    { name: "QR Code Maker", url: "https://1abtk.github.io/qr-code-maker/", icon: "qr-code" },
    { name: "Image to PDF", url: "https://1abtk.github.io/image2pdf/", icon: "file-up" },
    { name: "PDF to Image", url: "https://1abtk.github.io/pdf-to-image/", icon: "file-type" },
    { name: "DOB Calculation", url: "https://1abtk.github.io/date-of-birth-calculation-description/", icon: "calendar" },
    { name: "Symbol Alloc Cal", url: "https://1abtk.github.io/symbol-alloc-cal/", icon: "calculator" },
    { name: "5G NR ARFCN Converter", url: "https://1abtk.github.io/5g-nr-arfcn-converter/", icon: "radio" },
    { name: "Rakuten Number Search", url: "https://1abtk.github.io/rakuten-available-number-search/", icon: "search", status: "deprecated"},
    { name: "ZLT S10 Super Admin", url: "https://chromewebstore.google.com/detail/donuthome-for-zlt-s10/hinnghaoldgikiknkglnepdhjlcljbjl", icon: "router" }
    ];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('project-grid');

    projects.forEach((project, index) => {
        const anchor = document.createElement('a');
        anchor.href = project.url;
        anchor.className = 'card';
        anchor.target = "_blank";
        anchor.style.animationDelay = `${index * 0.08}s`;
        
        // Check for deprecated status
        const statusFlag = project.status === "deprecated" 
            ? `<div class="status-flag deprecated">DEPRECATED</div>` 
            : '';

        anchor.innerHTML = `
            ${statusFlag}
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
        setTimeout(() => anchor.classList.add('reveal'), 50);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
});
