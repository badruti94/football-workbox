var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BEbi8E80IaAiVeISdbdkc2NHIj_hqIl-Wdrqr2ZMQk78PcAQe4eoWaOcGjfe2kSu7vENNA9ex72yn-ia3jUdSSI",
    "privateKey": "KiLCdy1EuZZxPSKjqkPlNCSafD4YjsQTOcg1nhm0-2k"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eVKEhJE8kqw:APA91bFkAL954CQ6Tn2if2sd7HodT-JxUdViP2GcNJVuMMJe-75ctsYpxHdK3AMA13KzBiFPcPUVEQhI0SH_t6V6MQffvZ1GqFokXCJUoDLw4NZJsK1dRdiDzdEgnkM0Ocb0itFFDXMH",
    "keys": {
        "p256dh": "BI58p8yG9UpIlk2moh97MDycYh/KTsi112Yv/avtvulsYuHvFykl9/66u1RL2QWPlX0NUDAeyQgwbDu9PFzFETI=",
        "auth": "yisuWioyD5YVXlRCcx/dpQ=="
    }
};
var payload = 'Hari ini jadwal pertandingan Barcelona vs Real Madrid';
var options = {
    gcmAPIKey: '119400384505',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);