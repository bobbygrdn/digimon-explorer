import { FC } from "react";

interface DigimonCardProps {
    name: string;
    img: string;
    level: string;
}

export const DigimonCard: FC<DigimonCardProps> = ({ name, img, level }) => {
    return (
        <section>
            <h1>{name}</h1>
            <img src={img} alt={name} />
            <p>{level}</p>
        </section>
    )
}
