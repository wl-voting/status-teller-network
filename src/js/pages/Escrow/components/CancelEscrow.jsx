/* eslint-disable no-alert,no-restricted-globals */
import React, {Fragment, Component} from 'react';
import {Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import RoundedIcon from "../../../ui/RoundedIcon";
import escrow from '../../../features/escrow';
import ConfirmDialog from "../../../components/ConfirmDialog";
import CancelIcon from "../../../../images/close.png";
import classnames from 'classnames';

class CancelEscrow extends Component {

  state = {
    displayDialog: false
  };

  displayDialog = show => (e) => {
    if(e) e.preventDefault();

    if(!this.props.isBuyer){
      if(parseInt(this.props.trade.expirationTime, 10) * 1000 > Date.now()){
        return false;
      }
    }

    this.setState({displayDialog: show});
    return false;
  };

  cancelEscrow = () => {
    this.props.cancelEscrow(this.props.trade.escrowId);
    this.displayDialog(false)();
  };

  render(){
    const {trade} = this.props;
    const shouldDisplay = trade.status === escrow.helpers.tradeStates.waiting || trade.status === escrow.helpers.tradeStates.funded;
    const disabled = !this.props.isBuyer && (parseInt(this.props.trade.expirationTime, 10) * 1000 > Date.now());
    
    return shouldDisplay && <Fragment>
      <div onClick={this.displayDialog(true)} className="clickable">
        <Row className={classnames("mt-4 text-primary", {'disabled': disabled})}>
          <Col xs="2">
            <RoundedIcon image={CancelIcon} bgColor="red"/>
          </Col>
          <Col xs="10" className="my-auto ">
            <h6 className="m-0 font-weight-normal">Cancel trade</h6>
          </Col>
        </Row>
        {
          disabled && <Row>
            <Col xs="2">
            </Col>
            <Col xs="10" className="text-small">
              Escrow can be canceled after it expires
            </Col>
          </Row>
        }
      </div>
      { !disabled && <ConfirmDialog display={this.state.displayDialog} onConfirm={this.cancelEscrow} onCancel={this.displayDialog(false)} title="Cancel Escrow" content="Are you sure?" cancelText="No" /> }
    </Fragment>;
  }
}

CancelEscrow.propTypes = {
  cancelEscrow: PropTypes.func,
  trade: PropTypes.object,
  isBuyer: PropTypes.bool
};

export default CancelEscrow;
