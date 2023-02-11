import React from "react";

export interface Props {
    id: number;
}

const CardItem: React.FC<Props> = (props) => {
    return (
        <div className="bg-white text-black h-4/6 border-red-400 absolute grid items-center justify-center card">
            {props.id}
        </div>
    );
};

export default CardItem;
