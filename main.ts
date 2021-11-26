/** 
 * @file YFSENSORS
 * @brief YFROBOT's sensors(lego) makecode library.
 * @n This is a MakeCode graphics programming extension for YFROBOT's sensors(lego) module.
 * 
 * @copyright    YFROBOT,2021
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](yfrobot@qq.com)
 * @date  2021-11-23
*/

// motor pin 
let YFSENSORSMotor1D = DigitalPin.P13
let YFSENSORSMotor1A = AnalogPin.P14
let YFSENSORSMotor2D = DigitalPin.P15
let YFSENSORSMotor2A = AnalogPin.P16

//% color="#45b787" weight=10 icon="\uf12e"
namespace YFSENSORS {

    /////////////////////// IR ///////////////////////
    let irState: IrState

    const MICROBIT_MAKERBIT_IR_NEC = 777
    const MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID = 789
    const MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID = 790
    const IR_REPEAT = 256
    const IR_INCOMPLETE = 257

    interface IrState {
        protocol: IrProtocol;
        command: number;
        hasNewCommand: boolean;
        bitsReceived: uint8;
        commandBits: uint8;
    }

    export enum IrProtocol {
        //% block="Keyestudio"
        Keyestudio = 0,
        //% block="NEC"
        NEC = 1,
    }

    export enum IrButtonAction {
        //% block="pressed"
        Pressed = 0,
        //% block="released"
        Released = 1,
    }

    export enum IrButton_Handle {
        // any button
        //% block="Any"
        Any = -1,

        //IR HANDLE
        //% block="↑"
        UP = 0x11,
        //% block="↓"
        DOWN = 0x91,
        //% block="←"
        LEFT = 0x81,
        //% block="→"
        RIGHT = 0xa1,
        //% block="M1"
        M1 = 0xe9,
        //% block="M2"
        M2 = 0x69,
        //% block="A"
        A = 0x21,
        //% block="B"
        B = 0x01
    }

    export enum IrButton {
        // any button
        //% block="Any"
        Any = -1,

        //% block=" "
        Null_01 = -1,
        //% block=" "
        Null_02 = -1,

        // MINI IR 
        //% block="A"
        Mini_A = 0xa2,
        //% block="B"
        Mini_B = 0x62,
        //% block="C"
        Mini_C = 0xe2,
        //% block="D"
        Mini_D = 0x22,
        //% block="︿"
        Mini_UP = 0x02,
        //% block="E"
        Mini_E = 0xc2,
        //% block="＜"
        Mini_Left = 0xe0,
        //% block="۞"
        Mini_SET = 0xa8,
        //% block="＞"
        Mini_Right = 0x90,
        //% block="0"
        Number_0 = 0x68,
        //% block="﹀"
        Mini_Down = 0x98,
        //% block="F"
        Mini_F = 0xb0,
        //% block="1"
        Number_1 = 0x30,
        //% block="2"
        Number_2 = 0x18,
        //% block="3"
        Number_3 = 0x7a,
        //% block="4"
        Number_4 = 0x10,
        //% block="5"
        Number_5 = 0x38,
        //% block="6"
        Number_6 = 0x5a,
        //% block="7"
        Number_7 = 0x42,
        //% block="8"
        Number_8 = 0x4a,
        //% block="9"
        Number_9 = 0x52,
    }
    /////////////////////// IR ///////////////////////
    
    export enum ADOutputModule {
        //% blockId="YFDOM_LED" block="LED"
        LED = 0x0,
        //% blockId="YFDOM_FAN" block="FAN"
        FAN = 0x2,
        //% blockId="YFDOM_VIBRATION_MOTOR" block="VIBRATION_MOTOR"
        VIBRATION_MOTOR = 0x4,
    }

    export enum DigitalOutputModule {
        //% blockId="YFDOM_LED" block="LED"
        LED = 0x0,
        //% blockId="YFDOM_BUZZER" block="BUZZER"
        BUZZER = 0x1,
        //% blockId="YFDOM_FAN" block="FAN"
        FAN = 0x2,
        //% blockId="YFDOM_RELAY" block="RELAY"
        RELAY = 0x3,
        //% blockId="YFDOM_VIBRATION_MOTOR" block="VIBRATION_MOTOR"
        VIBRATION_MOTOR = 0x4,
    }

