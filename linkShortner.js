async function shortenUrl() {
     const url = document.getElementById("formInput").value;
     const bodyStringfied = JSON.stringify({ "long_url": url, "domain": "bit.ly", "group_guid": "Bn5qakOBChE" });
     let response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
          method: 'POST', headers: {
               'Authorization': 'Bearer e499d5c275bbd18dd029d56a556159f8316092c1',
               'Content-Type': 'application/json'
          },
          body: bodyStringfied
     });
     let data = await response.json();

     let newUrl = data.link;
     let insertedUrl = document.getElementsByClassName("insertedUrl")[0];
     let shortenUrl = document.getElementById("shortenUrl")
     let insertedUrlLength = document.getElementById("insertedUrlLength");
     let openUrl = document.getElementById("openUrl");
     let copyUrl = document.getElementById("copyUrl");

     insertedUrl.textContent += url;
     insertedUrlLength.textContent += `has a length of ${url.length} characters. Bitly.ws created URL with length of ${data.link.length} characters:`
     shortenUrl.textContent += data.link;
     openUrl.setAttribute("href", data.link)

     // copy Text 
     copyUrl.addEventListener("click", function copyText() {
          const textarea = document.createElement("textarea");
          textarea.value = data.link;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          alert("URL copied to clipboard!");
     });


}

