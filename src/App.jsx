import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

function App() {
  return (
    <main className="h-full md:h-screen bg-[#e5eff5] p-6 py-12 relative">
      <div className="rounded-lg overflow-hidden m-auto max-w-[375px] md:min-w-[70%] lg:min-w-[60%] lg:max-w-[60%] md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
        <Header />
        <div className="md:grid grid-cols-2">
          <SignUp />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
