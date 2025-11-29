export interface PC {
  id: number;
  nombre_completo: string;
  tipo: "portátil" | "escritorio";
  procesador: string;
  ram: string;
  almacenamiento: string;
  tarjeta_grafica: string;
  precio: string;
  imagen: string;
}

export const DataComputadores: PC[] = [
  {
    id: 1,
    nombre_completo: "ASUS TUF Gaming F15",
    tipo: "portátil",
    procesador: "Intel Core i7-12700H",
    ram: "16GB DDR5",
    almacenamiento: "512GB SSD NVMe",
    tarjeta_grafica: "NVIDIA GeForce RTX 3060 6GB",
    precio: "4.500.000",
    imagen: "https://i.imgur.com/eb6YsMw.jpg"
  },
  {
    id: 2,
    nombre_completo: "Lenovo Legion 5 Pro",
    tipo: "portátil",
    procesador: "AMD Ryzen 7 5800H",
    ram: "16GB DDR4",
    almacenamiento: "1TB SSD NVMe",
    tarjeta_grafica: "NVIDIA GeForce RTX 3070 8GB",
    precio: "5.800.000",
    imagen: "https://i.imgur.com/e2rwXZM.jpg"
  },
  {
    id: 3,
    nombre_completo: "HP Omen 25L Desktop",
    tipo: "escritorio",
    procesador: "Intel Core i5-12400F",
    ram: "16GB DDR4",
    almacenamiento: "512GB SSD + 1TB HDD",
    tarjeta_grafica: "NVIDIA GeForce RTX 3050 8GB",
    precio: "3.900.000",
    imagen: "https://i.imgur.com/pnMHetX.jpg"
  },
  {
    id: 4,
    nombre_completo: "Acer Nitro 5 AN515",
    tipo: "portátil",
    procesador: "Intel Core i5-11400H",
    ram: "8GB DDR4",
    almacenamiento: "512GB SSD",
    tarjeta_grafica: "NVIDIA GeForce GTX 1650 4GB",
    precio: "2.900.000",
    imagen: "https://i.imgur.com/fRWN1XQ.jpg"
  },
  {
    id: 5,
    nombre_completo: "Dell Alienware Aurora R13",
    tipo: "escritorio",
    procesador: "Intel Core i7-12700KF",
    ram: "16GB DDR5",
    almacenamiento: "1TB SSD NVMe",
    tarjeta_grafica: "NVIDIA GeForce RTX 3080 10GB",
    precio: "9.200.000",
    imagen: "https://i.imgur.com/tepDujF.jpg"
  },
  {
    id: 6,
    nombre_completo: "MSI Katana GF66",
    tipo: "portátil",
    procesador: "Intel Core i7-11800H",
    ram: "16GB DDR4",
    almacenamiento: "512GB SSD",
    tarjeta_grafica: "NVIDIA GeForce RTX 3050 Ti 4GB",
    precio: "4.200.000",
    imagen: "https://i.imgur.com/6ARD7Dz.jpg"
  }
];