    export enum AnalogInputModule {
        //% blockId="YFAIM_LIGHT" block="LIGHT"
        LIGHT = 0x0,
        //% blockId="YFAIM_SOUND" block="SOUND"
        SOUND = 0x1,
        //% blockId="YFAIM_TEMPERATURE" block="TEMPERATURE"
        TEMPERATURE = 0x2,
        //% blockId="YFAIM_POTENTIOMETER" block="POTENTIOMETER"
        POTENTIOMETER = 0x3,
        //% blockId="YFAIM_SOIL_HUMIDITY" block="SOIL_HUMIDITY"
        SOIL_HUMIDITY = 0x4,
        //% blockId="YFAIM_ROCKER_X" block="ROCKER_X"
        ROCKER_X = 0x5,
        //% blockId="YFAIM_ROCKER_Y" block="ROCKER_Y"
        ROCKER_Y = 0x6,
    }

    export enum DigitalInputModule {
        //% blockId="YFDIM_MAGNETIC_SENSOR" block="MAGNETIC_SENSOR"
        MAGNETIC_SENSOR = 0x0,
        //% blockId="YFDIM_TILT_SENSOR" block="TILT_SENSOR"
        TILT_SENSOR = 0x1,
        //% blockId="YFDIM_INFRARED_PROXIMITY_SENSOR" block="INFRARED_PROXIMITY_SENSOR"
        INFRARED_PROXIMITY_SENSOR = 0x2,
        //% blockId="YFDIM_VIBRATION_SENSOR" block="VIBRATION_SENSOR"
        VIBRATION_SENSOR  = 0x3,
        //% blockId="YFDIM_PYROELECTRIC_SENSOR" block="PYROELECTRIC_SENSOR"
        PYROELECTRIC_SENSOR = 0x4,
        //% blockId="YFDIM_TOUCH_SENSOR" block="TOUCH_SENSOR"
        TOUCH_SENSOR = 0x5,
        //% blockId="YFDIM_BUTTON" block="BUTTON"
        BUTTON = 0x6,
        //% blockId="YFDIM_COLLISION_SWITCH" block="COLLISION_SWITCH"
        COLLISION_SWITCH = 0x7,
    }

    export enum DigitalInputModuleE {
        //% blockId="YFDIM_BUTTON" block="BUTTON"
        BUTTON = 0x0,
        //% blockId="YFDIM_COLLISION_SWITCH" block="COLLISION_SWITCH"
        COLLISION_SWITCH = 0x1,
    }

    /**
     * An action on a touch button
     */
    export enum DigitalInputEvent {
        //% block=touched
        Clicked = DAL.MICROBIT_BUTTON_EVT_CLICK,  // MICROBIT_BUTTON_EVT_CLICK
    };


    export enum SwitchState {
        //% blockId="YF_ON" block="ON"
        ON = 0x0,
        //% blockId="YF_OFF" block="OFF"
        OFF = 0x1
    }

    export enum Motors {
        //% blockId="M1Motor" block="M1"
        M1 = 0,
        //% blockId="M2Motor" block="M2"
        M2 = 1,
        //% blockId="AllMotors" block="All"
        MAll = 2
    }

    export enum Dir {
        //% blockId="CW" block="Forward"
        CW = 0x0,
        //% blockId="CCW" block="Reverse"
        CCW = 0x1
    }

    export enum PingUnit {
        //% block="μs"
        MicroSeconds,
        //% block="cm"
        Centimeters,
        //% block="inches"
        Inches
    }

    /////////////////////// DigitalTubes ///////////////////////
    let PINDIO = DigitalPin.P1;
    let PINCLK = DigitalPin.P2;

    let CMD_SYSTEM_CONFIG = 0x48   
    let DIG1_ADDRESS = 0x68
    let DIG2_ADDRESS = 0x6A
    let DIG3_ADDRESS = 0x6C
    let DIG4_ADDRESS = 0x6E
    let DatAddressArray = [DIG1_ADDRESS, DIG2_ADDRESS, DIG3_ADDRESS, DIG4_ADDRESS];

