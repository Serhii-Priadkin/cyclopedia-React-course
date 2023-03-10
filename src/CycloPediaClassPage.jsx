import React from "react";
import { getRandomUser } from "./Utility/api";

class CycloPediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      studentsCount: 0,
      hideInstructor: false,
    };
  }

  componentDidMount = async () => {
    console.log("Component Did Mount");
    const response = await getRandomUser();
    console.log(response);
  };

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will UnMount");
  }

  render() {
    console.log("Render Component");
    return <div>Hello</div>;
  }
}

export default CycloPediaClassPage;
