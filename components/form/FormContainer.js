import { Component } from 'react';
import fetch from "isomorphic-unfetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { validateEmail, validatePhoneNumber } from '../../helpers/FormValidateHelpers'

class FormContainer extends Component {
  constructor (props) {
    super(props)

    const encodedCredentials = 'Y2VsaW5lOmFkbWlu';
    this.state = {
      fields: [],
      button: {},
      fieldValues: {},
      success: false,
      errors: {},
      isSending: false,
      submitSuccess: false,
      submitFailure: false
    }
  }


  handleFieldChange = (e, fieldId, inputId) => {
      let value = e.target.value;

        if (inputId) {
            this.setState({
                fieldValues: {
                    ...this.state.fieldValues,
                    [inputId]: value,
                    [fieldId]: {
                        ...this.state.fieldValues[fieldId],
                        [inputId]: value,
                    },
                }
            })
        } else {

            this.setState({

                fieldValues: {
                    ...this.state.fieldValues,
                    [fieldId]: value,
                }

            })
        }
    }

  submitForm = e => {
    e.preventDefault();

    this.setState({ isSending: true })
    let formData = {}
    let fieldCount = Object.keys(this.state.fieldValues).length
    Object.keys(this.state.fieldValues).forEach(key => {
        if (typeof this.state.fieldValues[key] == 'object' && this.state.fieldValues[key] !== null) {
            fieldCount--
        } else {
            formData = { ...formData, [key]: this.state.fieldValues[key] }
        }
        if (Object.keys(formData).length == fieldCount) this.postFormData(formData)
    })

  }



    postFormData(formData) {
        fetch(`https://app.cosmosdigital.co.uk/tipi/wp-json/gf/v2/forms/1/entries`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic Y2VsaW5lOmFkbWlu`,
            },
            body: JSON.stringify(formData),

        })
        .then(response =>
        response.json().then(data => ({
            data: data,
            status: response.status
        })
        ).then(res => {
          res.status === 201 ? this.setState({ isSending: false,
          submitSuccess: true }) : this.setState({ isSending: false,
          submitFailure: true })
          fetch(`https://app.cosmosdigital.co.uk/tipi/wp-json/gf/v2/entries/${res.data.id}/notifications`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Basic Y2VsaW5lOmFkbWlu`,
              }

          }).catch(err => console.error('notification error: ', err));
        }))

            .catch(err => console.error('Entry error: ', err));

      }

componentDidMount() {
  fetch(`https://app.cosmosdigital.co.uk/tipi/wp-json/gf/v2/forms/${this.props.id}`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Basic Y2VsaW5lOmFkbWlu`,
      }}).then(response => response.json())
      .then(data => this.setState({ fields: data.fields, button: data.button}));
}

  render () {


    const { errors, success } = this.state;

    const {
        id,
        submitButton,
        fields

    } = this.props;

    if (this.state.isSending) {
        return (

                <p>Submitting Form...</p>

        )
    }

    if (this.state.submitSuccess) {
        return (

          <div className="short-text">
            <h3>Thank you for contacting us.</h3>
            <p>
              We have received your message, we will be in touch very soon.
            </p>
          </div>

        )
    }

    if (this.state.submitFailure) {
        return (

          <div className="short-text">
            <h3>Sorry an error occured</h3>
            <p>
              Please refresh the page and try again.
            </p>
          </div>

        )
    }



      return (

        <div>
        {!this.submitSuccess &&
        <React.Fragment>

          {this.submitFailure &&
            <p>An error occured, please try again.</p>
          }
        <form className="form" onSubmit={this.submitForm}>

            {this.state.fields && this.state.fields.map((field, index) => (
              <div className="field" key={index}>
              {field.type === "text" &&
                <React.Fragment>
                  <input
                    className="input is-rounded"
                    placeholder={field.label}
                    onChange={(e) =>{this.handleFieldChange(e,field.id)}}
                    value={this.state.fieldValues[field.id]}
                    id={field.id}
                    name={field.id}
                  />
                  {errors && errors.length > 0 && (
                    <FormErrorMessage error={errors}/>
                  )}
                </React.Fragment>
              }

              {field.type === "phone" &&
                <React.Fragment>
                  <input
                    className="input is-rounded"
                    placeholder={field.label}
                    onChange={(e) =>{this.handleFieldChange(e,field.id)}}
                    value={this.state.fieldValues[field.id]}
                    id={field.id}
                    name={field.id}
                  />
                  {errors && errors.length > 0 && (
                    <FormErrorMessage error={errors}/>
                  )}
                </React.Fragment>
              }

              {field.type === "email" &&
              <React.Fragment>
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-rounded"
                    placeholder={field.label}
                    onChange={(e) =>{this.handleFieldChange(e,field.id)}}
                    value={this.state.fieldValues[field.id]}
                    id={field.id}
                    name={field.id}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                  {errors && errors.length > 0 && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="exclamation-triangle" />
                  </span>
                  )}
                </div>
                {errors && errors.length > 0 && (
                  <p className="help is-danger">This email is invalid</p>
                )}
              </div>
              </React.Fragment>
              }
              {field.type === "textarea" &&
              <React.Fragment>
                <label className="label">{field.label}</label>
                <textarea
                  className="textarea"
                  onChange={(e) =>{this.handleFieldChange(e,field.id)}}
                  value={this.state.fieldValues[field.id]}
                  id={field.id}
                  name={field.id}
                />
                {errors && errors.length > 0 && (
                  <FormErrorMessage error={errors}/>
                )}
              </React.Fragment>
              }
              </div>

            ))
            }

            <div>
              <button className="button is-primary">{this.state.button.text}</button>
            </div>

        </form>
      </React.Fragment>
      }
        </div>
      );

  }
}

export default FormContainer
