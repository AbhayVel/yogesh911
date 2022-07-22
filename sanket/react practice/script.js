const header = ["Company", "Contact", "Country"];
var data = [
    {
      Company : "Zensar",
      Contact : "Sanket",
      Country : "India"
    },
    {
      Company : "Accen",
      Contact : "Ranjit",
      Country : "USA"
    },
    {
      Company : "Zensar",
      Contact : "Komal",
      Country : "Canada"
    },
    {
      Company : "Zensar",
      Contact : "Yogesh",
      Country : "Brazil"
    }
]
window.addEventListener("load", function () {
  var innerHTML = `
  <div>  ${form()} </div>  
                        <table>
                      
                          ${TRH()}                       
                          ${TRD()}
                        
                        </table>
           
                     `;
  var body = this.document.querySelector("#app");
  body.innerHTML = innerHTML;
});

function form() {
  return ` <form action="">
        ${label("fname", "First name:")}</label><br>
        ${input("fname", "fname", "inputClass", "John")}<br>
        ${label("lname", "Last name:")}</label><br>
        ${input("lname", "lname", "inputClass", "Doe")}<br><br>
        ${button({ value: "Submit", onclick: "myFun()" })}
        </form> `;
}
function myFun() {
  var ele = this.event.target;
  alert(ele.value);
}

function label(forName, text) {
  return `<label for="${forName}">${text}</label>`;
}
function input(id, name, className, value) {
  return `<input type="text" id="${id}" class="${className} name="${name}" value="${value}">`;
}
function button(props) {
  return ` <input type="submit" value="${props.value}" onclick="${props.onclick}">`;
}

function TRH() {
  return `
      <tr>
      ${header
        .map(function (e) {
          return TH({ text: e });
        })
        .join("")}
      </tr>
  `;
}

function TH(props) {
  return `
  <th>${props.text}</th>
  `;
}













function TRD() {
  return`
    ${data.map(function (e){
      return TR(e)
    }).join('')}
  `
}
function TR(e){
  return`
  <tr>
    <td>${e.Company}</td>
    <td>${e.Contact}</td>
    <td>${e.Country}</td>
    </tr>
  `
}
function TD(props) {
  return `
  <td>${props.text}</td>
  `
}

var output = `${header.map((x) => {
  return x + "\n";
})}`;

const b = header.map(function (x) {
  return x;
});
