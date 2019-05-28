import React, {Component} from 'react';
import PokemonSelect from '../component/PokemonSelect';
import PokemonDetail from '../component/PokemonDetail';

class PokemonContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemon: null,
            imgurlfront: null,
            imgurlback: null,
            evolutionChain: null
        };
        this.chosenPokemon = this.chosenPokemon.bind(this);
    }

    componentDidMount(){
        const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
        fetch(url)
        .then(res => res.json())
        .then(pokemons => {
            this.setState({pokemons: pokemons.results});
        });
    }

    chosenPokemon(selectedIndex){
        const selectedPokemon = this.state.pokemons[selectedIndex];
        const pokemonPicNumber = parseInt(selectedIndex) + 1;
        this.setState({selectedPokemon: selectedPokemon});
        this.setState({imgurlfront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonPicNumber}.png`})
        this.setState({imgurlback: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonPicNumber}.png`})
        const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonPicNumber}/`;
        fetch(url)
        .then(res => res.json())
        .then(pokemons => {
            this.setState({evolutionChain: pokemons.evolution_chain.url});
        });
    }

    render(){
        return(
            <div>
                <PokemonSelect 
                pokemon={this.state.pokemons}
                onPokemonSelected={this.chosenPokemon}>
                </PokemonSelect>
                <PokemonDetail 
                pokePic={this.state.imgurlfront}
                pokePicBack={this.state.imgurlback}
                pokeName={this.state.selectedPokemon} 
                ></PokemonDetail>
            </div>
            
        )
    }
}

export default PokemonContainer;