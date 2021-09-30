function getcity() {
    var city = document.getElementById("city").value
    var link = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=b8bd04883bfc1ee2e662b28a6e82f1f9"
    // console.log(link)
    var lati, loni;
    fetch(link)
        .then(data => data.json())
        .then(latlon => {
            lati = latlon[0].lat;
            loni = latlon[0].lon;
            console.log(lati, loni)
        })
    // console.log(lati, loni)
    var link2 = "https://api.waqi.info/feed/geo:" + lati + ";" + loni + "/?token=a4d3187443f75a6fd3d048e7332584dcc5b51546"
    try {
        fetch(link2)
            .then(data => data.json())
            .then(air => {
                const index = air.data.aqi;
                console.log(index)
            })
    }
    catch {
        console.log("No Records Found")
    }
}
