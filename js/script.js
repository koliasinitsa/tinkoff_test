
const educationItems = document.querySelectorAll('.education-item');

educationItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('education-item-like');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');

    editableElements.forEach(el => {
        const id = el.id;
        if (id) {
            const savedContent = localStorage.getItem(id);
            if (savedContent) {
                el.innerHTML = savedContent;
            }

            el.addEventListener('input', () => {
                localStorage.setItem(id, el.innerHTML);
            });
        } else {
            console.warn("Element without ID found:", el);
        }
    });
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => {
        const id = el.id;
        if (id) {
            const savedContent = localStorage.getItem(id);
            if (savedContent) {
                el.innerHTML = savedContent;
            }
        }
    });

    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.display = 'none';

    const options = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const element = document.body;

    html2pdf().from(element).set(options).save().then(() => {
        downloadBtn.style.display = 'block';
    });
});


