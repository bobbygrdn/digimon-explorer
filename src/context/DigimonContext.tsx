import { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';

interface Digimon {
    name: string;
    img: string;
    level: string;
}

interface DigimonContextProps {
    digimonList: Digimon[];
    setDigimonList: (digimon: Digimon[]) => void;
    filteredDigimonList: Digimon[];
    setFilteredDigimonList: (digimon: Digimon[]) => void;
    selectedDigimon: Digimon | null;
    setSelectedDigimon: (digimon: Digimon | null) => void;
}

const DigimonContext = createContext<DigimonContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useDigimonContext = () => {
    const context = useContext(DigimonContext);
    if (!context) {
        throw new Error('useDigimonContext must be used within a DigimonProvider');
    }
    return context;
};

export const DigimonProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [digimonList, setDigimonList] = useState<Digimon[]>([]);
    const [selectedDigimon, setSelectedDigimon] = useState<Digimon | null>(null);
    const [filteredDigimonList, setFilteredDigimonList] = useState<Digimon[]>([]);

    useEffect(() => {
        setFilteredDigimonList(digimonList);
    }, [digimonList]);

    return (
        <DigimonContext.Provider
            value={{
                digimonList,
                setDigimonList,
                selectedDigimon,
                setSelectedDigimon,
                filteredDigimonList,
                setFilteredDigimonList,
            }}
        >
            {children}
        </DigimonContext.Provider>
    );
};