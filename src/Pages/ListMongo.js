import axios from "axios";
import {useState, useEffect} from "react";

const GuestList = () => {
    const [guests, setGuests] = useState([]);
  
    useEffect(() => {
      const fetchGuests = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/guests');
          setGuests(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchGuests();
    }, []);
  
    return (
      <div>
        <h1>Guest List</h1>
        <ul>
          {guests.map((guest) => (
            <li key={guest._id}>
              <strong>Name:</strong> {guest.name} <br />
            <strong>Party Of:</strong> {guest.partyOf} <br />
            <strong>Allergies:</strong> {guest.allergies || 'None'}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default GuestList;

