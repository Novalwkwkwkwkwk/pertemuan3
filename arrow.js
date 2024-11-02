function tambah(a, b)  {
    return a + b;

}
function sapa() {
    console.log("halo,ini pertemuan 3");
}
function luaspersegipanjang(p, l) {
    const luas = p * l;
    return luas;
}
const luas2= (p, l) => {
const luas = p* l;
return luas;
}
sapa();
console.log("Hasil penjualan = " + tambah(70, 3));
console.log("Hasil luas = " + luaspersegipanjang(10,5));
console.log("Hasil luas2 = " + luas2(2,5));