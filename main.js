const BluetoothDevice = require('web-bluetooth')

const device = new BluetoothDevice({
  name: 'Moto 360 3G3Z',
  service: ['battery_level']
})

device.connect().then(device => {
  console.log(device, 'Connected!');
  getBatteryLevel();
}).catch(error => {
  console.log(error);
});

const getBatteryLevel = function () {
  device.getValue('battery_service')
         .then(value => {
            console.log('Battery level', value);
         });
}
