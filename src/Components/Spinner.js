import React from "react";
import loading from "./loading.gif";
// export default function Spinner() {} is also fine
const Spinner = () => {
    return (
      <div className="text-center">
        <img src={loading} alt="loading"></img>
      </div>
    );
}
export default Spinner