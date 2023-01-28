import React from "react";
import Halutama from "./Halutama";
import Login from "./Login";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    let content = this.state.loading ? (
      <div>
        <Halutama />
      </div>
    ) : (
      <div>
        <Login />
      </div>
    );

    return (
      <div>
        <div>{content}</div>
      </div>
    );
  }
}
export default Index;
