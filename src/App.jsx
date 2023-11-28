import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

function App() {
  return (
    <main className="h-full md:h-screen bg-[#e5eff5] p-6 py-12 relative">
      <div className="rounded-lg overflow-hidden max-w-[375px] md:max-w-[70%] lg:max-w-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
