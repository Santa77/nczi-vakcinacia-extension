console.log("content.js");
const storage = chrome.storage;
const elPatientForm = document.querySelector("form[name=patientForm]");

const logoSvg = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="0.8em" viewBox="0 0 512 512" width="0.8em" style="ba xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="Bottle-Syringe-Medicale-Healthcare-Hospital"><path d="m184 392c0-4.418-3.582-8-8-8h-32v-40c0-4.418-3.582-8-8-8h-40v-32h40c4.418 0 8-3.582 8-8v-40h32v40c0 4.418 3.582 8 8 8h32c4.418 0 8-3.582 8-8s-3.582-8-8-8h-24v-40c0-4.418-3.582-8-8-8h-48c-4.418 0-8 3.582-8 8v40h-40c-4.418 0-8 3.582-8 8v48c0 4.418 3.582 8 8 8h40v40c0 4.418 3.582 8 8 8h40c4.418 0 8-3.582 8-8z"/><path d="m467.92 9.92c-3.696-2.418-8.648-1.42-11.12 2.24l-60.56 91.84c-3.626-.773-7.385-.663-10.96.32-6.148 1.605-11.394 5.611-14.56 11.12l-7.28 12.56c-17.104.04-32.905 9.144-41.52 23.92l-33.92 58.8v-37.92c-.051-15.796-9.346-30.098-23.76-36.56l-33.92-15.04c-8.683-3.881-14.286-12.489-14.32-22v-3.2h8c13.238-.04 23.96-10.762 24-24v-32c-.04-13.238-10.762-23.96-24-24h-144c-13.238.04-23.96 10.762-24 24v32c.04 13.238 10.762 23.96 24 24h8v3.2c-.034 9.511-5.637 18.119-14.32 22l-33.92 15.04c-14.414 6.462-23.709 20.764-23.76 36.56v315.2c0 4.418 3.582 8 8 8h256c4.418 0 8-3.582 8-8v-61.28c4.418.031 8.025-3.526 8.056-7.944.02-2.901-1.532-5.586-4.056-7.016l-6.96-4 120-207.84c8.562-14.826 8.562-33.094 0-47.92l7.28-12.56c3.168-5.471 4.004-11.986 2.32-18.08-.824-3.357-2.412-6.478-4.64-9.12l60.16-91.28c2.44-3.62 1.483-8.532-2.137-10.972-.034-.023-.068-.046-.103-.068zm-387.92 70.08c-4.418 0-8-3.582-8-8v-32c0-4.418 3.582-8 8-8h144c4.418 0 8 3.582 8 8v32c0 4.418-3.582 8-8 8zm-48 400v-48h88c4.418 0 8-3.582 8-8s-3.582-8-8-8h-88v-192h200c4.418 0 8-3.582 8-8s-3.582-8-8-8h-200v-35.2c.034-9.511 5.637-18.119 14.32-22l33.92-15.04c14.414-6.462 23.709-20.764 23.76-36.56v-3.2h96v3.2c.051 15.796 9.346 30.098 23.76 36.56l33.92 15.04c8.683 3.881 14.286 12.489 14.32 22v65.6l-70.08 121.36-6.88-4c-3.844-2.209-8.751-.884-10.96 2.96s-.884 8.751 2.96 10.96l20.72 12-31.84 55.12-21.28-12.32c-3.844-2.209-8.751-.884-10.96 2.96s-.884 8.751 2.96 10.96l72.08 41.6zm189.68-90.32 27.68 16-31.84 55.12-27.68-16zm50.32 90.32h-21.2l-19.36-11.2 31.84-55.12 8.72 5.04zm119.2-288.08-120 207.84-55.44-32 16-27.68 6.96 4c3.85 2.165 8.724.848 10.96-2.96 2.171-3.824.849-8.683-2.96-10.88l-6.96-4 8-13.84 20.8 12c3.844 2.209 8.751.884 10.96-2.96s.884-8.751-2.96-10.96l-20.8-12 8-13.84 6.96 4c3.769 2.245 8.645 1.009 10.89-2.76.024-.04.047-.08.07-.12 2.178-3.848.859-8.732-2.96-10.96l-6.96-4 8-13.84 20.8 12c3.844 2.209 8.751.884 10.96-2.96s.884-8.751-2.96-10.96l-20.8-12 8-13.84 6.96 4c3.769 2.245 8.645 1.009 10.89-2.76.024-.04.047-.08.07-.12 2.178-3.848.859-8.732-2.96-10.96l-6.96-4 8-13.84 20.8 12c3.85 2.165 8.724.848 10.96-2.96 2.171-3.824.849-8.683-2.96-10.88l-20.8-12 8-13.84 6.96 4c3.844 2.209 8.751.884 10.96-2.96s.884-8.751-2.96-10.96l-6.96-4c8.837-15.309 28.411-20.557 43.72-11.72s20.557 28.411 11.72 43.72zm7.2-60.48-4.32 7.6c-2.048-1.734-4.243-3.286-6.56-4.64-2.324-1.331-4.76-2.455-7.28-3.36l4.32-7.6c1.064-1.834 2.824-3.162 4.88-3.68 4.096-1.217 8.402 1.117 9.619 5.212.584 2.025.633 4.201-.659 6.468z"/><path d="m494.168 106.728-23.312-38.848c-2.603-3.786-7.783-4.746-11.57-2.142-.839.577-1.565 1.303-2.142 2.142l-23.312 38.848c-10.017 16.661-4.63 38.288 12.032 48.304 16.661 10.017 38.288 4.63 48.304-12.032 6.709-11.159 6.709-25.112 0-36.272zm-13.48 27.544c-4.879 9.415-16.467 13.091-25.881 8.212-9.415-4.879-13.091-16.467-8.212-25.881.292-.563.611-1.111.957-1.642l16.448-27.417 16.448 27.416c3.602 5.91 3.694 13.314.24 19.312z"/></g></svg>`;

