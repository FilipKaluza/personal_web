import { memo, Fragment } from 'react';

// import messengerChat
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {

    return (
        <Fragment>
            <MessengerCustomerChat pageId="101735315337796" appId="798827840988723" />
        </Fragment>
    );
};

export default memo(Messenger);
