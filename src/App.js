import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import MyForm from "./MyForm";
import Header from "./Header";
//import Counter from "./Components/Counter";
//import Conditional from "./Components/Conditional";
import notesData from "./Components/notesData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: notesData
    };
    this.addNote = this.addNote.bind(this);
  }

  addNote(input) {
    //  this.setState({      note: input    });
    const tmpNote = {
      id: notesData.length + 1,
      text: input
    };
    notesData.unshift(tmpNote);
    this.setState({
      notes: notesData
    });
  }
  // Dopis metodę edytującą bieżacą notatke
  updateNote(id, text) {}
  render() {
    const noteComponents = this.state.notes.map(note => (
      <Card key={note.id} text={note.text} />
    ));

    return (
      <div>
        <Header />
        <div className="mygrid">
          <MyForm addNote={this.addNote} />
          {noteComponents}
          {/*<Counter />
          <Card text={this.state.note} />
                <Conditional note="cośtam2" />*/}
        </div>
      </div>
    );
  }
}

export default App;
