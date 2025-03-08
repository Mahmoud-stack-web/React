import Entry from "./Components/Entry.jsx";
import Header from "./Components/Header.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <main className="container">
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "mount fuji",
          }}
          title="Mount Fuji"
          country="Japan"
          startDate="12 Jan, 2021"
          endDate="24 Jan, 2021"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
          googleMapsUrl="View on Google Maps"
        ></Entry>
      </main>
    </>
  );
}

export default App;
