let isTabSwitched = false,
  isChoosingFile = false;

window.addEventListener("focusout", function (event) {
  const target = event.relatedTarget || event.target;
  if (!target || target === window.document || target === window) {
    isTabSwitched = true;
  }
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    if (isTabSwitched) {
      handleTabSwitch();
      isTabSwitched = false;
    } else {
      handleNewTab();
    }
  }
});

window.addEventListener("blur", function (event) {
  console.log("blur");
  if (!this.document.hidden) handleMinimizeBrowser();
});

function handleTabSwitch() {
  appendState("VisibilityChange", "out of focus");
}

function handleNewTab() {
  appendState("VisibilityChange", "out of focus");
}

function handleMinimizeBrowser() {
  appendState("VisibilityChange", "out of focus");
}

// paste event
document.addEventListener("paste", function (event) {
  event.preventDefault();
  appendState("Paste", "paste");
});

// copy event
document.addEventListener("copy", function (event) {
  event.preventDefault();
  appendState("Copy", "copy");
});

// ctrl or cmd key clicked
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    appendState("Keydown", "ctrl clicked");
  }

  if (event.metaKey) {
    appendState("Keydown", "cmd clicked");
  }
});

document.querySelector("#fullscreen").onclick = function () {
  alert("clicked");
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

document.querySelector("#file-input").onclick = function () {
  isChoosingFile = true;
};

document.querySelector("#file-input").onchange = function () {
  isChoosingFile = false;
};

// helper function
function appendState(type, text) {
  if (isChoosingFile) return;
  const currentState = document.querySelector("#table-body").innerHTML;
  document.querySelector("#table-body").innerHTML = `${
    currentState ? currentState : ""
  }<tr>
  <td>${type}</td>
  <td>${text}</td>
  </tr>`;
}
