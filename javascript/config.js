function openPlayerConfig() {
  formEditConfig.style.display = "flex";
  backdropOverlay.style.display = "block";
}

function closePlayerConfig() {
  formEditConfig.style.display = "none";
  backdropOverlay.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  //   const inputNameFieldValue = document.getElementById("input-name-field");
  //   const enteredPlayername = inputNameFieldValue.value;
  const formData = new FormData(event.target);
  //   const enteredPlayername = formData.get("playername").trim();
  console.log(enteredPlayername);
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();

  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const enteredPlayername = formData.get("playername").trim(); // '      ' => ''

  //   if (!enteredPlayername) {
  //     // enteredPlayername === ''
  //     event.target.firstElementChild.classList.add("error");
  //     errorsOutputElement.textContent = "Please enter a valid name!";
  //     return;
  //   }
}
