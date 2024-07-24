async function mutualFunds() {
  try {
    // Show loader
    const loader = document.createElement("div");
    loader.className = "loader";
    document.body.appendChild(loader);

    // using fetch for getting data's in API
    const response = await fetch("https://api.mfapi.in/mf?limit=1000");
    const allData = await response.json();
    console.log(allData);

    // Remove loader
    document.body.removeChild(loader);

    const data = allData.slice(0, 1000);
    processAndDisplayData(data);

  } catch (error) {
    console.error("Error", error);
  }
}

function processAndDisplayData(data) {
  //create div tag for class container
  const mainContainer = document.createElement("div");
  mainContainer.className = "container";
  document.body.appendChild(mainContainer);

  // h1 tag with class text-enter in container.
  const title = document.createElement("h1");
  title.id = "title";
  title.className = "text-center";
  title.textContent = "WE RECOMMEND DIRECT INDEX MUTUAL FUNDS";
  title.innerHTML += `<hr>
    <h3>COMPLETE MUTUAL FUND LIST</h3>
    <hr>`;
  mainContainer.appendChild(title);

  // sub-div for class row in container class
  const subDiv = document.createElement("div");
  subDiv.className = "row";
  mainContainer.appendChild(subDiv);

  // Using for each method to get each countries data
  for (let i = 0; i < data.length; i++) {
    const list = data[i];
    // another div have col-xl-4 col-lg-4 col-md-4 col-sm-6 as a className in row div tag
    const classDiv = document.createElement("div");
    classDiv.className = "col-xl-4 col-lg-4 col-md-4 col-sm-6";
    subDiv.appendChild(classDiv);

    // here a create div tag with class name card
    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";

    // Another div tag creating for header with class name card-header
    const cardHeadDiv = document.createElement("div");
    cardHeadDiv.className = "card-header";
    cardHeadDiv.innerHTML = `<p><strong><u style="color:red">Scheme Number</u></strong><br><strong> ${list.schemeCode}</strong></p>`;

    // div tag for card-body
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const cardText = document.createElement("div");
    cardText.className = "card-text";
    cardText.innerHTML = `<p><strong><u style="color:yellow">Scheme Name</u></strong><br>${list.schemeName}</p>`;

    cardBodyDiv.appendChild(cardText);
    cardDiv.appendChild(cardHeadDiv);
    cardDiv.appendChild(cardBodyDiv);

    classDiv.appendChild(cardDiv);
  }
}

mutualFunds();