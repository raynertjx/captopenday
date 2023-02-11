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
          <CardItem id={1}/>
          <CardItem id={2}/>
          <CardItem id={3}/>
        </div>
    );
}
