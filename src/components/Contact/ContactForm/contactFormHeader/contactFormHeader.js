import React from 'react';

import "./contactFormHeader.css";

const ContactFormHeader = () => {
    return(
        <h1 className="ContactHeader"> Some questions ? Let me know</h1>
    );
};

export default React.memo(ContactFormHeader);
