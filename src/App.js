import "./App.css";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";
import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App

  const renderContacts = () => {
    return contacts.map((contact, index) => (
      <Contact data={contact} key={index} />
    ));
  };
  return (
    <div className="App">
      <Header />
      {renderContacts()}
    </div>
  );
};

export default App;
