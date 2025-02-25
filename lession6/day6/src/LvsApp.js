// Code: Lession 6 - Day 6

import LvsEventForm1 from "./components/LvsEventForm1";
import LvsEventForm2 from "./components/LvsEventForm2";
import LvsEventForm3 from "./components/LvsEventForm3";
import LvsEventForm4 from "./components/LvsEventForm4";
import LvsEventForm5 from "./components/LvsEventForm5";

function LvsApp() {
  return (
    <div className="container border my-3 bg-white">
      <h1 className="text-center">Event Form - Demo</h1>
      <hr />
      <LvsEventForm1 />
      <hr />
      <LvsEventForm2 />
      <hr />
      <LvsEventForm3 />
      <hr />
      <LvsEventForm4 />
      <hr />
      <LvsEventForm5 />
    </div>
  );
}

export default LvsApp;
