import React, {Component, Fragment} from 'react';
import {FormGroup, Label} from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {withNamespaces} from "react-i18next";
import PropTypes from 'prop-types';
import {required} from "../validators";

class ContactForm extends Component {
  changeNickname(e) {
    this.props.changeNickname(e.target.value);
  }
  changeContactCode(e) {
    this.props.changeContactCode(e.target.value);
  }

  render() {
    const {t, nickname, contactCode} = this.props;

    return (
      <Fragment>
        <h2>{t('contactForm.yourName')}</h2>
        <p>{t('contactForm.bestWay')}</p>

        <Form>
          <FormGroup>
            <Label for="nickname">Nickname</Label>
            <Input type="text" name="nickname" id="nickname" value={nickname} className="form-control"
                   onChange={(e) => this.changeNickname(e)} validations={[required]}/>
          </FormGroup>
          <FormGroup>
            <Label for="contactCode">Status contact code or Status ENS name</Label>
            <Input type="text" name="contactCode" id="contactCode" value={contactCode}
                   className="form-control" onChange={(e) => this.changeContactCode(e)}  validations={[required]}/>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}

ContactForm.propTypes = {
  t: PropTypes.func,
  changeNickname: PropTypes.func,
  changeContactCode: PropTypes.func,
  nickname: PropTypes.string,
  contactCode: PropTypes.string
};


export default withNamespaces()(ContactForm);