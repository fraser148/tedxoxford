import React        from 'react';
import Wave         from 'react-wavify'

class LayeredWaves extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div className="waves">
                <Wave fill='url(#gradient)'
                    paused={false}
                    className="wave1"
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3
                    }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%"  stopColor="#E62B1E8C" />
                        <stop offset="100%" stopColor="#F095741A" />
                        </linearGradient>
                    </defs>
                </Wave>
                <Wave fill='url(#gradient)'
                    paused={false}
                    className="wave2"
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3
                    }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%"  stopColor="#E62B1E8C" />
                        <stop offset="100%" stopColor="#F095741A" />
                        </linearGradient>
                    </defs>
                </Wave>
                <Wave fill='url(#gradient)'
                    paused={false}
                    className="wave3"
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3
                    }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%"  stopColor="#E62B1E8C" />
                        <stop offset="100%" stopColor="#F095741A" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>
      );
    }
  }
  
  export default LayeredWaves;
  