class Holopladertoy {
    constructor() {
        this.calibrationData = HoloPlay.Calibration.getCalibration();

        console.log(this.calibrationData);

        const screenInches =
            this.calibrationData.screenW.value / this.calibrationData.DPI.value;
        let newPitch = this.calibrationData.pitch.value * screenInches;

        // account for tilt in measuring pitch horizontally
        newPitch *= Math.cos(Math.atan(1.0 / this.calibrationData.slope.value));
        quiltMaterial.uniforms.pitch.value = newPitch;

        // tilt
        let newTilt = this.calibrationData.screenH.value /
            (this.calibrationData.screenW.value * this.calibrationData.slope.value);
        if (this.calibrationData.flipImageX.value == 1) {
            newTilt *= -1;
        }

        console.log(newPitch, newTilt);



    }
}

new Holopladertoy();
