import { FC } from "react";
import { OptionsMenu } from "../optionsMenu/OptionsMenu";
import { Digivice } from "../digivice/Digivice";
import './Dashboard.css';

export const Dashboard: FC = () => {

    return (
        <main id="dashboardContainer">
            <Digivice />
            <OptionsMenu />
        </main>
    )
}
