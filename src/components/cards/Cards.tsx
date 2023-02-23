import React from "react";
import CardItem from "./CardItem";

export default function Cards() {
    function swap(e: React.MouseEvent) {
        let stack = document.querySelector(".stack");
        let card = document.querySelector(".card:last-child");
        if (e.target !== card) return;
        (card as HTMLElement).style.animation = "swap 700ms forwards";

        setTimeout(() => {
            (card as HTMLElement).style.animation = "";
            stack!.prepend(card as HTMLElement);
        }, 700);
    }

    return (
        <div id="cards" className="stack" onClick={swap}>
            <CardItem
                id={1}
                img_url="/sports2.jpg"
                alt="sports"
                link="https://captlife.com/life/sports/"
                button_text="Explore CAPT Sports"
            />
            <CardItem
                id={2}
                img_url="/clubsocs2.JPG"
                alt="clubsocs"
                link="https://captlife.com/life/clubs-and-societies/"
                button_text="Explore Clubs & Societies"
            />
            <CardItem
                id={3}
                img_url="/si.JPG"
                alt="social innovation"
                link="https://captlife.com/csc/si/"
                button_text="Explore Social Innovation"
            />
            <CardItem
                id={4}
                img_url="/sports.jpg"
                alt="ace"
                link= "https://captlife.com/csc/ace/"
                button_text="Explore ACE"
            />
            <CardItem
                id={5}
                img_url="/sports.jpg"
                alt="utcp"
                link="https://capt.nus.edu.sg/the-capt-experience/learning-capt/curriculum"
                button_text="Explore UTCP Modules"
            />
            <CardItem
                id={6}
                img_url="/sports.jpg"
                alt="support"
                link="https://captlife.com/capt-support/"
                button_text="Explore CAPT Support"
            />
            <CardItem
                id={7}
                img_url="/sports.jpg"
                alt="houses"
                link="https://captlife.com/roc-neighbourhood-page/"
                button_text="Explore CAPT's Houses"
            />
            <CardItem
                id={8}
                img_url="/sports.jpg"
                alt="steer"
                link="https://capt.nus.edu.sg/the-capt-experience/learning-capt/other-academic-activities/study-trips"
                button_text="Explore STEER Programs"
            />
        </div>
    );
}
