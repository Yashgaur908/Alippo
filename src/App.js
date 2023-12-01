import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  // Initialize state to store the fetched data
  const [data, setData] = useState([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the provided API endpoint
        const response = await fetch('https://assets.alippo.com/catalog/static/data.json');

        // Parse the JSON response
        const result = await response.json();

        // Update the state with the fetched data
        setData(result);
      } catch (error) {
        // Log an error message if there's an issue fetching data
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className="App">
      <h1>Dashboard</h1>
      
      {/* Render the Table component, passing the data and setData as props */}
      <Table data={data} setData={setData} />
    </div>
  );
}

export default App;
