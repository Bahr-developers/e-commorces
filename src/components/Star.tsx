import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

const Star = () => {
    return (
        <div className="star flex text-yellow-400">
                        <TiStarFullOutline/>
                        <TiStarFullOutline/>
                        <TiStarFullOutline/>
                        <TiStarFullOutline/>
                        <TiStarHalfOutline/>
        </div>
    );
};

export default Star;