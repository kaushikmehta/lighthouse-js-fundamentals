const chooseStations = function (stations) {
 let result = [];
 for (var i = 0; i < stations.length; i++) {
     var station = stations[i];
     if (station[1] >= 20 && (station[2] == 'school' || station[2] == 'community centre')) {
         result.push(station[0]);
        }
    }
console.log(result);
}
const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);