    let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];
    let _intensity = 8
    let dbuf = [0, 0, 0, 0]
    /////////////////////// DigitalTubes ///////////////////////

    ///////////////////// Output ///////////////////////
    /**
    * toggle 
    * Turn the Digital Output Module ON or OFF.
    * @param adom module. eg: ADOutputModule.LED
    * @param adomPin pin. eg: AnalogPin.P1
    * @param state switch state. eg: SwitchState.OFF
    * @param percentage brightness of LED, Motor vibration strength, fan rotation speed.
    */
    //% group="Output"
    //% blockId=YFSENSORS_readInfraredSensor weight=100 blockGap=30
    //% block="%adom| %adomPin toggle to %state || percentage %percentage \\%"
    //% adom.fieldEditor="gridpicker" adom.fieldOptions.columns=2
    //% adomPin.fieldEditor="gridpicker" adomPin.fieldOptions.columns=4
    //% percentage.min=0 percentage.max=100
    //% state.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    export function aDOutputModule(adom: ADOutputModule, adomPin: AnalogPin, state: boolean, percentage: number = 100): void {
        let adomM = adom;  // no work
        if (state) {
            pins.analogSetPeriod(adomPin, 100)
            pins.analogWritePin(adomPin, Math.map(percentage, 0, 100, 0, 1023))
        } else {
            pins.analogWritePin(adomPin, 0)
            percentage = 0
        }
    }

    /**
     * Turn the Digital Output Module ON or OFF.
     * @param domPin pin. eg: DigitalPin.P2
     * @param dom pin. eg: DigitalOutputModule.LED
     * @param sws switch state. eg: SwitchState.OFF
     */
    //% group="Output"
    //% blockId=YFSENSORS_digitalOutputModule weight=99 blockGap=30
    //% block="at pin %domPin| %dom| module %sws"
    //% domPin.fieldEditor="gridpicker" domPin.fieldOptions.columns=4
    //% dom.fieldEditor="gridpicker" dom.fieldOptions.columns=2
    //% sws.fieldEditor="gridpicker" sws.fieldOptions.columns=2
    export function digitalOutputModule(domPin: DigitalPin, dom: DigitalOutputModule, sws: SwitchState): void {
        let domM = dom;  // no work
        pins.digitalWritePin(domPin, sws);
    }

    ///////////////////// Output - Motor ///////////////////////
    function clamp(value: number, min: number, max: number): number {
        return Math.max(Math.min(max, value), min);
    }
    /**
     * Set the direction and speed of YFSENSORS motor.
     * @param index motor m1/m2/all. eg: YFSENSORS.Motors.MAll
     * @param direction direction to turn. eg: YFSENSORS.Dir.CW
     * @param speed speed of motors (0 to 255). eg: 120
     */
    //% group="Output"
    //% blockId=YFSENSORS_MotorRun weight=11 blockGap=30
    //% block="motor|%index|move|%direction|at speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function motorRun(index: Motors, direction: Dir, speed: number): void {
        if (index > 2 || index < 0)
            return
        
        let dir_m2 = direction == Dir.CW ? Dir.CCW : Dir.CW;
        speed = clamp(speed, 0, 255) * 4.01;  // 0~255 > 0~1023

        if (index == Motors.M1) {
            pins.digitalWritePin(YFSENSORSMotor1D, direction);
            pins.analogWritePin(YFSENSORSMotor1A, speed);
        } else if (index == Motors.M2) {
            pins.digitalWritePin(YFSENSORSMotor2D, dir_m2);
            pins.analogWritePin(YFSENSORSMotor2A, speed);
        } else if (index == Motors.MAll) {
            pins.digitalWritePin(YFSENSORSMotor1D, direction);
            pins.analogWritePin(YFSENSORSMotor1A, speed);
            pins.digitalWritePin(YFSENSORSMotor2D, dir_m2);
            pins.analogWritePin(YFSENSORSMotor2A, speed);
        }
    }

    /**
     * Stop the YFSENSORS motor.
     * @param motor motor m1/m2/all. eg: YFSENSORS.Motors.MAll
     */
    //% group="Output"
    //% blockId=YFSENSORS_motorStop weight=10 blockGap=30
    //% block="motor |%motor stop"
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=2 
    export function motorStop(motor: Motors): void {
        motorRun(motor, 0, 0);
    }

    ///////////////////// Input Analog Sensors ///////////////////////
    /**
     * Read the Analog Input Sensor Module.
     * @param aimPin pin. eg: AnalogPin.P1
     * @param aim pin. eg: AnalogInputModule.LIGHT
     */
    //% group="Input Analog"
    //% blockId=YFSENSORS_analogInputModule weight=100 blockGap=30
    //% block="at pin %aimPin| %aim| module"
    //% aimPin.fieldEditor="gridpicker" aimPin.fieldOptions.columns=4
    //% aim.fieldEditor="gridpicker" aim.fieldOptions.columns=2
    export function analogInputModule(aimPin: AnalogPin, aim: AnalogInputModule): number {
        let aimM = aim;  // no work
        return pins.analogReadPin(aimPin);
    }

    ///////////////////// Input Digital Sensors ///////////////////////
    /**
     * Read the Digital Input Sensor Module.
     * @param dimPin pin. eg: DigitalPin.P8
     * @param dim pin. eg: DigitalInputModule.BUTTON
     */
    //% group="Input Digital"
    //% blockId=YFSENSORS_digitalInputModule weight=100 blockGap=30
    //% block="at pin %dimPin| %dim| module"
    //% dimPin.fieldEditor="gridpicker" dimPin.fieldOptions.columns=4
    //% dim.fieldEditor="gridpicker" dim.fieldOptions.columns=2
    export function digitalInputModule(dimPin: DigitalPin, dim: DigitalInputModule): boolean {
        let dimM = dim;  // no work
        // return pins.digitalReadPin(dimPin);
        let a: number = pins.digitalReadPin(dimPin);
        if (a == 1) {
            return true;
        } else return false;
    }

    /**
	 * Registers code to run when a Button/Collision event is detected.
     * @param dimE pin. eg: DigitalInputModuleE.BUTTON
     * @param dimEPin pin. eg: DigitalPin.P2
	 */
    //% group="Input Digital"
    //% blockId=YFSENSORS_onevent weight=90 blockGap=30
    //% block="%dimE on %dimEPin| Clicked"
    //% dimEPin.fieldEditor="gridpicker" dimEPin.fieldOptions.columns=4
    //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    export function onEvent(dimE: DigitalInputModuleE, dimEPin: DigitalPin, event: DigitalInputEvent, handler: Action) {
    // export function onEvent(dimE: DigitalInputModuleE, dimEPin: TouchPin, handler: Action) {
        let dimME = dimE;  // no work
        // pins.setEvents(dimEPin, PinEventType.Edge);
        control.onEvent(<number>dimEPin, <number>event, handler); // register handler
        // control.onEvent(<number>dimEPin, <number>DAL.MICROBIT_BUTTON_EVT_CLICK, handler); // register handler
    }

    /**
     * Checks whether the crash sensor is currently pressed.
     */
    /**
     * Checks whether the motion sensor is currently detecting any motion.
     */
    
    ///////////////////// Input Sonar Sensors ///////////////////////
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig trigger pin. eg: DigitalPin.P2
     * @param echo echo pin. eg: DigitalPin.P8
     * @param unit desired conversion unit. eg: PingUnit.Centimeters
     * @param maxCmDistance maximum distance in centimeters (default is 450)
     */
    //% blockId=YFSENSORS_sonar_ping weight=79 blockGap=30
    //% block="ping trig |%trig echo |%echo unit |%unit"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4 
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4 
    //% unit.fieldEditor="gridpicker" unit.fieldOptions.columns=3 
    //% inlineInputMode=inline
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 450): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(50);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d ;
        }
    }


    ///////////////////// DigitalTubes ///////////////////////
    /**
     * Connects to the digital tube module at the specified pin.
     * @param pin_d DIO pin. eg: DigitalPin.P1
     * @param pin_c CLK pin. eg: DigitalPin.P2
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_4digitaltubes_pins" weight=100 blockGap=8
    //% block="connect 4 digital tubes at DIO %pin_d and CLK %pin_c"
    //% pin_c.fieldEditor="gridpicker" pin_c.fieldOptions.columns=4 pin_c.fieldOptions.tooltips="false"
    //% pin_d.fieldEditor="gridpicker" pin_d.fieldOptions.columns=4 pin_d.fieldOptions.tooltips="false"
    export function connectPIN(pin_d: DigitalPin, pin_c: DigitalPin): void {
        PINCLK = pin_c;
        PINDIO = pin_d;
        on();
        clear();
    }

    /** FrameStart_1650 
     */
    function FrameStart_1650(): void {
        pins.digitalWritePin(PINDIO, 1);
        pins.digitalWritePin(PINCLK, 1);
        pins.digitalWritePin(PINDIO, 0);
    }

    /** FrameEnd_1650 
     */
    function FrameEnd_1650(): void {
        pins.digitalWritePin(PINDIO, 0);
        pins.digitalWritePin(PINCLK, 1);
        pins.digitalWritePin(PINDIO, 1);
    }

    /** FrameAck_1650 
     */
    function FrameAck_1650(): number {
        if(pins.digitalReadPin(PINDIO) == 0) {
            pins.digitalWritePin(PINCLK , 1);	
            pins.digitalWritePin(PINCLK , 0);	
            return 0;
        } else {
            return 1;
        }
    }

    /** writeByte 
     */
    function writeByte(firstByte: number, secondByte: number): number {
        let tmp=0;
        let i=0;
        let err=0;		
        tmp=firstByte;

        FrameStart_1650();
        for(i=0;i<8;i++) {
            if(tmp&0x80) {
                pins.digitalWritePin(PINDIO, 1);
            } else {
                pins.digitalWritePin(PINDIO, 0);
            }
            pins.digitalWritePin(PINCLK , 0);
            pins.digitalWritePin(PINCLK , 1);
            pins.digitalWritePin(PINCLK , 0);
            
            tmp=tmp<<1;
        }
        if(FrameAck_1650() == 1) {
            err=1;
        }
        tmp=secondByte;
        for(i=0;i<8;i++) {
            if(tmp&0x80) {
                pins.digitalWritePin(PINDIO, 1);
            } else {
                pins.digitalWritePin(PINDIO, 0);
            }
        
            pins.digitalWritePin(PINCLK , 0);
            pins.digitalWritePin(PINCLK , 1);
            pins.digitalWritePin(PINCLK , 0);
            
            tmp=tmp<<1;
        }
        if(FrameAck_1650()==1) {
            err=1;
        }
        FrameEnd_1650();
        return err;
    }

    /**
     * send command to display
     * @param c command, eg: 0
     */
    function cmd(c: number) {
        writeByte(CMD_SYSTEM_CONFIG, c);
    }

    /**
     * send data to display
     * @param d data, eg: 0
     * @param bit bit, eg: 0
     */
    function dat(bit: number, d: number) {
        writeByte(DatAddressArray[bit % 4], d);
    }

    /**
     * turn on display
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_ON" weight=15 blockGap=8
    //% block="turn on display"
    export function on() {
        cmd(_intensity * 16 + 1)
    }

    /**
     * turn off display
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_OFF" weight=10 blockGap=8
    //% block="turn off display"
    export function off() {
        _intensity = 0
        cmd(0)
    }

    /**
     * clear display content
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_CLEAR" weight=5 blockGap=8
    //% block="clear display"
    export function clear() {
        dat(0, 0)
        dat(1, 0)
        dat(2, 0)
        dat(3, 0)
        dbuf = [0, 0, 0, 0]
    }

    /**
     * show a digital in given position
     * @param num is number (0-15) will be shown, eg: 1
     * @param bit is position, eg: 0
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_DIGIT" weight=40 blockGap=8
    //% block="show digit %num|at %bit"
    //% num.max=15 num.min=0
    //% bit.max=3 bit.min=0
    export function digit(num: number, bit: number) {
        dbuf[bit % 4] = _SEG[num % 16]
        dat(bit, _SEG[num % 16])
    }

    /**
     * show a number in display
     * @param num is number will be shown, eg: 100
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_SHOW_NUMBER" weight=45 blockGap=8
    //% block="show number %num"
    export function showNumber(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit(Math.idiv(num, 1000) % 10, 0)
        digit(num % 10, 3)
        digit(Math.idiv(num, 10) % 10, 2)
        digit(Math.idiv(num, 100) % 10, 1)
    }

    /**
     * show a number in hex format
     * @param num is number will be shown, eg: 123
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_SHOW_HEX_NUMBER" weight=43 blockGap=8
    //% block="show hex number %num"
    export function showHex(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit((num >> 12) % 16, 0)
        digit(num % 16, 3)
        digit((num >> 4) % 16, 2)
        digit((num >> 8) % 16, 1)
    }

    /**
     * show Dot Point in given position
     * @param bit is positiion, eg: 0
     * @param show is true/false, eg: true
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_SHOW_DP" weight=38 blockGap=8
    //% block="at %bit|show dot point %show"
    //% bit.max=3 bit.min=0
    export function showDpAt(bit: number, show: boolean) {
        if (show) dat(bit, dbuf[bit % 4] | 0x80)
        else dat(bit, dbuf[bit % 4] & 0x7F)
    }

    /**
     * set display intensity
     * @param dat is intensity of the display, eg: 3
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_INTENSITY" weight=35 blockGap=8
    //% block="set intensity %dat"
    //% dat.max=7 dat.min=0
    export function setIntensity(dat: number) {
        if ((dat < 0) || (dat > 8))
            return;
        if (dat == 0)
            off()
        else {
            _intensity = dat
            cmd((dat << 4) | 0x01)
        }
    }
    ///////////////////// DigitalTubes ///////////////////////
    
    /////////////////////// IR ///////////////////////
    function pushBit(bit: number): number {
        irState.bitsReceived += 1;
        if (irState.bitsReceived <= 8) {
            // ignore all address bits
            if (irState.protocol === IrProtocol.Keyestudio && bit === 1) {
                // recover from missing message bits at the beginning
                // Keyestudio address is 0 and thus missing bits can be easily detected
                // by checking for the first inverse address bit (which is a 1)
                irState.bitsReceived = 9;
            }
            return IR_INCOMPLETE;
        }
        if (irState.bitsReceived <= 16) {
            // ignore all inverse address bits
            return IR_INCOMPLETE;
        } else if (irState.bitsReceived < 24) {
            irState.commandBits = (irState.commandBits << 1) + bit;
            return IR_INCOMPLETE;
        } else if (irState.bitsReceived === 24) {
            irState.commandBits = (irState.commandBits << 1) + bit;
            return irState.commandBits & 0xff;
        } else {
            // ignore all inverse command bits
            return IR_INCOMPLETE;
        }
    }

    function detectCommand(markAndSpace: number): number {
        if (markAndSpace < 1600) {
            // low bit
            return pushBit(0);
        } else if (markAndSpace < 2700) {
            // high bit
            return pushBit(1);
        }

        irState.bitsReceived = 0;

        if (markAndSpace < 12500) {
            // Repeat detected
            return IR_REPEAT;
        } else if (markAndSpace < 14500) {
            // Start detected
            return IR_INCOMPLETE;
        } else {
            return IR_INCOMPLETE;
        }
    }

    function enableIrMarkSpaceDetection(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullNone);

        let mark = 0;
        let space = 0;

        pins.onPulsed(pin, PulseValue.Low, () => {
            // HIGH, see https://github.com/microsoft/pxt-microbit/issues/1416
            mark = pins.pulseDuration();
        });

        pins.onPulsed(pin, PulseValue.High, () => {
            // LOW
            space = pins.pulseDuration();
            const command = detectCommand(mark + space);
            if (command !== IR_INCOMPLETE) {
                control.raiseEvent(MICROBIT_MAKERBIT_IR_NEC, command);
            }
        });
    }

    /**
     * Connects to the IR receiver module at the specified pin and configures the IR protocol.
     * @param pin IR receiver pin. eg: DigitalPin.P2
     * @param protocol IR protocol. eg: YFSENSORS.IrProtocol.NEC
     */
    //% subcategory="IR_Receiver"
    //% blockId="YFSENSORS_infrared_connect_receiver" weight=15 blockGap=30
    //% block="connect IR receiver at pin %pin and decode %protocol"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    //%
    export function connectIrReceiver(pin: DigitalPin, protocol: IrProtocol): void {
        if (irState) {
            return;
        }

        irState = {
            protocol: protocol,
            bitsReceived: 0,
            commandBits: 0,
            command: IrButton.Any,
            hasNewCommand: false,
        };

        enableIrMarkSpaceDetection(pin);

        let activeCommand = IR_INCOMPLETE;
        let repeatTimeout = 0;
        const REPEAT_TIMEOUT_MS = 120;

        control.onEvent(
            MICROBIT_MAKERBIT_IR_NEC,
            EventBusValue.MICROBIT_EVT_ANY,
            () => {
                const necValue = control.eventValue();

                // Refresh repeat timer
                if (necValue <= 255 || necValue === IR_REPEAT) {
                    repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
                }

                // Process a new command
                if (necValue <= 255 && necValue !== activeCommand) {
                    if (activeCommand >= 0) {
                        control.raiseEvent(
                            MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                            activeCommand
                        );
                    }

                    irState.hasNewCommand = true;
                    irState.command = necValue;
                    activeCommand = necValue;
                    control.raiseEvent(MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID, necValue);
                }
            }
        );

        control.inBackground(() => {
            while (true) {
                if (activeCommand === IR_INCOMPLETE) {
                    // sleep to save CPU cylces
                    basic.pause(2 * REPEAT_TIMEOUT_MS);
                } else {
                    const now = input.runningTime();
                    if (now > repeatTimeout) {
                        // repeat timed out
                        control.raiseEvent(
                            MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                            activeCommand
                        );
                        activeCommand = IR_INCOMPLETE;
                    } else {
                        basic.pause(REPEAT_TIMEOUT_MS);
                    }
                }
            }
        });
    }

    /**
     * Do something when a specific button is pressed or released on the remote control.
     * @param button the button to be checked
     * @param action the trigger action
     * @param handler body code to run when event is raised
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_on_ir_button weight=13 blockGap=30
    //% block="on IR button | %button | %action"
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function onIrButton(button: IrButton, action: IrButtonAction, handler: () => void) {
        control.onEvent(
            action === IrButtonAction.Pressed
                ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID
                : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
            button === IrButton.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
            () => {
                irState.command = control.eventValue();
                handler();
            }
        );
    }

    /**
     * Returns the code of the IR button that was pressed last. Returns -1 (IrButton.Any) if no button has been pressed yet.
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_ir_button_pressed weight=10 blockGap=30
    //% block="IR button"
    export function irButton(): number {
        if (!irState) {
            return IrButton.Any;
        }
        return irState.command;
    }

    /**
     * Returns true if any button was pressed since the last call of this function. False otherwise.
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_was_any_button_pressed weight=7 blockGap=30
    //% block="any IR button was pressed"
    export function wasAnyIrButtonPressed(): boolean {
        if (!irState) {
            return false;
        }
        if (irState.hasNewCommand) {
            irState.hasNewCommand = false;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Returns the command code of a specific IR button.
     * @param button the button
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_button_code weight=5 blockGap=30
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    //% block="IR button code %button"
    export function irButtonCode(button: IrButton): number {
        return button as number;
    }

    /**
     * Do something when a specific button is pressed or released on the remote control.
     * @param button the button to be checked
     * @param action the trigger action
     * @param handler body code to run when event is raised
     */
    //% subcategory="IR_Receiver"
    //% group="Handle-type_IR_Control"
    //% blockId=YFSENSORS_infrared_on_ir_button_handle weight=30 blockGap=30
    //% block="on IR button | %button | %action"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function onIrButton_Handle(button: IrButton_Handle, action: IrButtonAction, handler: () => void) {
        control.onEvent(
            action === IrButtonAction.Pressed ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
            button === IrButton_Handle.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
            () => {
                irState.command = control.eventValue();
                handler();
            }
        );
    }

    /**
     * Returns the command code of a specific Handle Type IR button.
     * @param button the button
     */
    //% subcategory="IR_Receiver"
    //% group="Handle-type_IR_Control"
    //% blockId=YFSENSORS_infrared_button_code_handle weight=2 blockGap=30
    //% block="Handle Type IR button code %button"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function irButtonCode_Handle(button: IrButton_Handle): number {
        return button as number;
    }
    /////////////////////// IR ///////////////////////
}
