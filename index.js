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
        /** @type {string} */
        let shader = gShaderToy.mCodeEditor.doc.getValue();

        shader = shader.replace(/((const)?\s*float\s*pitch\s*=\s*\-?\s*\d*\s*\.{0,1}\s*\d*\s*\;\s*\n*)((const)?\s*float\s*slope\s*=\s*\-?\s*\d*\s*\.{0,1}\s*\d*\s*\;\s*\n*)((const)?\s*float\s*center\s*=\s*\-?\s*\d*\s*\.{0,1}\s*\d*\s*\;)/g,
            "\nconst float pitch  = " + newPitch + ";\n" +
            "const float slope  = " + newTilt  + ";\n" +
            "const float center = " + this.calibrationData.center.value + ";\n");
        
        gShaderToy.mCodeEditor.doc.setValue(shader);
        gShaderToy.SetShaderFromEditor(true, true)

    }
}
