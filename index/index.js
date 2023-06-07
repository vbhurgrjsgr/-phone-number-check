const country = document.getElementById("country");
const phone = document.getElementById("phone");
const code = document.getElementById("code");

const russiaBtn = document.getElementById("russia");
const germanyBtn = document.getElementById("germany");
const franceBtn = document.getElementById("france");

let selectedCountry = null;

russiaBtn.addEventListener("click", () => {
  phone.value = "";
  updateCode("Russia");
  selectedCountry = "Russia";
});

germanyBtn.addEventListener("click", () => {
  phone.value = "";
  updateCode("Germany");
  selectedCountry = "Germany";
});

franceBtn.addEventListener("click", () => {
  phone.value = "";
  updateCode("France");
  selectedCountry = "France";
});

phone.addEventListener("input", () => {
  const value = phone.value.replace(/[^\d]/g, "").slice(0, 14);
  let formattedValue = "";
  let i = 0;
  if (value.length > 0) {
    formattedValue += "(" + value.substring(i, i + 3) + ")";
    i += 3;
  }
  if (value.length >= 4) {
    formattedValue += " " + value.substring(i, i + 3);
    i += 3;
  }
  if (value.length >= 7) {
    formattedValue += "-" + value.substring(i, i + 2);
    i += 2;
  }
  if (value.length >= 9) {
    formattedValue += "-" + value.substring(i, i + 2);
    i += 2;
  }
  phone.value = formattedValue;
  updateCode(selectedCountry);
});

function updateCode(countryName) {
  const countryCode = {
    Russia: "+7",
    Germany: "+49",
    France: "+33"
  };
  code.textContent = countryCode[countryName];
}