import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Steps from './Steps';
import AskForHelp from './AskForHelp';
import FifteenMinutes from './FifteenMinutes';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      stepCounter: 0
    };
  }

    handleClick = () => {
      // this.setState(
      //   if ({stepCounter: 4}) {
      //     stepCounter: 0
      //   } else stepCounter ++;
      // )


      if (this.state.stepCounter === 4 ){
        this.setState({ stepCounter: 0 });
      } else {
        const nextCount = this.state.stepCounter + 1;
        this.setState({ stepCounter: nextCount });
      }
    }
  // handleClick = () => {
  //   this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage
  //   }));
  // }

    render(){
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.stepCounter === 0) {
        currentlyVisibleState = <TicketList />;
        buttonText = "Add Ticket";
      } else if (this.state.stepCounter === 1) {
        currentlyVisibleState = <Steps />;
        buttonText = "Yes";
      } else if (this.state.stepCounter === 2) {
        currentlyVisibleState = <AskForHelp />;
        buttonText = "Yes!!!";
      } else if (this.state.stepCounter === 3) {
        currentlyVisibleState = <FifteenMinutes />;
        buttonText = "LET ME GET HELP PLEASE!!!!!";
      } else {
        currentlyVisibleState = <NewTicketForm />;
        buttonText = "Return to Ticket List";
      }
      return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
    }

  // render(){
  //   let currentlyVisibleState = null;
  //   let buttonText = null;
  //   if (this.state.formVisibleOnPage) {
  //     currentlyVisibleState = <NewTicketForm />
  //     buttonText = "Return to Ticket List";
  //   } else {
  //     currentlyVisibleState = <TicketList />
  //     buttonText = "Add Ticket";
  //   }
  //   return (
  //     <React.Fragment>
  //       {currentlyVisibleState}
  //       <button onClick={this.handleClick}>{buttonText}</button>
  //     </React.Fragment>
  //   );
  // }

}

export default TicketControl;