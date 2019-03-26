import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import MyForm from "./MyForm";
import Header from "./Header";
import AirTable from "airtable";
import axios from "axios";
//import Counter from "./Components/Counter";
//import Conditional from "./Components/Conditional";
import notesData from "./Components/notesData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //notes: notesData,
      notesAirTable: []
    };
    this.addNote = this.addNote.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(input) {
    //  this.setState({      note: input    });
    const tmpNote = {
      note: input,
      id: this.state.notesAirTable.length + 1
    };
    /* notesData.unshift(tmpNote);
    this.setState({
      notes: notesData
    });*/
    axios.post(
      "https://api.airtable.com/v0/appqAletHu3mYpp1h/Notes?api_key=key2XdqUNvad2Oa6R",
      {
        fields: {
          note: tmpNote.note,
          id: tmpNote.id
        }
      }
    );

    this.refreshData();
  }

  deleteNote(id) {
    const url =
      "https://api.airtable.com/v0/appqAletHu3mYpp1h/Notes/" +
      id +
      "?api_key=key2XdqUNvad2Oa6R";
    axios.delete(url);

    this.refreshData();
  }
  updateNote(id, text) {
    const url =
      "https://api.airtable.com/v0/appqAletHu3mYpp1h/Notes/" +
      id +
      "?api_key=key2XdqUNvad2Oa6R";
    axios.patch(url, {
      fields: {
        note: text
      }
    });
    this.refreshData();
  }

  refreshData() {
    //Fetch notes from AirTable
    setTimeout(() => {
      fetch(
        "https://api.airtable.com/v0/appqAletHu3mYpp1h/Notes?api_key=key2XdqUNvad2Oa6R&sort%5B0%5D%5Bfield%5D=time&sort%5B0%5D%5Bdirection%5D=desc"
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            notesAirTable: data.records
          });
        })
        .catch(error => alert(error));
    }, 200);
  }

  componentDidMount() {
    this.refreshData();
  }

  render() {
    /*const noteComponents = this.state.notes.map(note => (
      <Card key={note.id} text={note.text} />
    ));*/
    //Map notes from Airtable

    const newNotes = this.state.notesAirTable.map(note => (
      <Card
        id={note.id}
        text={note.fields.note}
        deleteNote={this.deleteNote}
        updateNote={this.updateNote}
      />
    ));

    return (
      <div>
        <Header />
        <div className="mygrid">
          <MyForm addNote={this.addNote} />
          {newNotes}
          {/*
<Counter />  {noteComponents}
          <Card text={this.state.note} />
                <Conditional note="cośtam2" />*/}
        </div>
      </div>
    );
  }
}

export default App;
