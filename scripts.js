document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const products = document.querySelectorAll('.product');

    categoryFilter.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (selectedCategory === 'all' || productCategory === selectedCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
