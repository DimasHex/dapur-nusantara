let keranjang = [];
let total = 0;

function tambahKeranjang(nama, harga) {
    keranjang.push({
        nama: nama,
        harga: harga
    });

    total += harga;

    tampilkanKeranjang();
}

function tampilkanKeranjang() {
    let keranjangHTML = "";

    keranjang.forEach(function(item, index) {
        keranjangHTML += `
            <p>
                ${index + 1}. ${item.nama} - Rp${item.harga.toLocaleString("id-ID")}
            </p>
        `;
    });

    document.getElementById("keranjang").innerHTML = keranjangHTML;

    document.getElementById("total").innerHTML =
        "Total: Rp" + total.toLocaleString("id-ID");
}