function loadForms() {
  storage.sync.get(function (result) {
    console.log(result);
  });
}

function getInputs() {
  return document.forms.patientForm.querySelectorAll(
    ".form-group input, .form-group select, input[name=vaccination_group]"
  );
}

function saveForm(e) {
  console.log(e);
  e.preventDefault();
  storage.sync.get({ multiFormArr: [] }, (result) => {
    let multiFormArr = result.multiFormArr;
    const inputs = getInputs();
    const formArr = [];
    for (const i of inputs) {
      formArr.push({
        value: i.value,
        type: i.type,
        checked: i.checked,
        "ng-model": i.getAttribute("ng-model"),
        name: i.name,
      });
    }

    const existing = multiFormArr.findIndex(
      (x) =>
        x[1].value === formArr[1].value &&
        x[2].value === formArr[2].value &&
        x[3].value === formArr[3].value
    );
    console.log(multiFormArr);
    console.log(formArr);
    console.log(existing);
    if (existing == -1) {
      multiFormArr.push(formArr);
    } else {
      multiFormArr[existing] = formArr;
    }

    storage.sync.set({ multiFormArr: multiFormArr }, function (result) {
      console.log(result);
      alert("Formulár uložený");
    });
  });
}

function addSaveButton() {
  const btnSave = document.createElement("button");
  btnSave.innerHTML = logoSvg + " Ulož";
  btnSave.style = "margin-top: 15px;margin-right: 20px";
  btnSave.className = "btn btn-secondary";
  btnSave.addEventListener("click", saveForm);
  elPatientForm.appendChild(btnSave);
}

function fnFillForm(formArray) {
  return function fillForm(e) {
    console.log(e);
    e.preventDefault();
    const inputs = getInputs();
    const unmatchedInputs = [];
    for (const input of inputs) {
      const inputEvent = new InputEvent("input");
      const changeEvent = new InputEvent("change");
      const blurEvent = new FocusEvent("blur");
      const savedInput = formArray.find(
        (x) => x["ng-model"] == input.getAttribute("ng-model")
      );
      if (savedInput !== undefined) {
        if (input.type == "checkbox" || input.type == "radio") {
          input.checked = savedInput.checked;
        } else {
          input.value = savedInput.value;
        }

        input.dispatchEvent(inputEvent);
        input.dispatchEvent(changeEvent);
        input.dispatchEvent(blurEvent);
      } else {
        unmatchedInputs.push(input);
      }
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const elCalendar = document.getElementById("vacc_calendar");
        if (elCalendar) {
          elCalendar.scrollIntoView({ behavior: "smooth", block: "start" });
          window.scrollBy(0, -80);
        }

        let unmatched = "";
        if(unmatchedInputs.length < 0){
            unmatched = `(nenapárovaných ${unmatchedInputs.length} políčok)`
        }
        alert(`Formulár vyplnený ${unmatched}`);
      });
    });
  };
}
function clearStorage(e) {
  console.log(e);
  e.preventDefault();
  storage.sync.clear(function () {
    var error = chrome.runtime.lastError;
    console.log(error);
    alert("Uložené údaje vymazané");
  });
}
function addLoadButtons() {
  storage.sync.get({ multiFormArr: [] }, function (result) {
    let empty = true;
    const elFillIn = document.createElement("div");
    elFillIn.innerHTML = `<h3>${logoSvg} Vlož uloženú osobu</h3>`;
    elFillIn.style.marginBottom = "1rem";
    elFillIn.style.padding = "1rem";
    elFillIn.style.borderRadius = ".3rem";
    elFillIn.style.backgroundColor = "#d0d0d0";
    const elFillInInner = document.createElement("div");
    elFillInInner.style.display = "flex";
    elFillInInner.style.flexWrap = "wrap";
    for (const f of result.multiFormArr) {
      if (f) {
        empty = false;
        const btn = document.createElement("button");
        btn.className = "btn btn-primary";
        btn.style.margin = "0.3em";
        btn.textContent = `${f[1].value} ${f[2].value}`;
        btn.addEventListener("click", fnFillForm(f));
        elFillInInner.append(btn);
      }
    }
    
    const btnClear = document.createElement("button");
    btnClear.addEventListener("click", clearStorage);
    btnClear.textContent = "Vymazať zapamätané údaje";
    btnClear.className = "btn btn-secondary";
    btnClear.style.fontSize = "0.8em";
    btnClear.style.margin = "0.3em";
    btnClear.style.marginLeft = "auto";
    elFillInInner.append(btnClear);
    elFillIn.append(elFillInInner);
    if (!empty) {
      elPatientForm.prepend(elFillIn);
    }
  });
}

addSaveButton();
addLoadButtons();
loadForms();
