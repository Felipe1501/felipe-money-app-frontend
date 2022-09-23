import React, {Component} from "react";
import {reduxForm, Field} from 'redux-form';
import labelAndinput from "../common/form/labelAndinput";

class BillingCycleForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        //console.log(handleSubmit);
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={labelAndinput}
                        cols='12 4'
                        placeholder="Informe o nome"
                        label='Nome'
                    />
                    
                    <Field
                        name="month"
                        component={labelAndinput}
                        type='number'
                        label='Mês'
                        cols='12 4'
                        placeholder="Informe o Mês"
                    />

                    <Field
                        name="year"
                        component={labelAndinput}
                        type='number'
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'
                    />
                </div>
                <div className="box-footer">
                    <button 
                    type="submit" 
                    className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
            
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)