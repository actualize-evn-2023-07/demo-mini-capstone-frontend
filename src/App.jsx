import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [flashMessage, setFlashMessage] = useState(null);

  useEffect(() => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        {flashMessage ? (
          <div className="flash" onClick={() => setFlashMessage(null)}>
            {flashMessage}
          </div>
        ) : null}
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
