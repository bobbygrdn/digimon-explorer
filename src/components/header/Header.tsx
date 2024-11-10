import "./Header.css"
import DigimonLogo from "../../assets/digimon-logo.png"
export const Header = () => {
    return (
        <div id="header">
            <img src={DigimonLogo} alt="digimon-logo" height="70%"
                width="auto" />
            <h1>Digimon Explorer</h1>
        </div>
    )
}
