import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          <BarLoader color="#f6c400" height={4} />
        </div>
      }>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <BarLoader color="#f6c400" height={4} />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};
AOS.init({
  offset: 0,
  duration: 1000,
});

export default App;
