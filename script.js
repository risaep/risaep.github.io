// Fungsi untuk mengonversi nilai harga menjadi format rupiah
function formatRupiah(angka) {
    let number_string = angka.toString();
    let split = number_string.split(',');
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return 'Rp ' + rupiah;
}

// Daftar produk
let products = [
    { id: 1, name: 'Kerudung A', price: 50000, category: 'Pashmina', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Kerudung B', price: 60000, category: 'Segiempat', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Kerudung C', price: 40000, category: 'Pashmina', imageUrl: 'https://via.placeholder.com/150' }
    // ... Tambahkan produk lainnya di sini
];

// Fungsi untuk membuat card produk dengan harga dalam format rupiah
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('border', 'rounded-md', 'p-4', 'text-center');

    const productName = document.createElement('h3');
    productName.classList.add('font-semibold', 'mb-2');
    productName.textContent = product.name;

    const productImage = document.createElement('img');
    productImage.classList.add('mx-auto', 'mb-2');
    productImage.setAttribute('src', product.imageUrl);
    productImage.setAttribute('alt', product.name);
    productImage.setAttribute('width', '150');
    productImage.setAttribute('height', '150');

    const productCategory = document.createElement('p');
    productCategory.textContent = `Kategori: ${product.category}`;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Harga: ${formatRupiah(product.price)}`; // Menampilkan harga dalam format rupiah

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Tambah ke Keranjang';
    addToCartBtn.classList.add('bg-blue-500', 'text-white', 'px-3', 'py-1', 'rounded-md', 'mt-2');

    // Tambahkan event listener ke tombol "Tambah ke Keranjang"
    addToCartBtn.addEventListener('click', () => addToCart(product));

    card.appendChild(productImage);
    card.appendChild(productName);
    card.appendChild(productCategory);
    card.appendChild(productPrice);
    card.appendChild(addToCartBtn);

    return card;
}

// Fungsi untuk menambahkan produk baru ke dalam array products
function addProduct(name, price, category, imageUrl) {
    const newProductId = products.length + 1;
    const newProduct = { id: newProductId, name, price, category, imageUrl };
    products.push(newProduct);

    // Tampilkan produk yang baru ditambahkan
    const productContainer = document.querySelector('.products');
    const newCard = createProductCard(newProduct);
    productContainer.appendChild(newCard);
}

// Contoh penggunaan fungsi addProduct untuk menambahkan produk baru
addProduct('Kerudung D', 45000, 'Segiempat', 'https://via.placeholder.com/150');

// Menampilkan produk dalam card
function displayProducts() {
    const productContainer = document.querySelector('.products');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
}

// Memanggil fungsi untuk menampilkan produk saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayProducts);
