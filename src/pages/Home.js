import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Particles from 'react-particles-js';
import moment from 'moment';
import anime from 'animejs';
import Sound from 'react-sound';

class Home extends Component {

    state = {
        days: '',
        months: '',
        years: '',
        dayMode: true,
        monthMode: false,
        yearMode: false,
        funMode: false,
        songList: [
            'LuSoTarHar',
            'Coconut',
            'Rickroll'
        ],
        activeSong: '',
        heartCount: 29
    }

    componentDidMount() {
        let given = moment("2017-12-29", "YYYY-MM-DD");
        let current = moment().startOf('day');

        let days = moment.duration(current.diff(given)).asDays() + 1,
        months = moment.duration(current.diff(given)).asMonths().toFixed(2),
        years = moment.duration(current.diff(given)).asYears().toFixed(2);

        let randomSong = this.state.songList[Math.floor(Math.random()*this.state.songList.length)]

        for (let i = 0; i < this.state.heartCount; i++) {
            let min = 1, max = 100;

            let Xpercent = Math.floor(Math.random() * (max - min + 1)) + min;
            let Ypercent = Math.floor(Math.random() * (max - min + 1)) + min;

            let Xdura = Math.floor(Math.random() * (max - min + 1)) + min;
            let Ydura = Math.floor(Math.random() * (max - min + 1)) + min;

            anime({
                targets: '.home-heart-' + (i+1),
                top: [
                    { value: Xpercent + '%', duration: Xdura * 100 },
                    { value: (Xpercent + 1) + '%', duration: Xdura * 100 }
                ],
                right: [
                    { value: Ypercent + '%', duration: Ydura * 100 },
                    { value: (Ypercent + 1) + '%', duration: Ydura * 100 }
                ],
                // rotate: '1turn',
                duration: 2000,
                loop: true
            });
        }
        


        this.setState({
            days,
            months,
            years,
            activeSong: randomSong
        });

        this.rotate();
    }

    rotate = () => {
        anime({
            targets: '.home-value',
            translateX: [
                { value: 0, duration: 1200 },
                { value: 0, duration: 800 }
            ],
            rotate: '1turn',
            duration: 2000,
            loop: true
        });
    }

    selectMode = (mode) => {
        switch (mode) {
            case 'days':
                this.setState({
                    dayMode: true,
                    monthMode: false,
                    yearMode: false
                }, () => {
                    this.rotate();
                });
                break;
            case 'months':
                this.setState({
                    dayMode: false,
                    monthMode: true,
                    yearMode: false
                }, () => {
                    this.rotate();
                });
                break;
            case 'years':
                this.setState({
                    dayMode: false,
                    monthMode: false,
                    yearMode: true
                }, () => {
                    this.rotate();
                });
                break;
            default: 
                this.setState({
                    dayMode: true,
                    monthMode: false,
                    yearMode: false
                }, () => {
                    this.rotate();
                });
                break;
        }
    }

    selectFunMode = () => {
        const val = this.state.funMode
        this.setState({
            funMode: !val
        }, () => {
            let disco = anime({
                targets: '.home-container',
                backgroundColor: [
                    { value: '#202543', duration: 1200 },
                    { value: '#b33939', duration: 1200 },
                    { value: '#cd6133', duration: 1200 },
                    { value: '#ccae62', duration: 1200 },
                    { value: '#218c74', duration: 1200 },
                    { value: '#227093', duration: 1200 },
                    { value: '#474787', duration: 1200 }
                ],
                duration: 2000,
                loop: true
            });

            if (this.state.funMode) {
                disco.play();

                anime({
                    targets: '.home-fun-wrap, .fun-btn',
                    width: [
                        { value: 0, duration: 1200 }
                    ],
                    border: [
                        { value: 0, duration: 50 }
                    ],
                    height: [
                        { value: 0, duration: 1200 }
                    ],
                    display: [
                        { value: 'none', duration: 1200 }
                    ],
                    duration: 2000
                });

                anime({
                    targets: '.fun-img',
                    width: [
                        { value: '100%', duration: 300000 }
                    ],
                    opacity: [
                        { value: '0.5', duration: 300000 }
                    ],
                    duration: 2000
                });
            }
        })
    }

    
    render() {

        const state = this.state;

        let hearts = [];

        for (let i = 0; i < state.heartCount; i++) {
            hearts.push(<img key={i} src={require('../assets/images/Pixel_heart_red.svg')} className={"home-heart home-heart-"+ (i+1)} />);
        }

        return (
            <div className="home-container">
            <Particles 
            params={{
                "particles": {
                    "number": {
                      "value": 160,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 1,
                      "random": true,
                      "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": false,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 1,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 400,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
            }} />
            
            <div className="home-wrap">
                {
                    state.dayMode ? 
                    <div className="home-value">
                        {state.days}
                    </div> : ''
                }
                {
                    state.monthMode ? 
                    <div className="home-value">
                        {state.months}
                    </div> : ''
                }
                {
                    state.yearMode ? 
                    <div className="home-value">
                        {state.years}
                    </div> : ''
                }
            </div>
            <div className="home-fun-wrap">
                <div className={state.funMode ? "fun-btn active" : 'fun-btn'} onClick={() => this.selectFunMode()}>
                    ?
                </div>
            </div>
            <div className="home-btn-wrap">
                <div className={state.dayMode ? "home-btn active" : "home-btn"} onClick={() => this.selectMode('days')}>
                    Days
                </div>
                <div className={state.monthMode ? "home-btn active" : "home-btn"} onClick={() => this.selectMode('months')}>
                    Months
                </div>
                <div className={state.yearMode ? "home-btn active" : "home-btn"} onClick={() => this.selectMode('years')}>
                    Years
                </div>
            </div>

            
            {
                state.funMode ? <img src={require('../assets/images/fun.jpg')} className="fun-img" /> : ''
            }
            {
                this.state.activeSong ? 
                    <Sound
                    url={require('../assets/music/'+ this.state.activeSong +'.m4a')}
                    playStatus={state.funMode ? Sound.status.PLAYING : Sound.status.STOPPED}
                    loop={true}
                    // playFromPosition={300}
                    // onLoading={this.handleSongLoading}
                    // onPlaying={this.handleSongPlaying}
                    // onFinishedPlaying={this.handleSongFinishedPlaying}
                /> : ''
            }

            {hearts}
            
            
            </div>
        );
    }
}

  
export default Home;

