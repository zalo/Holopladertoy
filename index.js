class Holopladertoy {
    constructor() {}
    async retrieveCalibration() {

        this.calibrationData = await HoloPlay.Calibration.getCalibration();

        console.log(this.calibrationData);

        // account for tilt in measuring pitch horizontally
        const screenInches =
            this.calibrationData.screenW.value / this.calibrationData.DPI.value;
        let newPitch = this.calibrationData.pitch.value * screenInches;
        newPitch *= Math.cos(Math.atan(1.0 / this.calibrationData.slope.value));

        // tilt
        let newTilt = this.calibrationData.screenH.value /
            (this.calibrationData.screenW.value * this.calibrationData.slope.value);
        if (this.calibrationData.flipImageX.value == 1) { newTilt *= -1; }

        console.log("Corrected Pitch: " + newPitch + ", Corrected Slope: " + newTilt);

        // Retrieve the current shader contents through the CodeMirror Instance
        console.log(gShaderToy.mCodeEditor.doc.getValue());

        // TODO: Replace the variables in the Shadertoy script with these new values using setValue()
        // Maybe also trigger a cheeky shader recompile for an instant preview
        gShaderToy.UIStartCompiling(true);
        gShaderToy.mEffect.Compile(true, function(worked) {
            gShaderToy.UIEndCompiling(true);
        });

    }
}

let holopladertoy = new Holopladertoy();
holopladertoy.retrieveCalibration();
