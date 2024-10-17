import { useState, useEffect } from "react";
import MyContext from "./myContext";
import { query, onSnapshot, orderBy, collection } from "firebase/firestore";
import { fireDB } from "../../components/firebase/FirebaseConfig";

export default function MyState({ children }) {
  const [loading, setLoading] = useState(false);

  const [getAllProduct, setGetAllProduct] = useState([]);

  /**========================================================================
   *========================================================================**/

  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductFunction();
  }, []);
  return (
    <MyContext.Provider
      value={{ loading, setLoading, getAllProduct, getAllProductFunction }}
    >
      {children}
    </MyContext.Provider>
  );
}
