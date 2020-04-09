import React from "react";
// you can build out an empty component as long as it has a return with an empty div
// this will help to get your App layout setup and really make you think like a developer

// make sure that the name of this component ALWAYS matches your file name! 
export default function CharacterCard(props) {
    // pass in props
    // map over the data that way you can...
    // pull out peices of your data that you want for each character
    return (
        <div>
            {/* give each character a key to avoid the error */}
            {/* use the parameter that you declared in your map */}
            {props.character_data.map(character => (
                <div className="card-container" key={character.id}>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt="rick and morty character" />
                    <p>Species: {character.species}</p>
                    {/* notice how we drill down one more to get to location */}
                    <p>Location: {character.location.name}</p>
                </div>
            ))}
        </div>
    )
}