import Particles from 'react-particles-js';

const background = () => {
    console.log("BG")
    return(
        <>
            <Particles
                    width="100vw"
                    height="100vh"
                    className="BG"
                    params={{
                    "particles": {
                        "number": {
                            "value": 200,
                            "density": {
                                "enable": true
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 1,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": false,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "repulse": {
                                "distance": 170,
                                "duration": 1
                            }
                        }
                    }
                }} />
            </>
    );
}

export default background;