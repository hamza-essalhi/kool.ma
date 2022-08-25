const signUp = () => {
  const fNameInput = document.querySelector('input[name="Fname"]');
  const lNameInput = document.querySelector('input[name="Lname"]');
  const UserInput = document.querySelector('input[name="username"]');

  document.addEventListener("change", (e) => {
    if (lNameInput.value != "") {
      UserInput.value = `User${capt(fNameInput.value)}${capt(
        lNameInput.value
      )}`;
    }
  });
};
const capt = (e) => {
  return e.charAt(0).toUpperCase() + e.slice(1);
};

const passwordEye = () => {
  let showPass = document.querySelectorAll(".passInput");
  for (let i = 0; i < showPass.length; i++) {
    if (showPass[i].type == "password") {
      showPass[i].type = "text";
      const eye1 = document.querySelector(".bi-eye");
      eye1.className = "bi bi-eye-slash p-1";
      eye1.style.color = "red";
    } else {
      showPass[i].type = "password";
      const eye2 = document.querySelector(".bi-eye-slash");
      eye2.className = "bi bi-eye p-1";
      eye2.style.color = "black";
    }
  }
};

signUp();

// const navBarForPhones = () => {
//     const linkList = ["home", "Contact Us", "Our products", "Sign up", "Login"];
//     const divNavBar = document.querySelector(".navBarPhone");
//     const offcanvs = document.createElement("div");
//     const offcanvasHeader = document.createElement("div");
//     const title = document.createElement("a");
//     const btnClose = document.createElement("button");
//     const offcanvasBody = document.createElement("div");
//     const dropdown = document.createElement("div");
//     const ul = document.createElement("ul");
//     const checkOffcanvas = document.querySelector(".offcanvas");
//     if (!checkOffcanvas) {
//       offcanvs.className = "offcanvas offcanvas-start";
//       offcanvs.id = "offcanvasExample";
//       offcanvs.ariaLabel = "offcanvasExampleLabel";
//       divNavBar.appendChild(offcanvs);

//       offcanvasHeader.className = "ooffcanvas-header text-decoration-none";
//       offcanvasHeader.id = "offcanvasExample";
//       offcanvs.appendChild(offcanvasHeader);
//       title.className = "navbar-brand";
//       title.href = "home.html";
//       title.innerHTML = "KooL.ma";

//       btnClose.className = "btn-close text-reset";
//       btnClose.type = "button";
//       btnClose.ariaLabel = "Close";

//       offcanvasHeader.appendChild(title);
//       offcanvasHeader.appendChild(btnClose);

//       offcanvasBody.className = "offcanvas-body";

//       offcanvs.appendChild(offcanvasBody);
//       dropdown.className = "dropdown mt-3";
//       offcanvasBody.appendChild(dropdown);

//       ul.className = "navbar-nav text-center";
//       for (let i = 0; i < 5; i++) {
//         let li = document.createElement("li");
//         li.className = "nav-item";
//         let a = document.createElement("a");
//         if (i > 2) {
//           a.className = "nav-link";
//         } else {
//           a.className = "btn  me-3";
//         }
//         a.innerHTML = linkList[i];
//         li.appendChild(a);
//         ul.appendChild(li);
//       }
//       dropdown.appendChild(ul);
//     }
//   };
// window.onresize = nativBar = () => {
//   if ($(".navbar-collapse").css("display") == "flex") {
//     console.log("yes");
//   } else {
//     navBarForPhones();
//     console.log("non");
//   }
// };
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
