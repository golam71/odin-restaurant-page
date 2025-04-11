export function contact() {
    // Email Section
    let about = document.createElement("div");
    about.classList.add("about");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
  
    h3.innerText = "Email";
    about.appendChild(h3);
    p.innerHTML =
      "<p>If you have any questions, suggestions, or just want to say hello, feel free to reach out via email. We aim to respond within 24 hours on business days. You can contact us at <strong>contact@yourwebsite.com</strong>. We're always happy to hear from you and assist in any way we can.</p>";
    about.appendChild(p);
    document.getElementById("content").appendChild(about);
  
    // Phone Section
    about = document.createElement("div"); 
    about.classList.add("about");
    h3 = document.createElement("h3");
    p = document.createElement("p");
  
    h3.innerText = "Phone";
    about.appendChild(h3);
    p.innerHTML =
      "<p>Prefer to talk directly? Give us a call at <strong>+1 (555) 123-4567</strong>. Our lines are open Monday through Friday from 9 AM to 5 PM (EST). Whether it’s a quick question or a detailed conversation, we’re here to help. Don’t hesitate to reach out—we believe in the power of personal connection.</p>";
    about.appendChild(p);
    document.getElementById("content").appendChild(about);
  
    // Address Section
    about = document.createElement("div"); 
    about.classList.add("about");
    h3 = document.createElement("h3");
    p = document.createElement("p");
  
    h3.innerText = "Address";
    about.appendChild(h3);
    p.innerHTML =
      "<p>We’re based in the heart of New York City, just a few blocks from Central Park. Our address is <strong>123 Main Street, New York, NY 10001</strong>. If you're in the area, feel free to drop by for a chat. We welcome visits by appointment and love meeting our community in person whenever possible.</p>";
    about.appendChild(p);
    document.getElementById("content").appendChild(about);
  }
  