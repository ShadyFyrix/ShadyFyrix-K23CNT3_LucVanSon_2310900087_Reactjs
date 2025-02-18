
import LvsClassComp from "./components/LvsClassComp";
import LvsFuncComp from "./components/LvsFuncComp";
import LvsFuncComp1 from "./components/LvsFuncComp1";



function LvsApp() {
  //objest
  const user = {
    fullname: "Lục Sơn",
    age: 20,
    phone: "0123456789",
  }
  return (
        <div className='container border mt-3'>
          <h1>Demo Component - Props - States </h1>
          <hr/>
          <div>
            <LvsFuncComp name="Lục Sơn" address="Thanh Hoá" Company="ShadyCompany" note="This is a note"/>
            <hr/>
            <LvsFuncComp name="The Shady" address="Hà Nội " Company="ShadyCompany" note="Hả"/>
          </div>
          <hr/>
          <div>
            <h2>Props là object</h2>
            <LvsFuncComp1 renderInfo={user}/>
          </div>
          <LvsClassComp/>
          <hr/>
          <LvsClassComp RenderName="The Shady" renderUsers={user}/>
        </div>
  );
}

export default LvsApp;
