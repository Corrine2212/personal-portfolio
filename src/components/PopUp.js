import React from 'react';

class PopUp extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showMessage: true,
        };
      }
      componentDidMount() {
        if (typeof window !== 'undefined' && this.state.showMessage) {
          alert('Page has finished loading!');
          this.setState({ showMessage: false });
        }
      }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default PopUp;
