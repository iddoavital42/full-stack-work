import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:4000/products');
      setProducts(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch products:', err);
    }
  };

  const addProduct = async () => {
    if (!name || !quantity) return;
    try {
      await axios.post('http://localhost:4000/products', { name, quantity });
      setName('');
      setQuantity('');
      fetchProducts();
    } catch (err) {
      console.error('❌ Error adding product:', err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error('❌ Error deleting product:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>📦 Product Manager</h2>

      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary w-100" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>❌</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManager;
