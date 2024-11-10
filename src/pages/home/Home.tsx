import { useQuery } from '@tanstack/react-query';
import { Dashboard } from '../../components/dashboard/Dashboard';
import './Home.css';
import { Header } from '../../components/header/Header';
import { useDigimonContext } from '../../context/DigimonContext';
import { useEffect } from 'react';

export const Home = () => {

    const { setDigimonList } = useDigimonContext();
    const { data, isLoading, error } = useQuery({
        queryKey: ['digimon'],
        queryFn: async () => {
            const response = await fetch('https://digimon-api.vercel.app/api/digimon');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        },
    });

    useEffect(() => {
        if (data) {
            setDigimonList(data);
        }

    }, [data, setDigimonList]);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error;

    return (
        <main>
            <Header />
            <Dashboard />
        </main>
    )
}
