import React, { Component } from "react";
import SortNode from "./SortNode";

const bubbleSort = (inputArr) => {
    const resultArr = inputArr.slice(0);
    const actions = [];
    const len = resultArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (resultArr[i] > resultArr[i + 1]) {
                let tmp = resultArr[i];
                resultArr[i] = resultArr[i + 1];
                resultArr[i + 1] = tmp;
                actions.push(i);
                swapped = true;
            }
        }
    } while (swapped);

    return { resultArr, actions };
};

const swap = (inputArr, i) => {
    inputArr = inputArr.slice();
    let tmp = inputArr[i];
    inputArr[i] = inputArr[i + 1];
    inputArr[i + 1] = tmp;
    return inputArr;
};


class BubbleSortVisualizer extends Component {
    state = {
        array: this.props.inputArray,
        currentIndex: 0,
        actions: bubbleSort(this.props.inputArray).actions,
        intervalId: null
    };

    intervalId = null;
        
    startSortingSeq = () => {
        clearInterval(this.intervalId);

        this.intervalId = setInterval(() => {
            if (this.state.currentIndex === this.state.actions.length) {
                clearInterval(this.intervalId);
            } else {
                const currentSwapAction = this.state.actions[this.state.currentIndex];
                const newArray = swap(this.state.array, currentSwapAction);
                this.setState((prevState) => ({
                    array: newArray,
                    currentIndex: prevState.currentIndex + 1
                }));
            }
        }, 1000);
    }

    componentDidMount() {
        this.startSortingSeq();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.inputArray !== this.props.inputArray) {
            clearInterval(this.intervalId);
            this.setState(() => ({
                array: this.props.inputArray,
                currentIndex: 0,
                actions: bubbleSort(this.props.inputArray).actions,
                intervalId: null
            }));
            this.startSortingSeq();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
        
    render() {
        const arrayEl = this.state.array.map((item, index) => (
            <SortNode 
                value={item}
                index={index}
                current={this.state.actions[this.state.currentIndex]}
                key={index}
            />
        ));
        
        return (
            <div className="bubble-sort-container">
                {arrayEl}
            </div>
        );
    }
}

export default BubbleSortVisualizer;