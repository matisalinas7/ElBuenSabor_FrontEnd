import { BASE_URL } from "../Config";

export const ArticuloManufacturadoService = {
  getArticulos: async () => {
    const response = await fetch(`${BASE_URL}/articulos`);
    if (!response.ok) {
      throw new Error('Error al obtener la lista de artículos');
    }
    const data = await response.json();
    return data;
  },

  addArticulo: async (formData: { nombre: string, descripcion: string, precioVenta: number, tiempoEstimadoCocina: number }) => {
    try {
      const response = await fetch(`${BASE_URL}/articulos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al agregar artículo');
      }
    } catch (error) {
      console.error('Error en addArticulo:', error);
      throw error;
    }
  },

  updateArticulo: async (articuloId: number, formData: { nombre: string, descripcion: string, precioVenta: number, tiempoEstimadoCocina: number }) => {
    try {
      const response = await fetch(`${BASE_URL}/articulos/${articuloId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar artículo');
      }
    } catch (error) {
      console.error('Error en updateArticulo:', error);
      throw error;
    }
  },

  deleteArticulo: async (articuloId: number) => {
    try {
      const response = await fetch(`${BASE_URL}/articulos/${articuloId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar artículo');
      }
    } catch (error) {
      console.error('Error en deleteArticulo:', error);
      throw error;
    }
  },
};
