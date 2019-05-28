import React, {Component} from 'react';

const PokemonSelect = (props) => {
    
    const allPokemon = props.pokemon.map((pokemon, index)=>{
        return (
            <option key={index} value={index}>{pokemon.name}</option>
        )
    });
    
   function handleSelectChange(evt){       
        const selectedIndex = evt.target.value;
        props.onPokemonSelected(selectedIndex);
    }

    return(
        <select id="pokemon-selector"
        defaultValue="default"
        onChange={handleSelectChange}>
        <option disabled value="default">Choose a pokemon!</option>
            {allPokemon}
        </select>
    );

}

export default PokemonSelect;