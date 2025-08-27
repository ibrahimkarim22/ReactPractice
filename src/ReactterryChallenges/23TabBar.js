/**https://www.reacterry.com/portal/challenges/tab-bar */

/**Tab bar

Build a component Tabs that displays a list of tabs for either viewing
 information about a person or viewing information about an address.
  You should make the tab functional so that when the tab Person is 
  active then return the PersonContainer with all its children. 
  Implement the same logic for the Address tab. */

/* my solution */

import styled from 'styled-components';

const person = {
  name: 'John Doe',
  age: 32,
  occupation: 'Developer'
};

const address = {
  street: '1234 Main St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94107'
};

const Tabs = () => {
  return (
    <Container>
      <TabList>
        <Tab data-testid="person-tab">
          Person
        </Tab>
        <Tab data-testid="address-tab">
          Address
        </Tab>
      </TabList>
      <TabContent>
        {/*  <PersonContainer data-testid="person-container">
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
          </PersonContainer>
          <AddressContainer data-testid="address-container">
            <p>Street: {address.street}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>
          </AddressContainer> */}
      </TabContent>
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid lightgray;
`;

const Tab = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: ${props => (props.active ? 'black' : 'gray')};
  background-color: ${props => (props.active ? 'lightgray' : 'white')};
`;

const TabContent = styled.div`
  padding: 20px;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
/*reacterry's solution*/