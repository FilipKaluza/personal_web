import React from 'react';

// import messengerChat
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {

    return (
        <React.Fragment>
            <MessengerCustomerChat pageId="101735315337796"appId="798827840988723" />
        </React.Fragment>
    );
};

export default React.memo(Messenger);
