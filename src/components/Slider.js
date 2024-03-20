import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    return (
        <div>
            <AwesomeSlider>
                <div data-src="https://images.unsplash.com/photo-1612368812851-5f7baf8c0d1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">1</div>
                {/* <div>2</div>
                <div>3</div>
                <div>4</div> */}
            </AwesomeSlider>
        </div>
    )
}

export default Slider
