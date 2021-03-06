
import React from 'react'



const MyChallenge = () => {
    return (
     <></>
    );  
}

module.exports = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta
      name="author"
      content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
    />
    <meta name="generator" content="Hugo 0.82.0" />
    <script type="text/javascript" src="d3/d3.v3.js"></script>
    <script type="text/javascript" src="selected-data.js"></script>
    <link rel="stylesheet" href="map.css"/>
    <title>2018 MC2 Dashboard</title>

    <link
      rel="canonical"
      href="https://getbootstrap.com/docs/5.0/examples/dashboard/"
    />

    <!-- Bootstrap core CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      .select-field {
        margin-left: 10px;
        margin-top: 15px;
      }

      .main-display {
        margin-top: 30px;
        margin-left: 30px;
      }

      .play-button {
        margin-left: 45px;
      }

      .date-header {
        margin-bottom: 10px;
      }

      .scale-label-units {
        margin-left: -60px;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet" />
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <main class="main-display">
          <div>
            <h2 id="chemicalDisplay">Chemical:</h1>
            <h2 class="date-header" id="monthDisplay">Date:</h1>
          </div>
          <div>
            <div id="map-row">

              <!-- map overlay -->
              <svg
                  id="map"
                  width="628"
                  height="628"
                  style="
                    background-image: url(img/waterwaysMap.jpg);
                    background-size: cover;
                  "
              >
                <!-- Achara -->
                <circle cx="257" cy="213" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Boonsri -->
                <circle cx="344" cy="105" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Busarakhan -->
                <circle cx="490" cy="275" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Chai -->
                <circle cx="397" cy="320" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Decha -->
                <circle cx="47" cy="399" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Kannika -->
                <circle cx="435" cy="490" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Kohsoom -->
                <circle cx="485" cy="200" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Sakda -->
                <circle cx="341" cy="605" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Somchair -->
                <circle cx="190" cy="300" r="10" stroke="black" stroke-width="1px"></circle>
                <!-- Tansanee -->
                <circle cx="179" cy="465" r="10" stroke="black" stroke-width="1px"></circle>
              </svg>

              <div id="scale">
                <div id="color-scales">
                  <div class="scale" id="upper-scale">

                  </div>
                  <div class="scale" id="lower-scale">

                  </div>
                </div>
                <div id="scale-labels">
                  <h4 class="scale-label" id="upper-label">100</h4>
                  <h4 class="scale-label" id="middle-label">.1</h4>
                  <h4 class="scale-label" id="lower-label">0</h4>
                </div>
                <div id="scale-heading">
                  <h3 id="unit-display" class="scale-label-units">Average Monthly Reading</h3>
                </div>
              </div>
            </div>
            <div class="slidecontainer">
              <input type="range" min="0" max="100" value="0" class="slider" id="myRange">
            </div>
            <select class="select-field" id="selectNumber">
            </select>

            <!-- Temporary until slider is added -->
            <button id="first_month">First Month</button>
            <button id="previous_month">Previous Month</button>
            <button id="next_month">Next Month</button>
            <button id="last_month">Last Month</button>

            <script type="text/javascript">
              var select = document.getElementById("selectNumber");
              data.forEach((item, index) => {
                var dropdownElement = document.createElement("option");
                dropdownElement.textContent = item[0];
                dropdownElement.value = index;
                select.appendChild(dropdownElement);
              });
            </script>
            <button class="play-button" id="playButton">Play</button>
            <button id="pauseButton">Pause</button>
          </div>
        </main>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>

    <script
      src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"
      integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"
      integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha"
      crossorigin="anonymous"
    ></script>
    <script type="text/javascript" src="map.js"></script>
  </body>
</html>`;
