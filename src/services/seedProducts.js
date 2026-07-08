import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import firebase from "../firebase/config";
import { products } from "../data/products";

const { db } = firebase;

export const seedProductsToFirestore = async () => {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);

  if (!snapshot.empty) {
    const deletes = snapshot.docs.map((d) => deleteDoc(doc(db, "products", d.id)));
    await Promise.all(deletes);
  }

  const results = [];
  for (const product of products) {
    const { id: _id, ...productData } = product;
    const docRef = await addDoc(productsRef, productData);
    results.push(docRef.id);
  }

  return results;
};
