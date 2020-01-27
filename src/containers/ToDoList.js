import React, { Component } from "react";
import { connect } from "react-redux";

class ToDoList extends Component {
  componentWillMount() {}

  render() {
    return (
      <React.Fragment>
        <div id="myDIV" class="header">
          <h2>My To Do List</h2>
          <input type="text" id="myInput" placeholder="Title..." />
          <span onClick={this} class="addBtn">
            Add
          </span>
        </div>

        <ul id="myUL">
          <li>
            Hit the gym <span class="close">×</span>
          </li>
          <li class="checked">Pay bills</li>
          <li>Meet George</li>
          <li>Buy eggs</li>
          <li>Read a book</li>
          <li>Organize office</li>
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ todoitems }) => ({ todoitems });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
