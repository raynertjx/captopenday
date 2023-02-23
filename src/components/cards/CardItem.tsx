import React from "react";

export interface Props {
    id: number;
    alt: string;
    img_url: string;
    link: string;
    button_text: string;
}

const cardHeadings = [
    <div>
        Are you interested in <b>sports</b>?
    </div>,
    <div>
        Are you more of a <b>creative</b> person?
    </div>,
    <div>
        Do you have an <b>innovative</b> idea you want to bring to life?
    </div>,
    <div>
        Are you passionate about <b>community engagement</b>?
    </div>,
    <div>
        Interested in learning about <b>academics</b> in CAPT?
    </div>,
    <div>
        Are you passionate in <b>mental wellness</b> advocacy?
    </div>,
    <div>
        Interested in learning about CAPT's <b>house culture</b>?
    </div>,
    <div>
        Do you like <b>travelling</b> and <b>learning</b> about the world?
    </div>,
];

const CardItem: React.FC<Props> = (props) => {
    return (
        <div className="bg-white text-black h-5/6 border-red-400 absolute card flex flex-col items-center gap-2 hover:cursor-pointer">
            <img
                src={props.img_url}
                alt={props.alt}
                className="h-44 w-44 sm:h-56 sm:w-56 object-cover rounded-xl"
            />
            <div className="text-center text-[#7c123a] font-medium font-['Montserrat'] text-sm px-4 pt-4 pb-3">
                {cardHeadings[props.id - 1]}
            </div>
            <a
                target="_blank"
                href={props.link}
                className="py-2 px-8 text-center bg-[#7c123a] text-white rounded-full font-['Montserrat'] text-xs hover:bg-red-700"
            >
                {props.button_text}
            </a>
        </div>
    );
};

export default CardItem;
