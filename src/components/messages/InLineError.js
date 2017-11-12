import React from 'react';
import PropTypes from 'prop-types';

const InLineError = ({ text }) => {
    return (
        <span style={{ color: "red"}}>
            {text}
        </span>
    );
};

InLineError.propTypes = {
    text: PropTypes.string.isRequired
}

export default InLineError;