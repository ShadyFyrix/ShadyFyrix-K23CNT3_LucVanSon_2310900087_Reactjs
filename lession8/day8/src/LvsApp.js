import React from "react";
import LvsControl from "./components/LvsControl";
import LvsForm from "./components/LvsForm";
import LvsStudentList from "./components/LvsStudentList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsStudents: [
        {
          LvsId: "SV001",
          LvsStudentName: "Lục Văn Sơn ",
          LvsAge: 20,
          LvsGender: "Nam",
          LvsBirthday: "13/02/2005",
          LvsBirthPlace: "TH",
          LvsAddress: "Cành Nàng, Thanh Hoá",
        },
        {
          LvsId: "SV002",
          LvsStudentName: "This is Shady",
          LvsAge: 20,
          LvsGender: "Nam",
          LvsBirthday: "13/03/2005",
          LvsBirthPlace: "TH",
          LvsAddress: "Việt Nam",
        },
        {
          LvsId: "SV003",
          LvsStudentName: "Hà Thị Eyja",
          LvsAge: 19,
          LvsGender: "Nữ",
          LvsBirthday: "11/12/1079",
          LvsBirthPlace: "Quảng Đông",
          LvsAddress: "Trung Quốc",
        },
        {
          LvsId: "SV004",
          LvsStudentName: "Bò Biết Bay",
          LvsAge: 5,
          LvsGender: "Nam",
          LvsBirthday: "25/05/2025",
          LvsBirthPlace: "TH",
          LvsAddress: "Chuồng Trâu",
        },
      ],
      LvsStudent: "",
    };
  }

  // Hàm xử lý sự kiện view Student
  LvsHandleView = (LvsStudent) => {
    this.setState({
      LvsStudent: LvsStudent,
    });
  };

  render() {
    // log
    console.log("View Student:", this.state.LvsStudent);

    return (
      <div>
        <h1 className="text-center">Lục Văn Sơn - K23CNT3 - Mini Project1</h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* header */}
                <LvsControl />
                {/* danh sách sinh vien  */}
                <LvsStudentList
                  renderLvsStudents={this.state.LvsStudents}
                  onLvsHandleView={this.LvsHandleView}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <LvsForm renderLvsStudent={this.state.LvsStudent} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
