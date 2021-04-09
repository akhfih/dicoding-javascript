const pengguna = {
  nama: 'akhmad fikron huda',
  alamat: 'Kedawon Brebes',
  'no hp': '08574253119',
};

pengguna.usia = 26;

console.log(
  ` nama saya, ${pengguna.nama}, alamat saya ${pengguna.alamat}, no hp saya ${pengguna['no hp']}`
);

console.log(pengguna);
pengguna.usia = 27;
console.log(pengguna);

delete pengguna['usia'];
console.log(pengguna);
