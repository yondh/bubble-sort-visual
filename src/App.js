import React, { Component } from 'react';
import BubbleSortVisualizer from "./components/BubbleSortVisualizer";
import './App.css';

class App extends Component {

    state = {
        joke: true,
        currentArray: [],
        inputText: ""
    };

    onJokeClick = (e) => {
        this.setState(() => ({ joke: false }));
    };

    onInputText = (e) => {
        const value = e.target.value;
        this.setState(() => ({ inputText: value }));
    };

    onStartSortClick = (e) => {
        const unsortedArray = this.state.inputText.split(" ").map((item) => +item);
        this.setState(() => ({ currentArray: unsortedArray, inputText: "" }));
    };

    //[10 5 7 6 13 -4 15 -7 9 21]
    render() {
        return (
            <div>
                <div className="title">Bubble Sort Visualizer</div>
                {
                    this.state.joke ? (
                        <div className="joke-container">
                            <iframe title="sort-video" width="100%" height="500" src="https://www.youtube.com/embed/lyZQPjUT5B4?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div>Joking :)</div>
                            <button className="btn" onClick={this.onJokeClick}>Click for real sort</button>
                        </div>
                    ) : (
                        <div>
                        <div className="array-input-container">
                            <span>Enter Numbers (separated by spaces)</span>
                            <input className="text-input" type="text" value={this.state.inputText} onChange={this.onInputText} placeholder="Ex: 2 1 5 3" />
                            <button className="btn" onClick={this.onStartSortClick}>Start Sorting</button>
                        </div>
                        {this.state.currentArray.length > 2 ? 
                            <BubbleSortVisualizer inputArray={this.state.currentArray} />
                            :
                            null    
                        }
                        </div>
                    )
                }
            </div>
        );
    }
};

export default App;
