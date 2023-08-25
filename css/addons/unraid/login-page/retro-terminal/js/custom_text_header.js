
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
     _____ ___    ____       _____ __________ _    ____________ 
    / ___//   |  / __ \\     / ___// ____/ __ \\ |  / / ____/ __ \\
    \\__ \\/ /| | / /_/ /_____\\__ \\/ __/ / /_/ / | / / __/ / /_/ /
   ___/ / ___ |/ ____/_____/__/ / /___/ _, _/| |/ / /___/ _, _/ 
  /____/_/  |_/_/         /____/_____/_/ |_| |___/_____/_/ |_| 
  ------------------------------------------------------------
`;
document.getElementById("login").innerHTML += custom_text_header
