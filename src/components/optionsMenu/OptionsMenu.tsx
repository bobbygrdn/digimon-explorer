import { useEffect, useState } from "react";
import { useDigimonContext } from "../../context/DigimonContext";
import "./OptionsMenu.css";

export const OptionsMenu = () => {

    const { digimonList, filteredDigimonList, setFilteredDigimonList, setSelectedDigimon } = useDigimonContext();

    const [digimonName, setDigimonName] = useState<string>("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

    useEffect(() => {
        if (digimonName) {
            const suggestions = filteredDigimonList
                .map(digimon => digimon.name)
                .filter(name => name.toLowerCase().startsWith(digimonName.toLowerCase()));
            setFilteredSuggestions(suggestions);
        } else {
            setFilteredSuggestions([]);
        }
    }, [digimonName, filteredDigimonList]);

    const handleSuggestionClick = (name: string) => {
        setDigimonName(name);
        setFilteredSuggestions([]);
        const selectedDigimon = filteredDigimonList.find(digimon => digimon.name === name);
        setSelectedDigimon(selectedDigimon || null);
        setDigimonName("");
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === "All") {
            setFilteredDigimonList(digimonList);
            return;
        }
        setFilteredDigimonList(digimonList.filter(digimon => digimon.level === event.target.value));
    };

    return (
        <section id="optionsMenuContainer">
            <h2>Filters</h2>
            <label htmlFor="level">Level</label>
            <select name="level" id="level" onChange={handleFilter} defaultValue={"All"} className="optionsMenuInput">
                <option value="All">All</option>
                <option value="In Training">In Training</option>
                <option value="Fresh">Fresh</option>
                <option value="Rookie">Rookie</option>
                <option value="Armor">Armor</option>
                <option value="Champion">Champion</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Mega">Mega</option>
            </select>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="optionsMenuInput" placeholder="Select your Digimon..." onChange={(e) => setDigimonName(e.target.value)} value={digimonName} />
            <ul className="suggestions-list" style={{ visibility: filteredSuggestions.length > 0 ? "visible" : "hidden" }}>
                {filteredSuggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </section>
    )
};