import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import firebase from "../firebase/config";
const { db } = firebase;

const productsRef = collection(db, "products");

export const getProducts = async (name = "") => {
  try {
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((product) => product.active === true);

    if (!name) return products;

    const search = name.toLowerCase().trim();
    return products.filter((product) =>
      product.name.toLowerCase().includes(search),
    );
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    return [];
  }
};

export const getAllAdminProducts = async (name = "") => {
  try {
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (!name) return products;

    const search = name.toLowerCase().trim();
    return products.filter((product) =>
      product.name.toLowerCase().includes(search),
    );
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "products", id);
    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    return null;
  }
};

export const getByName = async (name) => {
  try {
    const queryRef = name
      ? query(productsRef, where("name", "==", name))
      : productsRef;

    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    return [];
  }
};

export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};

export const reduceStock = async (id, quantity) => {
  try {
    const productRef = doc(db, "products", id);
    const snapshot = await getDoc(productRef);
    if (!snapshot.exists()) throw new Error("Producto no encontrado");

    const currentStock = snapshot.data().stock ?? 0;
    if (currentStock < quantity) throw new Error("Stock insuficiente");

    await setDoc(productRef, { stock: currentStock - quantity }, { merge: true });
  } catch (error) {
    console.error("Error al reducir stock:", error);
    throw error;
  }
};

export const updateProduct = async (id, updatedData) => {
  try {
    const productRef = doc(db, "products", id);
    await setDoc(productRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    throw error;
  }
};
