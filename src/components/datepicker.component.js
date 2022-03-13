import React from 'react'
import { Form } from 'react-bootstrap';
 
class DatepickerComponent extends React.Component{
 
    render(){
 
        return(
            
            <Form.Group controlId="doa">
                <Form.Label>Select Date of Product arrival</Form.Label>
                <Form.Control 
                    type="date" 
                    name="dopa" 
                    defaultValue={this.props.selectedValue} 
                    placeholder="Date of arrival" 
                    onChange={(e) => this.props.onChange(e)} />
            </Form.Group>
            
        )
    }
     
}
 
export default DatepickerComponent;