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
      notes: notesData,
      ids: 0
      //  notesAirTable: []
    };
    this.addNote = this.addNote.bind(this);
    //  this.refreshData = this.refreshData.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(input) {
    const tmpNote = {
      note: input,
      //id: this.state.notesAirTable.length + 1
      id: this.state.ids
    };

    notesData.unshift(tmpNote);
    this.setState({
      notes: notesData,
      ids: this.state.ids + 1
    });
    //
    // axios.post(
    //   "https://api.airtable.com/v0/appqAletHu3mYpp1h/Notes?api_key=__PUT API KEY HERE__",
    //   {
    //     fields: {
    //       note: tmpNote.note,
    //       id: tmpNote.id
    //     }
    //   }
    // );
    //
    // this.refreshData();
  }

  searchIndex(element, id) {
    return element === id;
  }
  deleteNote(index) {
    notesData.splice(index, 1);
    this.setState({
      notes: notesData
    });

    //AIR TABLE SAMPLE
    // const url =
    //   "https://api.airtable.com/v0/appqAletHu3mYpp1h/Notes/" +
    //   id +
    //   "?api_key=__PUT API KEY HERE__";
    // axios.delete(url);
    //
    // this.refreshData();
  }
  // ONLY FOR AIRTABLE CONECTION
  // refreshData() {
  //   //Fetch notes from AirTable
  //   setTimeout(() => {
  //     fetch(
  //       "https://api.airtable.com/v0/appqAletHu3mYpp1h/Notes?api_key=__PUT API KEY HERE__&sort%5B0%5D%5Bfield%5D=time&sort%5B0%5D%5Bdirection%5D=desc"
  //     )
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({
  //           notesAirTable: data.records
  //         });
  //       })
  //       .catch(error => alert(error));
  //   }, 100);
  // }

  componentDidMount() {
    //this.refreshData();
  }

  render() {
    const newNotesReact = this.state.notes.map(note => (
      <Card
        id={note.id}
        index={this.state.notes.indexOf(note)}
        text={note.note}
        deleteNote={this.deleteNote}
        addNote={this.addNote}
      />
    ));

    //Map notes from Airtable
    //
    // const newNotes = this.state.notesAirTable.map(note => (
    //   <Card
    //     id={note.id}
    //     text={note.fields.note}
    //     deleteNote={this.deleteNote}
    //     addNote={this.addNote}
    //   />
    // ));

    return (
      <div>
        <Header />
        <div className="mygrid">
          <MyForm addNote={this.addNote} />
          {newNotesReact}
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
