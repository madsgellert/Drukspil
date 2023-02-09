<html>
  <head>
    <title>Check-in system</title>
  </head>
  <body>
    <h1>Check-in system</h1>
    <p>Skriv dit navn i boksen nedenfor:</p>
    <input id="name" type="text">
    <button onclick="checkIn()">Check-in</button>
    <table id="checkIns">
      <tr>
        <th>Navn</th>
        <th>Tidspunkt</th>
        <th>Dato</th>
      </tr>
    </table>
    <script>
      const checkIn = () => {
        const name = document.getElementById("name").value;
        if (!name) {
          alert("Du skal skrive dit navn");
          return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = 56.16010665893555;
          const longitude = 10.216354370117188;
          const distance = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            latitude,
            longitude
          );
          if (distance < 50) {
            const checkIns = document.getElementById("checkIns");
            const date = new Date();
            const newRow = checkIns.insertRow(-1);
            newRow.insertCell(0).innerHTML = name;
            newRow.insertCell(1).innerHTML = date.toLocaleTimeString();
            newRow.insertCell(2).innerHTML = date.toLocaleDateString();
            alert("Check-in succesfuld");
          } else {
            alert("Du befinder dig for langt væk");
          }
        });
      };

      const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const radlat1 = (Math.PI * lat1) / 180;
        const radlat2 = (Math.PI * lat2) / 180;
        const theta = lon1 - lon2;
        const radtheta = (Math.PI * theta) / 180;
        let dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
      };
    </script>
  </body>
</html>
