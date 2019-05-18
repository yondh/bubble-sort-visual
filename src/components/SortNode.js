import React from "react";
import classNames from "classnames";

const SortNode = (props) => {
    const { value, index, current } = props;
    const classes = classNames({
        "arrayEl": true,
        "current": current === index,
        "next": current + 1 === index
    });

    const style = {
        height: `${Math.abs(value) * 7}px`,
        bottom: value < 0 ? `${value * 7}px` : 0
    };

    const numberClass = value > 0 ? "number-indicator-pos" : "number-indicator-neg";

    return (
        <div 
            className={classes}
            style={style}
        >
            <span className={numberClass}>{ value }</span>
        </div>
    );
};

export default SortNode;