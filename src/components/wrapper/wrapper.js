import React from "react";

const Wrapper = ({ loader, children}) => {

    return (
        <div style={{marginRight: "calc(-1 * (100vw - 100%)"}} className="bodyContainer">
        {children}
        </div>
    );
};

export default Wrapper;
