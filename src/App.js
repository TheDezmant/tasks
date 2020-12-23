import './App.css';
import Authorization from "./components/Authorization";

const App = () => {

    const addressPeople = {
            country: "Россия",
            region: "Московский",
            city:"Москва",
            street:"Пушкина"
        }
    const address = `${addressPeople.country}, ${addressPeople.region}, ${addressPeople.city}, ${addressPeople.street}`
    console.log(address)
  return (
      <>
          {addressPeople.country !==null ? `Страна ${addressPeople.country}` : ""}
          {addressPeople.region !== null ? `Регион ${addressPeople.region}, `: ""}
          {addressPeople.city !== null ? `Город ${addressPeople.city}, `: ""}
          {addressPeople.street !== null ? `Улица ${addressPeople.street}`: ""}

          <Authorization />
      </>
  )
}

export default App;
