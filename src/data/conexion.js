import mysql from "mysql2/promise";

export async function crearConexion() {
  try {
    const conexion = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "MARLON",//CONTRASEÑA DE DB
      database: "TechZone",
    });

    console.log("✅ Conexión exitosa a MySQL");
    return conexion;
  } catch (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return null;
  }
}

