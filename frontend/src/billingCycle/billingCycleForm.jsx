import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {reduxForm, Field} from 'redux-form';

import { init } from "./billingCycleActions";
import labelAndinput from "../common/form/labelAndinput";

class BillingCycleForm extends Component {
    render() {
        const {handleSubmit, readOnly} = this.props;
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
                        readOnly={readOnly}
                    />
                    
                    <Field
                        name="month"
                        component={labelAndinput}
                        type='number'
                        label='Mês'
                        cols='12 4'
                        placeholder="Informe o Mês"
                        readOnly={readOnly}
                    />

                    <Field
                        name="year"
                        component={labelAndinput}
                        type='number'
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'
                        readOnly={readOnly}
                    />
                </div>
                <div className="box-footer">
                    <button 
                    type="submit" 
                    className="btn btn-primary">
                        Submit
                    </button>
                    <button 
                    type="button" 
                    className="btn btn-default"
                    onClick={this.props.init}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            
        )
    }
}


BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)