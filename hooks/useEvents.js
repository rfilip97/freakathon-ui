import { useState, useEffect, useCallback } from 'react';
import { Repository } from '../repository';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../redux/selectors';

function useEvents() {
  const [events, setEvents] = useState([]);
  const [refetchIndex, setRefetchIndex] = useState(0);
  const userDetails = useSelector(getUserDetails);
  const { token } = userDetails;

  const refetchEvents = useCallback(() => {
    setRefetchIndex((prevIndex) => prevIndex + 1);
  }, []);

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
  }, [token, refetchIndex]);

  return { events, refetchEvents };
}

export { useEvents };
