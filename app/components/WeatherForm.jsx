import React from 'react'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const FormikWeatherForm = ({
  errors,
  touched,
  isSubmitting
}) => (
  <Form>
    <div>
      <Field type='search' placeholder='Search weather by City' name='city' />
      { touched.city && errors.city && <p><font color='red'>{errors.city}</font></p>}
    </div>
    <div>
      <button type="submit" className="button hollow expanded" disabled={isSubmitting}>Get Weather</button>
    </div>
  </Form>
)

const WeatherForm = withFormik({
  mapPropsToValues({city}) {
    return {
      city: city || ''
    }
  },
  handleSubmit(values, { props, resetForm, setSubmitting, setErrors}) {
    setSubmitting = true
    console.log(values)
    props.onCityNameInput(values.city)
    resetForm()
  },
  validationSchema: Yup.object().shape({
    city: Yup.string().min(3, 'City name should be 3 characters long').required('City name is a required field')
  })
})(FormikWeatherForm)


/*
var WeatherForm = React.createClass({

  handleInput: function(e) {
    e.preventDefault();
    var cityName = this.refs.city.value;
    console.log(cityName);
    if ( typeof cityName == 'string' && cityName.length > 0 ) {
        this.refs.city.value = '';
        this.props.onCityNameInput(cityName);
    }

  },

  render: function() {
    return(
        <form onSubmit={this.handleInput}>
            <div>
              <input type='search' placeholder='Search weather by City' ref='city'/>
            </div>
            <div>
              <button type="submit" className="button hollow expanded">Get Weather</button>
            </div>
        </form>
    );
  }

});

*/

module.exports = WeatherForm;
