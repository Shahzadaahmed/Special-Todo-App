/***** Special Todo App using React JS *****/

import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Importing components from MATERIAL UI...!
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// SpecialTodoApp Component...!
class SpecialTodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentName: "",
            studentFatherName: "",
            studentRollNum: "",
            studentStatus: "",
            studentsArray: [],
            isEditing: false
        }
    }

    // Form handler for all the fields...!
    formHandler(getState, event) {
        this.setState({
            [getState]: event.target.value,

        });
    }

    // Function to add item...!
    addiTem = () => {
        let cloneStudentsArr = this.state.studentsArray;
        let studentObj = {
            name: this.state.studentName,
            fatherName: this.state.studentFatherName,
            rollNum: this.state.studentRollNum,
            status: this.state.studentStatus
        }

        if (studentObj.name != 0 && studentObj.fatherName != 0 && studentObj.rollNum != 0 && studentObj.status != 0) {
            cloneStudentsArr.push(studentObj);
            this.setState({
                studentsArray: cloneStudentsArr,
                studentName: "",
                studentFatherName: "",
                studentRollNum: "",
                studentStatus: ""
            });
        }

        else {
            alert("You need to fill all the required fields!!!");
            this.setState({
                studentName: "",
                studentFatherName: "",
                studentRollNum: "",
                studentStatus: ""
            });
        }
    }

    // Function to delete item...!
    deleteItem(getIndex) {
        let cloneStudentsArr = this.state.studentsArray;
        cloneStudentsArr.splice(getIndex, 1);
        this.setState({
            studentsArray: cloneStudentsArr
        });
    }

    // Declaring global variable for updating data...!
    editIndex;

    // Function to edit item...!
    editItem(getIndex) {
        let cloneStudentsArr = this.state.studentsArray;
        this.setState({
            isEditing: true
        });
        this.editIndex = getIndex;
        this.setState({
            studentName: cloneStudentsArr[this.editIndex].name,
            studentFatherName: cloneStudentsArr[this.editIndex].fatherName,
            studentRollNum: cloneStudentsArr[this.editIndex].rollNum,
            studentStatus: cloneStudentsArr[this.editIndex].status
        });
    }

    // Function to update item...!
    updateItem = () => {
        let cloneStudentsArr = this.state.studentsArray;
        let recieveEditIndex = this.editIndex;
        let studentObj = {
            name: this.state.studentName,
            fatherName: this.state.studentFatherName,
            rollNum: this.state.studentRollNum,
            status: this.state.studentStatus
        }

        if (studentObj.name != 0 && studentObj.fatherName != 0 && studentObj.rollNum != 0 && studentObj.status != 0) {
            cloneStudentsArr.splice(recieveEditIndex, 1, studentObj);
            this.setState({
                studentsArray: cloneStudentsArr,
                isEditing: false,
                studentName: "",
                studentFatherName: "",
                studentRollNum: "",
                studentStatus: ""
            });
        }

        else {
            alert("You need to fill all the required fields!!!");
        }
    }

    // Function to cancel updating...!
    cancel = () => {
        this.setState({
            isEditing: false,
            studentName: "",
            studentFatherName: "",
            studentRollNum: "",
            studentStatus: ""
        });
    }

    // Function to delete all items...!
    deleteAll = () => {
        let cloneStudentsArr = this.state.studentsArray;
        alert("All Items Deleted Successfully!!!");
        cloneStudentsArr.splice(0, cloneStudentsArr.length);
        this.setState({
            studentsArray: cloneStudentsArr
        });
    }

    // Render function...!
    render() {
        return (
            // Main container...!
            <Container fixed>
                <div style={styleSheet.divContainer}>
                    {/* Header */}
                    <h1 style={styleSheet.header}> Special Todo App using React JS </h1>
                    <hr />

                    {/* Form Container */}
                    <div>
                        {
                            (!this.state.isEditing)
                                ?
                                <div style={styleSheet.formContainer}>
                                    <label>
                                        <TextField autoFocus id="standard-basic1" label="Name" value={this.state.studentName} onChange={this.formHandler.bind(this, "studentName")} />
                                    </label>
                                    <br />
                                    <label>
                                        <TextField id="standard-basic2" label="Father Name" value={this.state.studentFatherName} onChange={this.formHandler.bind(this, "studentFatherName")} />
                                    </label>
                                    <br />
                                    <label>
                                        <TextField type="number" id="standard-basic3" label="Roll No" value={this.state.studentRollNum} onChange={this.formHandler.bind(this, "studentRollNum")} />
                                    </label>
                                    <br />
                                    <label className="my-label"> Select Option :
                                    <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.studentStatus}
                                            onChange={this.formHandler.bind(this, "studentStatus")}
                                        >
                                            <MenuItem value="Fail"> Fail </MenuItem>
                                            <MenuItem value="Pass"> Pass </MenuItem>
                                        </Select>
                                    </label>
                                    <p>
                                        <Button variant="contained" color="primary" onClick={this.addiTem} style={styleSheet.buttonTag}> Add Item </Button>
                                        <Button variant="contained" color="primary" onClick={this.deleteAll} style={styleSheet.buttonTag}> Delete All Items </Button>
                                    </p>
                                </div>
                                :
                                <div style={styleSheet.formContainer}>
                                    <label>
                                        <TextField autoFocus id="standard-basic1" label="Update Name" value={this.state.studentName} onChange={this.formHandler.bind(this, "studentName")} />
                                    </label>
                                    <br />
                                    <label>
                                        <TextField id="standard-basic2" label="Update Father Name" value={this.state.studentFatherName} onChange={this.formHandler.bind(this, "studentFatherName")} />
                                    </label>
                                    <br />
                                    <label>
                                        <TextField type="number" id="standard-basic3" label="Update Roll No" value={this.state.studentRollNum} onChange={this.formHandler.bind(this, "studentRollNum")} />
                                    </label>
                                    <br />
                                    <label className="my-label"> Select Option :
                                    <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.studentStatus}
                                            onChange={this.formHandler.bind(this, "studentStatus")}
                                        >
                                            <MenuItem value="Fail"> Fail </MenuItem>
                                            <MenuItem value="Pass"> Pass </MenuItem>
                                        </Select>
                                    </label>
                                    <p>
                                        <Button variant="contained" color="primary" onClick={this.updateItem} style={styleSheet.buttonTag}> Update Item </Button>
                                        <Button variant="contained" color="primary" onClick={this.cancel} style={styleSheet.buttonTag}> Cancel </Button>
                                    </p>
                                </div>
                        }
                    </div>

                    {/* Show data on DOM */}
                    {
                        this.state.studentsArray.map((item, index) => {
                            return (
                                <div key={index} className="card" style={styleSheet.box}>
                                    <div className="card-body">
                                        <h5 className="card-title"> Name : {item.name} </h5>
                                        <h5 className="card-title"> Father Name : {item.fatherName} </h5>
                                        <h5 className="card-title"> Roll No : {item.rollNum} </h5>
                                        <h5 className="card-title"> Status : {item.status} </h5>
                                        <Button variant="contained" color="primary" onClick={this.deleteItem.bind(this, index)} style={styleSheet.innerBtns}> Delete Item </Button>
                                        <Button variant="contained" color="primary" onClick={this.editItem.bind(this, index)} style={styleSheet.innerBtns}> Edit Item </Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        )
    }
}

// Inline CSS Area...!
const styleSheet = {
    box: {
        width: "450px",
        border: "2px solid white",
        color: "blue",
        backgroundColor: "lightblue",
        marginBottom: "20px",
        fontFamily: "georgia"
    },

    divContainer: {
        border: "5px double blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightskyblue"
    },

    header: {
        fontFamily: "georgia",
        textAlign: "center",
        textDecoration: "underline",
        color: "darkblue",
        marginTop: "20px"
    },

    formContainer: {
        border: "5px double darkblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px"
    },

    buttonTag: {
        width: "200px",
        fontWeight: "bold",
        margin: "10px",
        border: "2px solid darkblue"
    },

    innerBtns: {
        width: "150px",
        margin: "5px",
        border: "2px solid white"
    }
}

export default SpecialTodoApp;

// App completed successfully...!