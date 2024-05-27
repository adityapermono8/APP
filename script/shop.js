// JavaScript untuk menampilkan/menyembunyikan produk berdasarkan kategori yang dipilih
document.querySelectorAll('.categories a').forEach(item => {
    item.addEventListener('click', event => {
        const category = event.target.getAttribute('data-category');
        if (category === 'all') {
            document.querySelectorAll('.product-card').forEach(card => {
                card.classList.remove('hidden');
            });
        } else {
            document.querySelectorAll('.product-card').forEach(card => {
                if (card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
    });
});