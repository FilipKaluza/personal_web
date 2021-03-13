import React from 'react'
import Typical from 'react-typical'

const Example = (props) => {

    const mainText = "Hi, I'm Filip Kaluža and I'm web developer. ";

    return (

      <Typical
        steps={[
            mainText + "I work patiently and consistently.", 6000,
            mainText + "I am constantly learning new technologies.", 6000,

        ]}
        loop={Infinity}
      />
    )
}

export default Example;