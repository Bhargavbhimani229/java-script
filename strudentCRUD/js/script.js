$(document).ready(() => {
  $('#stdValidate').validate({
    rules: {
      fname: {
        required: true,
      },
      lname: {
        required: true,
      },
      contact: {
        required: true,
        minlength: 10,
      },
      city: {
        required: true,
      },
      state: {
        required: true
      },
      email: {
        required: true,
      }
    },
    messages: {
      fname: {
        required: " Please Enter First Name....",
      },
      lname: {
        required: " Please Enter Last Name....",
      },
      contact: {
        required: " Please Enter Contact Number....",
        minlength: "Your Cntact must consist of at least 10 Number"
      },
      city: {
        required: " Please Enter City....",
      },
      state: {
        required: " Please Enter State....",
      },
      email: {
        required: " Please Enter Email....",
      }
    },
  });
  getStdData();
});

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let contact = document.getElementById('contact');
let city = document.getElementById('city');
let state = document.getElementById('state');
let email = document.getElementById('email');
let tbody = document.querySelector('#stdTable');
let userId = document.getElementById('userId');
let bagde = document.getElementById('badge');
let selection = [];
let stdData = [];
let isEdite = false;
const getSelection = () => {
  let selectionRec = JSON.parse(localStorage.getItem('studentRec')) || [];
  return selectionRec;
}
selection = getSelection();
bagde.innerHTML = selection.length;

const getStdData = () => {
  stdData = JSON.parse(localStorage.getItem("studentData")) || [];
  return stdData;
}

const updateStd = (id) => {
  let record = getStdData();
  isEdite = true;

  let singaleRec = record.find((rec) => {
    return rec.id == id;
  })

  console.log(singaleRec);

  userId.value = id;
  fname.value = singaleRec.fname;
  lname.value = singaleRec.lname;
  contact.value = singaleRec.contact;
  city.value = singaleRec.city;
  state.value = singaleRec.state;
  email.value = singaleRec.email;
};

// let stdL = getStdData();
// console.log("array",stdL);
// let selection = stdL;


// let isEdite = false;


const creatStd = () => {
  event.preventDefault();
  if (isEdite) {
    let update = {
      id: userId.value,
      fname: fname.value,
      lname: lname.value,
      contact: contact.value,
      city: city.value,
      state: state.value,
      email: email.value
    }
    console.log("UpdateUser", update);
    let records = getStdData();

    let updateRec = records.map((rec) => {
      if (rec.id == update.id) {
        return rec = update;
      }
      else {
        return rec;
      }
    })
    console.log("Update rec ", updateRec);
    stdValidate.reset();
    isEdite = false;
    localStorage.setItem("studentData", JSON.stringify(updateRec));

    stdData = getStdData();
    stdVison();
  }
  else {

    let student = {
      id: Math.floor(Math.random() * 10000),
      fname: fname.value,
      lname: lname.value,
      contact: contact.value,
      city: city.value,
      state: state.value,
      email: email.value
    }
    // console.log(student.id);
    stdData.push(student);
    stdValidate.reset();
    localStorage.setItem("studentData", JSON.stringify(stdData));
    stdVison();
  }

}

const deleteStd = (id) => {

  let newRec = getStdData();

  let updData = newRec.filter((rec) => {
    return rec.id != id;
  })

  console.log("Delete std", updData);

  localStorage.setItem("studentData", JSON.stringify(updData));
  stdData = getStdData();
  stdVison();
}

const addToCart = (id) => {

  let record = getStdData();
  let singaleRec = record.find((rec) => {
    return rec.id == id;
  })
  singaleRec.qty = 1;

  let isExsit = selection.find((emp) => {
    return emp.id == id;
  })

  if (!isExsit) {
    selection.push(singaleRec);
  }
  else {
    isExsit.qty = isExsit.qty + 1;
  }

  bagde.innerHTML = selection.length;
  localStorage.setItem('studentRec', JSON.stringify(selection));
}

const stdVison = () => {
  tbody.innerHTML = "";
  stdData = getStdData();
  stdData.forEach((ele, index) => {
    tbody.innerHTML += `<tr>
    <td>${index + 1}</td>
    <td>${ele.fname} ${ele.lname}</td>
    <td>${ele.contact}</td>
    <td>${ele.city}</td>
    <td>${ele.state}</td>
    <td>${ele.email}</td>
    <td>
      <button class="btn btn-success" style="margin-right: 5px;" onclick="return updateStd(${ele.id})">Edit</button>
      <button class="btn btn-danger" style="margin-right: 5px;" onclick="deleteStd(${ele.id})">Delete</button>
      <button class="btn btn-info" onclick="addToCart(${ele.id})">Add to Cart</button>
    </td>
    </tr>`;
  });
  console.log("Data", stdData);
}


stdVison(); 