let tbody = document.querySelector('#stdTable');

const getSelection = () => {
  let selectionRec = JSON.parse(localStorage.getItem('studentRec')) || [];
  return selectionRec;
}

let stdSeletion = getSelection();

const incQty = (id) => {
  selection = getSelection();
  let singaleRec = selection.find((emp) => {
    return emp.id == id;
  })
  console.log("Singal record after in", singaleRec);

  singaleRec.qty += 1;

  localStorage.setItem('studentRec', JSON.stringify(selection));
  stdSeletion = getSelection();
  viewSelection();
}

const decQty = (id) => {
  selection = getSelection();
  let singaleRec = selection.find((emp) => {
    return emp.id == id;
  })
  console.log("Singal record after dec", singaleRec);
  if(singaleRec.qty != 1)
  {
    singaleRec.qty -= 1;
  }

  localStorage.setItem('studentRec', JSON.stringify(selection));
  stdSeletion = getSelection();
  viewSelection();
}


const deleteCart = (id) => {
  let newRec = getSelection();
  let updData = newRec.filter((rec) => {
    return rec.id != id;
  })

  localStorage.setItem("studentRec", JSON.stringify(updData));
  viewSelection();
}

const viewSelection = () => {
  stdSeletion = getSelection();
  tbody.innerHTML = "";
  stdSeletion.forEach((ele, index) => {
    tbody.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${ele.fname} ${ele.lname}</td>
        <td>${ele.contact}</td>
        <td>${ele.email}</td>
        <td><button onclick="return decQty(${ele.id})">-</button>  ${ele.qty}  <button onclick="return incQty(${ele.id})">+</button></td>
        <td><button class="btn btn-danger" style="margin-right: 5px;" onclick="deleteCart(${ele.id})">Delete</button></td>
        </tr>`;
  });
}

viewSelection();