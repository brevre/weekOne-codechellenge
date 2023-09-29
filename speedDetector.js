function speedDetector(DriverSpeed) {
    if (DriverSpeed <= 70) {
        console.log("ok");
    } else if (DriverSpeed > 70) {
        const points = Math.floor((DriverSpeed - 70) / 5);
        if (points <= 12) {
            console.log("points: " + points);
        } else {
            console.log("license suspended");
        }
    }
}

speedDetector(40);