import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import firebase from "../firebase/config";
const { db } = firebase;

const productsRef = collection(db, "products");

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Error al traer productos:", err);
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

export const getByCategory = async (category) => {
  try {
    const queryRef = category
      ? query(productsRef, where("category", "==", category))
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
