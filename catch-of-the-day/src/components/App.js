import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);  

        // getintializeState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        //copy of state
        const fishes = {...this.state.fishes};
        
        // add fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;

        //set state
        this.setState({ fishes });
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }


    render() {
        return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
                <ul className="list-of-fishes">
                    {
                        Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key={key} />)
                    }
                </ul>
            </div>
            <Order />
            <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
        </div>
        )
    }
}

export default App;