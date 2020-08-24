$().ready(function () {
});

function getStation(fn) {
  let data = {
    type: 'station',
    cmd: '105',
    stationName: '人民医院',
    myLat: '',
    myLng: '',
  };
  common_ajax(data, fn);
}
