import { Component } from 'react'
import PropTypes from "prop-types";
import { FormErrorMessage } from './FormErrorMessage';

class InputText extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(text) {
        this.props.onChange(this.props.id, text)
    }

    render() {
        return (
          <React.Fragment>
            <input
              type="text"
              onChangeText={(text) => this.handleChange(text)}
              placeholder={this.props.placeholder}
              value={this.props.value}
            />
            {this.props.error && this.props.error.length > 0 && (
              <FormErrorMessage error={this.props.error}/>
            )}
          </React.Fragment>
        )
    }
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func

};

export default InputText
