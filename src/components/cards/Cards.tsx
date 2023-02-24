import React from "react";
import CardItem from "./CardItem";

export default function Cards() {
    function swap(e: React.MouseEvent) {
        let stack = document.querySelector(".stack");
        let card = document.querySelector(".card:last-child");
        if (e.target instanceof HTMLAnchorElement) return;
        (card as HTMLElement).style.animation = "swap 700ms forwards";

        setTimeout(() => {
            (card as HTMLElement).style.animation = "";
            stack!.prepend(card as HTMLElement);
        }, 700);
    }

    return (
        <div>
            
            <div id="cards" className="stack" onClick={swap}>
                <CardItem
                    id={1}
                    img_url="/img/steer.JPG"
                    alt="steer"
                    link="https://capt.nus.edu.sg/the-capt-experience/learning-capt/other-academic-activities/study-trips"
                    button_text="Explore STEER Programs"
                />
                <CardItem
                    id={2}
                    img_url="/img/housecomm.jpeg"
                    alt="houses"
                    link="https://captlife.com/roc-neighbourhood-page/"
                    button_text="Explore CAPT's Houses"
                />
                <CardItem
                    id={3}
                    img_url="/img/module.jpeg"
                    alt="utcp"
                    link="https://capt.nus.edu.sg/the-capt-experience/learning-capt/curriculum"
                    button_text="Explore UTCP Modules"
                />
                <CardItem
                    id={4}
                    img_url="/img/ace.png"
                    alt="ace"
                    link="https://captlife.com/csc/ace/"
                    button_text="Explore ACE"
                />
                <CardItem
                    id={5}
                    img_url="/img/si2.png"
                    alt="social innovation"
                    link="https://captlife.com/csc/si/"
                    button_text="Explore Social Innovation"
                />
                <CardItem
                    id={6}
                    img_url="/img/clubsocs2.JPG"
                    alt="clubsocs"
                    link="https://captlife.com/life/clubs-and-societies/"
                    button_text="Explore Clubs & Societies"
                />
                <CardItem
                    id={7}
                    img_url="/img/sports2.jpg"
                    alt="sports"
                    link="https://captlife.com/life/sports/"
                    button_text="Explore CAPT Sports"
                />
            </div>
            <div className="text-center">Click the cards above!</div>   
        </div>
    );
}
