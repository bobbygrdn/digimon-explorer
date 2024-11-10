import { FC, useEffect, useState } from 'react';
import Digivice_tri from '../../assets/Digivice_tri.png';
import Digivice_tri_jou from '../../assets/Digivice_tri_jou.png';
import Digivice_tri_koushirou from '../../assets/Digivice_tri_koushirou.png';
import Digivice_tri_mimi from '../../assets/Digivice_tri_mimi.png';
import Digivice_tri_sora from '../../assets/Digivice_tri_sora.png';
import Digivice_tri_taichi from '../../assets/Digivice_tri_taichi.png';
import Digivice_tri_yamato from '../../assets/Digivice_tri_yamato.png';
import './Digivice.css';
import { useDigimonContext } from '../../context/DigimonContext';

const digiviceImages = {
    Digivice_tri,
    Digivice_tri_jou,
    Digivice_tri_koushirou,
    Digivice_tri_mimi,
    Digivice_tri_sora,
    Digivice_tri_taichi,
    Digivice_tri_yamato,
};

export const Digivice: FC = () => {
    const { selectedDigimon } = useDigimonContext();
    const [digiviceSelect, setDigiviceSelect] = useState<string>(digiviceImages.Digivice_tri);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (selectedDigimon !== null) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [selectedDigimon]);


    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDigiviceSelect(event.target.value);
    };

    return (
        <section id='digivice-container'>
            <h2 style={{ marginBottom: "1rem" }}>Digivice Style</h2>
            <select name="digimon-selector" id="digimon-selector" onChange={handleSelection} value={digiviceSelect}>
                <option className='digimon-selector-option' value={digiviceImages.Digivice_tri}>Standard</option>
                <option className='digimon-selector-option' value={digiviceImages.Digivice_tri_koushirou}>Izzy</option>
                <option className='digimon-selector-option' value={digiviceImages.Digivice_tri_jou}>Jou</option>
                <option className='digimon-selector-option' value={digiviceImages.Digivice_tri_mimi}>Mimi</option>
                <option className='digimon-selector-option' value={digiviceImages.Digivice_tri_sora}>Sora</option>
                <option className='digimon-selector-option' value={digiviceImages.Digivice_tri_taichi}>Taichi</option>
                <option className='digimon-selector-option' value={digiviceImages.Digivice_tri_yamato}>Yamato</option>
            </select>
            <div id="digivice">
                <img style={{ visibility: digiviceSelect ? "visible" : "hidden" }} src={digiviceSelect} alt="digivice" id='digivice-image' />
                <img hidden={selectedDigimon === null} src={selectedDigimon?.img} alt="selected digimon" id='digimon-image' />
            </div>
            <h2 style={{ visibility: isVisible ? "visible" : "hidden" }}>{selectedDigimon?.name || "Digimon Name"}</h2>
            <h2 style={{ visibility: isVisible ? "visible" : "hidden" }}>{selectedDigimon?.level || "Digimon Level"}</h2>
        </section>
    )
}