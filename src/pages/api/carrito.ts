import type { APIRoute } from "astro";
import { crearConexion } from "src/data/conexion";

export const prerender = false; // necesario para POST

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();

    const nombre_comprador = form.get("nombre_comprador");
    const nombre_completo = form.get("nombre_completo");
    const tipo = form.get("tipo");
    const procesador = form.get("procesador");
    const ram = form.get("ram");
    const almacenamiento = form.get("almacenamiento");
    const tarjeta_grafica = form.get("tarjeta_grafica");
    const precio = form.get("precio");

    const db = await crearConexion();
    if (!db) {
      return new Response(
        JSON.stringify({ success: false, message: "No se pudo conectar a la base de datos" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    await db.execute(
      `
      INSERT INTO recibo 
      (nombre_comprador, nombre_completo, tipo, procesador, ram, almacenamiento, tarjeta_grafica, precio)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        nombre_comprador,
        nombre_completo,
        tipo,
        procesador,
        ram,
        almacenamiento,
        tarjeta_grafica,
        precio
      ]
    );

    return new Response(
      JSON.stringify({ success: true, message: "Compra registrada con éxito" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error al guardar la compra:", error);

    return new Response(
      JSON.stringify({ success: false, message: "Error al guardar la compra" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
