import React, { Component } from "react";
import scrollTrigger from '../../libs/gsap/gsap.min.js';

const Wrapper = (WrappedComponent) => {
    return class extends Component (
        <div className="example-wrapper">
            <WrappedComponent {...this.props} />
        </div>
    )
}