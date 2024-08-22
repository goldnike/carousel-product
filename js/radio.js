document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.btn-check');
    const tabContents = document.querySelectorAll('.products-description__tab');

    tabs.forEach(tab => {
        tab.addEventListener('change', () => {
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            const targetContent = document.querySelector(`#products-description__${tab.id.replace('btnradio', '')}`);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });

    // Activate the first tab by default
    const firstTab = tabs[0];
    if (firstTab) {
        firstTab.checked = true;
        const firstContent = document.querySelector(`#products-description__${firstTab.id.replace('btnradio', '')}`);
        if (firstContent) {
            firstContent.style.display = 'block';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Descriptions for each radio button
    const descriptions = {
        btnradio1: 'This is the description of the product. It provides detailed information about the product features and benefits.',
        btnradio2: 'Usage instructions for the product. This section explains how to use the product effectively and safely.',
        btnradio3: 'Ingredients list of the product. This section includes all the ingredients used in the product formulation.'
    };

    const descriptionDiv = document.getElementById('description');
    const radios = document.querySelectorAll('.btn-check');

    function updateDescription() {
        const selectedId = document.querySelector('.btn-check:checked').id;
        descriptionDiv.textContent = descriptions[selectedId];
    }

    radios.forEach(radio => {
        radio.addEventListener('change', updateDescription);
    });

    // Initialize with the first description
    updateDescription();
});
