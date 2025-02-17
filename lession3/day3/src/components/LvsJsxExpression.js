import React from 'react'

export default function LvsJSXExpression() {
    //Biến 
    const name = 'Lục Văn Sơn';
    //Biến đối tượng 
    const user = {
        firstName: 'Lục',
        lastName: 'Văn Sơn',
        age: 18
    }
    //Hàm
    const fullName = (user) => {
        return user.firstName + ' ' + user.lastName; 
    }
    //element
    const element = (
        <div>
            {/*Biểu thức Jsx */}
            {fullName(user)}      
            <h3>Welcome to,  {name}</h3>
            <h4>Age: {user.age}</h4>
        </div>
    );
    //hàm use if else  
    const sayWelcome = (name) => {
        if(name /*=== 'Lục Văn Sơn'*/)
            return <h3>Welcome to, {name} </h3>;
        else
        return <h3>Welcome to CNTT3 _ Khoa CNTT</h3>;
    }
  return (
    <div>
        <h1>Lvs - JSXExpression</h1>  
        {/* Use biến Element */}
        {element}
        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("ShadyFyrixLab")}
    </div>

  )
}
