import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dashboard.scss";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3002/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3002/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = async () => {
    try {
      const updatedProduct = {
        ...editProduct,
        price: Number(editProduct.price),
      };
      await axios.put(
        `http://localhost:3002/products/${editProduct.id}`,
        updatedProduct
      );
      setProducts(
        products.map((product) =>
          product.id === editProduct.id ? updatedProduct : product
        )
      );
      setEditProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleAddProduct = async () => {
    const { name, price, description, image } = newProduct;
    const errors = {};

    if (!name) errors.name = "Tên sản phẩm là bắt buộc.";
    if (!price) errors.price = "Giá là bắt buộc.";
    if (!description) errors.description = "Mô tả là bắt buộc.";
    if (!image) errors.image = "Hình ảnh là bắt buộc.";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const addedProduct = {
        ...newProduct,
        price: Number(newProduct.price),
      };
      const response = await axios.post(
        "http://localhost:3002/products",
        addedProduct
      );
      setProducts([...products, response.data]);
      setNewProduct({ name: "", price: "", description: "", image: "" });
      setValidationErrors({});
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
    document.title = "Trang Dashboard";
  }, []);

  return (
    <div className="dashboard">
      <h1>Trang Dashboard</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th>Mã sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}{" "}
              </td>
              <td>{product.description}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="100"
                  height="100"
                />
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                className="new"
                type="text"
                placeholder="Tên sản phẩm"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              {validationErrors.name && (
                <p className="error">{validationErrors.name}</p>
              )}
            </td>
            <td>
              <input
                className="new"
                type="number"
                placeholder="Giá"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value.replace(/\./g, ""),
                  })
                }
              />
              {validationErrors.price && (
                <p className="error">{validationErrors.price}</p>
              )}
            </td>
            <td>
              <input
                className="new"
                type="text"
                placeholder="Mã sản phẩm"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
              {validationErrors.description && (
                <p className="error">{validationErrors.description}</p>
              )}
            </td>
            <td>
              <input
                className="new"
                type="text"
                placeholder="Hình ảnh (URL)"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              {validationErrors.image && (
                <p className="error">{validationErrors.image}</p>
              )}
            </td>
            <td>
              <button onClick={handleAddProduct} className="btn-add">
                Thêm
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {editProduct && (
        <div className="edit-modal">
          <h2>Sửa sản phẩm</h2>
          <label>
            Tên sản phẩm:
            <input
              type="text"
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
            />
          </label>
          <label>
            Giá:
            <input
              type="number"
              value={editProduct.price.toLocaleString("vi-VN")}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  price: e.target.value,
                })
              }
            />
          </label>
          <label>
            Mô tả:
            <input
              type="text"
              value={editProduct.description}
              onChange={(e) =>
                setEditProduct({ ...editProduct, description: e.target.value })
              }
            />
          </label>
          <label>
            Hình ảnh (URL):
            <input
              type="text"
              value={editProduct.image}
              onChange={(e) =>
                setEditProduct({ ...editProduct, image: e.target.value })
              }
            />
          </label>
          <button onClick={handleSaveEdit}>Lưu</button>
          <button onClick={() => setEditProduct(null)}>Hủy</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
