import React from 'react';

import { useSelector } from "react-redux";

// import messengerChat
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
    console.log("RENDERING MESSENGER")

    const visible = useSelector( state => state.visibleNavReducer.visible)

    let messenger = null
    if (visible) {
        messenger = <MessengerCustomerChat pageId="101735315337796"appId="798827840988723" />
    } 

    return (
        <React.Fragment>
            {messenger}
        </React.Fragment>
    );
};

export default React.memo(Messenger);
