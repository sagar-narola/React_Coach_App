import React from 'react';

export default class SubmitButton extends React.Component{

  render() {
    return (
      <div>
        <input type="submit" className="g-btn block-btn" value={this.props.submit}/>
      </div>
    );
  }
}
