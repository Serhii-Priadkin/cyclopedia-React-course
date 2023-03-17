import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";
import { getRandomUser } from "./Utility/api";

const CycloPediaFuncPage = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  const [inputName, setInputName] = useState(() => {
    return "";
  });
  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  useEffect(() => {});

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);
  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    };
    if (state.studentList.length < state.studentCount) {
      getUser();
    } else if (state.studentList.length > state.studentCount) {
      setState((prevState) => {
        return { ...prevState, studentList: [] };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    console.log();
  }, [inputName, inputFeedback]);

  useEffect(() => {}, []);

  //   componentDidUpdate = async (previousProps,previousState)=> {
  //     console.log("Component Did Update");
  //     localStorage.setItem("cyclopediaState", JSON.stringify(this.state));
  //     console.log("Old State - "+previousState.studentCount);
  //     console.log("New State - "+this.state.studentCount);
  //     if(previousState.studentCount < this.state.studentCount){
  //         const response=await getRandomUser();
  //         this.setState((prevState)=>{
  //             return{
  //                 studentList:[
  //                     ...prevState.studentList,{
  //                         name:response.data.first_name+" "+response.data.last_name,
  //                     }
  //                 ]
  //             }
  //         })
  //     }
  //     else if(previousState.studentCount > this.state.studentCount){
  //         this.setState((prevState)=>{
  //             return{
  //                 studentList:[],
  //             }
  //         })
  //     }
  // }

  //   componentWillUnmount() {
  //     console.log("Component Will UnMount");
  //   }

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudents = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handletoggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor &nbsp;</span>
        <i
          className={` bi  ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          }  btn btn-success btn-sm`}
          onClick={handletoggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <Instructor instructor={state.instructor} />
        ) : null}
      </div>

      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          value={inputName}
          placeholder="Name.."
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        ></input>{" "}
        Value : {inputName}
        <br />
        <textarea
          type="text"
          value={inputFeedback}
          placeholder="Feedback..."
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
        ></textarea>{" "}
        Value : {inputFeedback}
      </div>
      <div className="p-3">
        <span className="h4 text-success">Students</span>
        <br />
        <div>Student Count : {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudents}
        >
          Remove All Students
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              - {student.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CycloPediaFuncPage;
