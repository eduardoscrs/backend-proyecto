import { pool } from '../config/bd.js';

// Obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos');

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "No hay productos" });
        }

        res.status(200).json(rows);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

// Obtener un producto por ID   
export const getProducto = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [req.params.id]);

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "El producto no existe" });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

// Crear un nuevo producto
export const createProducto = async (req, res) => {
    try {
        const { Nombre, Descripcion, Precio, PorcentajeDescuento, Almacenamiento } = req.body;
        const [rows] = await pool.query('INSERT INTO Productos (Nombre, Descripcion, Precio, PorcentajeDescuento, Almacenamiento) VALUES (?,?,?,?,?)', [Nombre, Descripcion, Precio, PorcentajeDescuento, Almacenamiento]);
        res.status(201).json({
            ID: rows.insertId,
            Nombre,
            Descripcion,
            Precio,
            PorcentajeDescuento,
            Almacenamiento,
        });
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

// Eliminar un producto por ID
export const deleteProducto = async (req, res) => {
    try {
        const [rows] = await pool.query('DELETE FROM Productos WHERE ID = ?', [req.params.id]);
        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "El producto no existe" });
        }
        res.status(200).json({ message: "El producto ha sido eliminado" });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

// Actualizar un producto por ID
export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Descripcion, Precio, PorcentajeDescuento, Almacenamiento } = req.body;

        const [existingProducts] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [id]);
        if (!existingProducts || existingProducts.length === 0) {
            return res.status(404).json({ message: "El producto no existe" });
        }

        const [results] = await pool.query('UPDATE Productos SET Nombre = IFNULL(?, Nombre), Descripcion = IFNULL(?, Descripcion), Precio = IFNULL(?, Precio), PorcentajeDescuento = IFNULL(?, PorcentajeDescuento), Almacenamiento = IFNULL(?, Almacenamiento) WHERE ID = ?', [Nombre, Descripcion, Precio, PorcentajeDescuento, Almacenamiento, id]);

        const [rows] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [id]);
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}
