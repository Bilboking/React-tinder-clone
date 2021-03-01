import React, { useState } from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card";


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Lily James',
            url: 'https://www.newdvdreleasedates.com/images/profiles/lily-james-12.jpg'
        },
        {
            name: 'Carrie Mulligan',
            url: 'https://s-i.huffpost.com/gadgets/slideshows/351163/slide_351163_3785870_free.jpg'
        }
    ]);

        const swiped = (direction, nameToDelete) => {
            console.log("removing" + nameToDelete)
        }

        const outOfFrame = (name) => {
            console.log(name + "left the screen")
        }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                 {people.map((person) => 
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`
                            }}
                            className="card"

                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
            )}
            </div> 
        </div>
    )
}

export default TinderCards
