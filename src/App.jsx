import "./App.css";

function App() {
  return (
    <div className="bg-beige min-h-screen p-6">
      <h1 className="text-4xl font-heading text-primary mb-4">
        Elevate Your Brew
      </h1>
      <p className="font-body text-greenDark bg-softBox p-4 rounded">
        Coffee is a ritual worth sharing.
      </p>
      <button className="bg-primary text-white px-4 py-2 rounded mt-4 hover:bg-opacity-80 transition">
        Join the Club
      </button>
    </div>
  );
}

export default App;
