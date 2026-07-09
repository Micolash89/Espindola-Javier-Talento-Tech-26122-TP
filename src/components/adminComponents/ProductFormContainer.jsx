import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductFormContainer.css";
import ProductFormUI from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
} from "../../services/productsService";

const RARITY_OPTIONS = [
  "Common",
  "Rare",
  "Super Rare",
  "Ultra Rare",
  "Collector's Rare",
  "Secret Rare",
  "Ultimate Rare",
];

const TYPE_OPTIONS = ["box", "single", "booster", "pack"];

const PRODUCT_LINE_OPTIONS = [
  "yugioh",
  "digimon",
  "pokemon",
  "magic",
  "one piece",
];

export default function ProductFormContainer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditing);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    type: "box",
    price: "",
    rarity: "Common",
    rarity_code: "",
    category: "",
    product_line_name: "yugioh",
    stock: "",
  });

  useEffect(() => {
    getProducts()
      .then((data) => {
        const unique = [
          ...new Set(data.map((p) => p.category).filter(Boolean)),
        ];
        setCategories(unique.sort());
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!id) return;
    getProductById(id)
      .then((data) => {
        if (data) {
          setProduct({
            name: data.name || "",
            slug: data.slug || "",
            type: data.type || "box",
            price: data.price ?? "",
            rarity: data.rarity || "Common",
            rarity_code: data.rarity_code || "",
            category: data.category || "",
            product_line_name: data.product_line_name || "yugioh",
            stock: data.stock ?? "",
            img: data.img || "",
            product_id: data.product_id || "",
            active: data.active ?? true,
            featured: data.featured ?? false,
          });
        }
      })
      .catch(() => {})
      .finally(() => setFetching(false));
  }, [id]);

  const generateSlug = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .slice(0, 80);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...product, [name]: value };

    if (name === "name") {
      next.slug = generateSlug(value);
    }

    setProduct(next);
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0] || null;
    setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file, existingImage: product.img });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = file ? await uploadImage(file) : product.img;

      const productData = {
        name: product.name,
        slug: product.slug,
        type: product.type,
        img: imageUrl,
        price: product.price,
        rarity: product.rarity,
        rarity_code: product.rarity_code,
        category: product.category,
        product_line_name: product.product_line_name,
        stock: Number(product.stock),
      };

      if (isEditing) {
        productData.product_id = product.product_id;
        productData.active = product.active;
        productData.featured = product.featured;

        await updateProduct(id, productData);
        navigate("/admin/dashboard", { replace: true });
      } else {
        productData.product_id = crypto.randomUUID();
        productData.active = true;
        productData.featured = false;

        const docId = await createProduct(productData);

        setProduct({
          name: "",
          slug: "",
          type: "box",
          price: "",
          rarity: "Common",
          rarity_code: "",
          category: "",
          product_line_name: "yugioh",
          stock: "",
        });
        setFile(null);
        navigate(`/admin/products/success/${docId}`, { replace: true });
      }
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <p className="loading-text">Cargando producto...</p>;

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      categories={categories}
      isEditing={isEditing}
      fileName={file?.name || null}
      rarityOptions={RARITY_OPTIONS}
      typeOptions={TYPE_OPTIONS}
      productLineOptions={PRODUCT_LINE_OPTIONS}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
}
