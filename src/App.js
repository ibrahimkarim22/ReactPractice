import Counter from "./counter"
import Steps from "./steps"
import UsersList from "./fetchingApi"
import Countries from "./fetchCountries";
import CounterTwo from "./counter2";
import Dogs from "./dogs";
import ExpensiveCalculation from "./memo";


function App() {
  return (
    <>
    <ExpensiveCalculation />
    <Dogs />
    <CounterTwo />
    <Counter />
    <Steps />
    <UsersList />
    <Countries />

    </>
  );
}

export default App;
