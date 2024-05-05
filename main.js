// 1 taks

const handleChange = () => {
  let text = document.getElementById("text").value;
  let result = document.getElementById("result");
  if (text.length === 0) {
    result.innerText = "Parolni kiriting";
    result.classList.add("required");
    result.classList.remove("strong");
    result.classList.remove("normal");
    result.classList.remove("easy");
  } else if (text.length <= 4) {
    result.innerText = "Kuchsiz parol";
    result.classList.add("easy");
    result.classList.remove("strong");
    result.classList.remove("normal");
    result.classList.remove("required");
  } else if (text.length > 4 && text.length < 8) {
    result.innerText = "O'rtacha parol";
    result.classList.add("normal");
    result.classList.remove("strong");
    result.classList.remove("required");
    result.classList.remove("easy");
  } else if (text.length >= 8) {
    result.innerText = "Kuchli parol";
    result.classList.add("strong");
    result.classList.remove("required");
    result.classList.remove("normal");
    result.classList.remove("easy");
  }
};

// 2 taks

const handleSubmit = (e) => {
  e.preventDefault();
  const users = [];
  let payload = {
    name: e.target[0].value,
    age: e.target[1].value,
    phone: e.target[2].value,
    address: e.target[3].value,
  };
  users.push(payload);
  let tr = "";
  for (let item of users) {
    tr +=
      "<tr>" +
      "<td>" +
      item.name +
      "</td>" +
      "<td>" +
      item.age +
      "</td>" +
      "<td>" +
      item.phone +
      "</td>" +
      "<td>" +
      item.address +
      "</td>" +
      "</tr>";
  }
  document.getElementById("tbody").innerHTML = tr;
};
