import Counter from "./counter"
import Steps from "./steps"
import UsersList from "./fetchingApi"
import Countries from "./fetchCountries";


function App() {
  return (
    <>
    <h1 className="title">Counter</h1>
  
    <Counter />
    <Steps />
    <UsersList />
    <Countries />

    </>
  );
}

export default App;
