import { useState, useEffect } from 'react';
import { Repository } from '../repository';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../redux/selectors'

function useEvents() {
  const [events, setEvents] = useState([]);
  const userDetails = useSelector(getUserDetails);

  const { token } = userDetails

  useEffect(() => {
    const getEvents = async () => {
      try {
        const fetchedEvents = await Repository.getEvents(token);
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Get Events Failed:', error);
      }
    };

    getEvents();
  }, []);

  return events;
}

export { useEvents };
