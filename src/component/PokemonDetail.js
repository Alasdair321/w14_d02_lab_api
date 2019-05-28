import React, {Component} from 'react';

const PokemonDetail = (props) => {
    if (!props.pokeName ) {
        return(
            <p>Select a pokemon!</p>
        );
    } 

        return(
            <div>
                <p>{props.pokeName.name.toUpperCase()}, I CHOOSE YOU!!!</p>
                <img src={props.pokePic} alt="pokemon"></img>
                <img src={props.pokePicBack} alt="pokemon"></img>
            </div>
        )
}
    

export default PokemonDetail;