import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div className="ColorPicker__mini">
          {this.props.options.map(({ label, color }, index) => {
            const classNames = this.makeOptionClassName(index);

            return (
              <button
                type="button"
                className={classNames}
                key={label}
                style={{ backgroundColor: color }}
                onClick={() => {
                  this.setActiveIdx(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
