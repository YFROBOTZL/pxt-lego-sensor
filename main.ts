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

    /************************* IR *************************/
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
    /************************* IR *************************/
    
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
    
    /*************************  Output - OTP Fixed voice list  *************************/
    export enum OTPFixedVoiceList {
        //% blockId="YFDOM_OTPFVL_00" block="老师"
        OTPFVL_00 = 0x00,
        //% blockId="YFDOM_OTPFVL_01" block="爸爸"
        OTPFVL_01 = 0x01,
        //% blockId="YFDOM_OTPFVL_02" block="妈妈"
        OTPFVL_02 = 0x02,
        //% blockId="YFDOM_OTPFVL_03" block="爷爷"
        OTPFVL_03 = 0x03,
        //% blockId="YFDOM_OTPFVL_04" block="奶奶"
        OTPFVL_04 = 0x04,
        //% blockId="YFDOM_OTPFVL_05" block="姥姥"
        OTPFVL_05 = 0x05,
        //% blockId="YFDOM_OTPFVL_06" block="姥爷"
        OTPFVL_06 = 0x06,
        //% blockId="YFDOM_OTPFVL_07" block="哥哥"
        OTPFVL_07 = 0x07,
        //% blockId="YFDOM_OTPFVL_08" block="姐姐"
        OTPFVL_08 = 0x08,
        //% blockId="YFDOM_OTPFVL_09" block="叔叔"
        OTPFVL_09 = 0x09,
        //% blockId="YFDOM_OTPFVL_0A" block="阿姨"
        OTPFVL_0A = 0x0A,
        //% blockId="YFDOM_OTPFVL_0B" block="上午"
        OTPFVL_0B = 0x0B,
        //% blockId="YFDOM_OTPFVL_0C" block="下午"
        OTPFVL_0C = 0x0C,
        //% blockId="YFDOM_OTPFVL_0D" block="晚上"
        OTPFVL_0D = 0x0D,
        //% blockId="YFDOM_OTPFVL_0E" block="前方""
        OTPFVL_0E = 0x0E,
        //% blockId="YFDOM_OTPFVL_0F" block="厘米"
        OTPFVL_0F = 0x0F,
        //% blockId="YFDOM_OTPFVL_10" block="新年快乐"
        OTPFVL_10 = 0x10,
        //% blockId="YFDOM_OTPFVL_11" block="身体健康"
        OTPFVL_11 = 0x11,
        //% blockId="YFDOM_OTPFVL_12" block="工作顺利"
        OTPFVL_12 = 0x12,
        //% blockId="YFDOM_OTPFVL_13" block="学习进步"
        OTPFVL_13 = 0x13,
        //% blockId="YFDOM_OTPFVL_14" block="您好"
        OTPFVL_14 = 0x14,
        //% blockId="YFDOM_OTPFVL_15" block="谢谢"
        OTPFVL_15 = 0x15,
        //% blockId="YFDOM_OTPFVL_16" block="的"
        OTPFVL_16 = 0x16,
        //% blockId="YFDOM_OTPFVL_17" block="祝"
        OTPFVL_17 = 0x17,
        //% blockId="YFDOM_OTPFVL_18" block="慢走"
        OTPFVL_18 = 0x18,
        //% blockId="YFDOM_OTPFVL_19" block="欢迎光临"
        OTPFVL_19 = 0x19,
        //% blockId="YFDOM_OTPFVL_1A" block="亲爱的""
        OTPFVL_1A = 0x1A,
        //% blockId="YFDOM_OTPFVL_1B" block="同学们"
        OTPFVL_1B = 0x1B,
        //% blockId="YFDOM_OTPFVL_1C" block="工作辛苦了"
        OTPFVL_1C = 0x1C,
        //% blockId="YFDOM_OTPFVL_1D" block="点"
        OTPFVL_1D = 0x1D,
        //% blockId="YFDOM_OTPFVL_1E" block="打开"
        OTPFVL_1E = 0x1E,
        //% blockId="YFDOM_OTPFVL_1F" block="关闭"
        OTPFVL_1F = 0x1F,
        //% blockId="YFDOM_OTPFVL_20" block="千"
        OTPFVL_20 = 0x20,
        //% blockId="YFDOM_OTPFVL_21" block="百"
        OTPFVL_21 = 0x21,
        //% blockId="YFDOM_OTPFVL_22" block="十/时"
        OTPFVL_22 = 0x22,
        //% blockId="YFDOM_OTPFVL_23" block="1"
        OTPFVL_23 = 0x23,
        //% blockId="YFDOM_OTPFVL_24" block="2"
        OTPFVL_24 = 0x24,
        //% blockId="YFDOM_OTPFVL_25" block="3"
        OTPFVL_25 = 0x25,
        //% blockId="YFDOM_OTPFVL_26" block="4"
        OTPFVL_26 = 0x26,
        //% blockId="YFDOM_OTPFVL_27" block="5"
        OTPFVL_27 = 0x27,
        //% blockId="YFDOM_OTPFVL_28" block="6"
        OTPFVL_28 = 0x28,
        //% blockId="YFDOM_OTPFVL_29" block="7"
        OTPFVL_29 = 0x29,
        //% blockId="YFDOM_OTPFVL_2A" block="8"
        OTPFVL_2A = 0x2A,
        //% blockId="YFDOM_OTPFVL_2B" block="9"
        OTPFVL_2B = 0x2B,
        //% blockId="YFDOM_OTPFVL_2C" block="0"
        OTPFVL_2C = 0x2C,
        //% blockId="YFDOM_OTPFVL_2D" block="当前"
        OTPFVL_2D = 0x2D,
        //% blockId="YFDOM_OTPFVL_2E" block="转"
        OTPFVL_2E = 0x2E,
        //% blockId="YFDOM_OTPFVL_2F" block="左"
        OTPFVL_2F = 0x2F,
        //% blockId="YFDOM_OTPFVL_30" block="右"
        OTPFVL_30 = 0x30,
        //% blockId="YFDOM_OTPFVL_31" block="请"
        OTPFVL_31 = 0x31,
        //% blockId="YFDOM_OTPFVL_32" block="已"
        OTPFVL_32 = 0x32,
        //% blockId="YFDOM_OTPFVL_33" block="现在"
        OTPFVL_33 = 0x33,
        //% blockId="YFDOM_OTPFVL_34" block="是"
        OTPFVL_34 = 0x34,
        //% blockId="YFDOM_OTPFVL_35" block="红灯"
        OTPFVL_35 = 0x35,
        //% blockId="YFDOM_OTPFVL_36" block="绿灯"
        OTPFVL_36 = 0x36,
        //% blockId="YFDOM_OTPFVL_37" block="黄灯"
        OTPFVL_37 = 0x37,
        //% blockId="YFDOM_OTPFVL_38" block="温度"
        OTPFVL_38 = 0x38,
        //% blockId="YFDOM_OTPFVL_39" block="湿度"
        OTPFVL_39 = 0x39,
        //% blockId="YFDOM_OTPFVL_3A" block="欢迎常来"
        OTPFVL_3A = 0x3A,
        //% blockId="YFDOM_OTPFVL_3B" block="还有"
        OTPFVL_3B = 0x3B,
        //% blockId="YFDOM_OTPFVL_3C" block="秒"
        OTPFVL_3C = 0x3C,
        //% blockId="YFDOM_OTPFVL_3D" block="分"
        OTPFVL_3D = 0x3D,
        //% blockId="YFDOM_OTPFVL_3E" block="变"
        OTPFVL_3E = 0x3E,
        //% blockId="YFDOM_OTPFVL_3F" block="等"
        OTPFVL_3F = 0x3F,
        //% blockId="YFDOM_OTPFVL_40" block="下一次"
        OTPFVL_40 = 0x40,
        //% blockId="YFDOM_OTPFVL_41" block="功能"
        OTPFVL_41 = 0x41,
        //% blockId="YFDOM_OTPFVL_42" block="障碍物"
        OTPFVL_42 = 0x42,
        //% blockId="YFDOM_OTPFVL_43" block="世界那么大，我想去看看"
        OTPFVL_43 = 0x43,
    }

    enum Melodies {
        //% block="dadadum" blockIdentity=music.builtInMelody
        Dadadadum = 0,
        //% block="entertainer" blockIdentity=music.builtInMelody
        Entertainer,
        //% block="prelude" blockIdentity=music.builtInMelody
        Prelude,
        //% block="ode" blockIdentity=music.builtInMelody
        Ode,
        //% block="nyan" blockIdentity=music.builtInMelody
        Nyan,
        //% block="ringtone" blockIdentity=music.builtInMelody
        Ringtone,
        //% block="funk" blockIdentity=music.builtInMelody
        Funk,
        //% block="blues" blockIdentity=music.builtInMelody
        Blues,
        //% block="birthday" blockIdentity=music.builtInMelody
        Birthday,
        //% block="wedding" blockIdentity=music.builtInMelody
        Wedding,
        //% block="funeral" blockIdentity=music.builtInMelody
        Funeral,
        //% block="punchline" blockIdentity=music.builtInMelody
        Punchline,
        //% block="baddy" blockIdentity=music.builtInMelody
        Baddy,
        //% block="chase" blockIdentity=music.builtInMelody
        Chase,
        //% block="ba ding" blockIdentity=music.builtInMelody
        BaDing,
        //% block="wawawawaa" blockIdentity=music.builtInMelody
        Wawawawaa,
        //% block="jump up" blockIdentity=music.builtInMelody
        JumpUp,
        //% block="jump down" blockIdentity=music.builtInMelody
        JumpDown,
        //% block="power up" blockIdentity=music.builtInMelody
        PowerUp,
        //% block="power down" blockIdentity=music.builtInMelody
        PowerDown,
    }
    
    /*************************  Output - MP3 audio playback module  *************************/
    export enum AudioPlaybackFun {
        //% blockId="YFAPF_AllTurnOFF" block="ALL turn off"
        AllTurnOFF = 0x00,
        //% blockId="YFAPF_RedLED" block="Light red led"
        RedLED = 0x01,
        //% blockId="YFAPF_YellowLED" block="Light yellow led"
        YellowLED = 0x02,
        //% blockId="YFAPF_GreenLED" block="Light green led"
        GreenLED = 0x03,
    }
    
    /*************************  Output - Traffic Light LED Mode *************************/
    export enum TrafficLightLED {
        //% blockId="YFTLL_AllTurnOFF" block="ALL turn off"
        AllTurnOFF = 0x00,
        //% blockId="YFTLL_RedLED" block="Light red led"
        RedLED = 0x01,
        //% blockId="YFTLL_YellowLED" block="Light yellow led"
        YellowLED = 0x02,
        //% blockId="YFTLL_GreenLED" block="Light green led"
        GreenLED = 0x03,
    }

    export enum AnalogInputModule {
        //% blockId="YFAIM_LIGHT" block="LIGHT"
        LIGHT = 0x0,
        //% blockId="YFAIM_SOUND" block="SOUND"
        SOUND = 0x1,
        //% blockId="YFAIM_POTENTIOMETER" block="POTENTIOMETER"
        POTENTIOMETER = 0x2,
        //% blockId="YFAIM_SOIL_HUMIDITY" block="SOIL_HUMIDITY"
        SOIL_HUMIDITY = 0x3,
        //% blockId="YFAIM_ROCKER_X" block="ROCKER_X"
        ROCKER_X = 0x4,
        //% blockId="YFAIM_ROCKER_Y" block="ROCKER_Y"
        ROCKER_Y = 0x5,
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
        //% blockId="YFDIM_PATROL_LEFT" block="PATROL_LEFT"
        PATROL_LEFT = 0x08,
        //% blockId="YFDIM_PATROL_RIGHT" block="PATROL_RIGHT"
        PATROL_RIGHT = 0x09,
    }

    export enum DigitalInputModuleE {
        //% blockId="YFDIM_BUTTON" block="BUTTON"
        BUTTON = 0x0,
        //% blockId="YFDIM_COLLISION_SWITCH" block="COLLISION_SWITCH"
        COLLISION_SWITCH = 0x1,
    }

    /** An action on a touch button */
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

    export enum DHT11_state {
        //% block="temperature(℃)" enumval=0
        DHT11_temperature_C,
        //% block="humidity(0~100%)" enumval=1
        DHT11_humidity,
    }

    /*************************  *************************/



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
    * toggle  Turn the Digital Output Module ON or OFF.
    * @param adom module. eg: ADOutputModule.LED
    * @param adomPin pin. eg: AnalogPin.P1
    * @param state switch state. eg: SwitchState.OFF
    * @param percentage brightness of LED, Motor vibration strength, fan rotation speed.
    */
    //% group="Output"
    //% blockId=YFSENSORS_readInfraredSensor weight=100 blockGap=15
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
    //% blockId=YFSENSORS_digitalOutputModule weight=99 blockGap=15
    //% block="at pin %domPin| %dom| module %sws"
    //% domPin.fieldEditor="gridpicker" domPin.fieldOptions.columns=4
    //% dom.fieldEditor="gridpicker" dom.fieldOptions.columns=2
    //% sws.fieldEditor="gridpicker" sws.fieldOptions.columns=2
    export function digitalOutputModule(domPin: DigitalPin, dom: DigitalOutputModule, sws: SwitchState): void {
        let domM = dom;  // no work
        pins.digitalWritePin(domPin, sws);
    }

    ///////////////////// Output - OTP Fixed voice broadcast module ///////////////////////
    /**
     * Returns the serial number of OTP fixed voice list.
     * @param num Standard RGB Led Colours eg: #ff0000
     */
    //% group="Output"
    //% blockId=YFSENSORS_OTPFixedVoiceListNum weight=94 blockGap=15
    //% block="%num"
    //% num.fieldEditor="gridpicker" num.fieldOptions.columns=10
    export function OTPFixedVoiceListNum(num: OTPFixedVoiceList): number {
        return num;
    }

    /**
      * Get numeric value of colour
      * @param color Standard RGB Led Colours eg: #ff0000
      */
    //% group="Output"
    //% blockId="YFSENSORS_bb_colours" weight=93 blockGap=15
    //% block=%color
    //% shim=TD_ID colorSecondary="#e7660b"
    //% color.fieldEditor="colornumber"
    //% color.fieldOptions.decompileLiterals=true
    //% color.defl='#ff0000'
    //% color.fieldOptions.colours='["#FF0000","#659900","#18E600","#80FF00","#00FF00","#FF8000","#D82600","#B24C00","#00FFC0","#00FF80","#FFC000","#FF0080","#FF00FF","#B09EFF","#00FFFF","#FFFF00","#8000FF","#0080FF","#0000FF","#FFFFFF","#FF8080","#80FF80","#40C0FF","#999999","#000000"]'
    //% color.fieldOptions.columns=5
    //% color.fieldOptions.className='rgbColorPicker'
    export function BBColours(color: number): number
    {
        return color;
    }

    /**
     * Fixed voice broadcast module play.
     * @param vbmPin pin. eg: DigitalPin.P2
     * @param serial_number voice serial number. eg: 0
     * @param delayt delay time. eg: 1000
     */
    //% group="Output"
    //% blockId=YFSENSORS_voiceBroadcastModule weight=95 blockGap=15
    //% block="voice broadcast %vbmPin| play %serial_number| delay %delayt| ms"
    //% vbmPin.fieldEditor="gridpicker" vbmPin.fieldOptions.columns=4
    //% serial_number.fieldEditor="gridpicker" serial_number.fieldOptions.columns=10
    export function voiceBroadcastModule(vbmPin: DigitalPin, serial_number: number, delayt: number): void {
        pins.digitalWritePin(vbmPin, 0); 
        basic.pause(3);
        for (let index = 0; index < 8; index++) {
            pins.digitalWritePin(vbmPin, 1); 
            if(serial_number & 1){
                control.waitMicros(2400);
                pins.digitalWritePin(vbmPin, 0);
                control.waitMicros(800);
            } else {
                control.waitMicros(800);
                pins.digitalWritePin(vbmPin, 0);
                control.waitMicros(2400);
            } 
            serial_number >>= 1;
        }
        pins.digitalWritePin(vbmPin, 1); 

        basic.pause(delayt);
    }

    
    ///////////////////// Output - MP3 audio playback module ///////////////////////

    let AudioPlaybackPin_data = DigitalPin.P2;
    let AudioPlaybackPin_busy = DigitalPin.P1;

    /**
     * Connects to the MP3 audio playback module at the specified pin.
     * @param pin_data data pin. eg: DigitalPin.P2
     * @param pin_busy busy pin. eg: DigitalPin.P1
     */
    //% group="Output"
    //% blockId="YFSENSORS_audioPlaybackModule_connectPin" weight=90 blockGap=15
    //% block="connect MP3 audio playback module at %pin_data and %pin_busy"
    //% pin_data.fieldEditor="gridpicker" pin_data.fieldOptions.columns=4 pin_data.fieldOptions.tooltips="false"
    //% pin_busy.fieldEditor="gridpicker" pin_busy.fieldOptions.columns=4 pin_busy.fieldOptions.tooltips="false"
    export function audioPlaybackModule_connectPin(pin_data: DigitalPin, pin_busy: DigitalPin): void {
        AudioPlaybackPin_data = pin_data;
        AudioPlaybackPin_busy = pin_busy;
    }

    /**
     * MP3 audio playback module play specified track.
     * @param num number. eg: 0
     */
    //% group="Output"
    //% blockId=YFSENSORS_audioPlaybackModule_sendData weight=88 blockGap=15
    //% block="audio playback play %specified_track| delay %delayt| ms"
    function audioPlaybackModule_sendData(specified_track: number): void {
        pins.digitalWritePin(AudioPlaybackPin_data, 1); 
        basic.pause(1);
        pins.digitalWritePin(AudioPlaybackPin_data, 0); 
        basic.pause(3);
        for (let index = 0; index < 8; index++) {
            pins.digitalWritePin(AudioPlaybackPin_data, 1); 
            if(specified_track & 1){
                control.waitMicros(1200);
                pins.digitalWritePin(AudioPlaybackPin_data, 0);
                control.waitMicros(400);
            } else {
                control.waitMicros(400);
                pins.digitalWritePin(AudioPlaybackPin_data, 0);
                control.waitMicros(1200);
            } 
            specified_track >>= 1;
        }
        pins.digitalWritePin(AudioPlaybackPin_data, 1); 
    }

    /**
     * MP3 audio playback module play specified track.
     * @param specified_fun mp3 module specified function. eg: 0
     */
    //% group="Output"
    //% blockId=YFSENSORS_audioPlaybackModule weight=86 blockGap=15
    //% block="audio playback play %specified_fun| delay %delayt| ms"
    //% specified_fun.fieldEditor="gridpicker" specified_fun.fieldOptions.columns=10
    export function audioPlaybackModule(specified_fun: number): void {
        let s_fun = specified_fun;
        YFSENSORS.audioPlaybackModule_sendData(specified_fun);
        pins.digitalWritePin(AudioPlaybackPin_data, 1); 
        basic.pause(1);
        pins.digitalWritePin(AudioPlaybackPin_data, 0); 
        basic.pause(3);
        for (let index = 0; index < 8; index++) {
            pins.digitalWritePin(AudioPlaybackPin_data, 1); 
            if(specified_track & 1){
                control.waitMicros(1200);
                pins.digitalWritePin(AudioPlaybackPin_data, 0);
                control.waitMicros(400);
            } else {
                control.waitMicros(400);
                pins.digitalWritePin(AudioPlaybackPin_data, 0);
                control.waitMicros(1200);
            } 
            specified_track >>= 1;
        }
        pins.digitalWritePin(AudioPlaybackPin_data, 1); 
    }

    ///////////////////// Output - Traffic Light module ///////////////////////
    /**
     * Traffic Light module light up red, green or yellow led.
     * @param tlm1Pin pin 1. eg: DigitalPin.P1
     * @param tlm2Pin pin 2. eg: DigitalPin.P2
     * @param wColor which color led. eg: TrafficLightLED.AllTurnOFF
     */
    //% group="Output"
    //% blockId=YFSENSORS_trafficLightModule weight=80 blockGap=15
    //% block="traffic light %tlm1Pin| %tlm2Pin| %wColor"
    //% tlm1Pin.fieldEditor="gridpicker" tlm1Pin.fieldOptions.columns=4
    //% tlm2Pin.fieldEditor="gridpicker" tlm2Pin.fieldOptions.columns=4
    //% wColor.fieldEditor="gridpicker" wColor.fieldOptions.columns=2
    export function trafficLightModule(tlm1Pin: DigitalPin, tlm2Pin: DigitalPin, wColor: TrafficLightLED): void {
        switch (wColor) {
            case TrafficLightLED.RedLED:            // Red LED
                pins.digitalWritePin(tlm1Pin, 0);
                pins.digitalWritePin(tlm2Pin, 1);
                break;
            case TrafficLightLED.YellowLED:         // Yellow LED
                pins.digitalWritePin(tlm1Pin, 1);
                pins.digitalWritePin(tlm2Pin, 0);
                break;
            case TrafficLightLED.GreenLED:          // Green LED
                pins.digitalWritePin(tlm1Pin, 1);
                pins.digitalWritePin(tlm2Pin, 2);
                break;
            default: // TrafficLightLED.AllTurnOFF: // all lights turn off
                pins.digitalWritePin(tlm1Pin, 0);
                pins.digitalWritePin(tlm2Pin, 0);
                break;
        }
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
    //% blockId=YFSENSORS_MotorRun weight=11 blockGap=15
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
    //% blockId=YFSENSORS_motorStop weight=10 blockGap=15
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
    //% group="Input"
    //% blockId=YFSENSORS_analogInputModule weight=100 blockGap=15
    //% block="at pin %aimPin| %aim| module"
    //% aimPin.fieldEditor="gridpicker" aimPin.fieldOptions.columns=4
    //% aim.fieldEditor="gridpicker" aim.fieldOptions.columns=2
    export function analogInputModule(aimPin: AnalogPin, aim: AnalogInputModule): number {
        let aimM = aim;  // no work
        return pins.analogReadPin(aimPin);
    }

    /**
     * Read the Temperature Sensor Module.
     * @param tempPin pin. eg: AnalogPin.P1
     */
    //% group="Input"
    //% blockId=YFSENSORS_readTemperatureSensor weight=95 blockGap=15
    //% block="temperature sensor %tempPin| temperature value"
    //% tempPin.fieldEditor="gridpicker" tempPin.fieldOptions.columns=4
    export function readTemperatureSensor(tempPin: AnalogPin): number {
        let val = pins.analogReadPin(tempPin); 
        let tvalue = (val * 3.3 * 100) / 1024;
        return tvalue;
    }

    ///////////////////// Input Digital Sensors ///////////////////////
    /**
     * Read the Digital Input Sensor Module.
     * @param dimPin pin. eg: DigitalPin.P8
     * @param dim pin. eg: DigitalInputModule.BUTTON
     */
    //% group="Input"
    //% blockId=YFSENSORS_digitalInputModule weight=90 blockGap=15
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
     * @param dimE module. eg: DigitalInputModuleE.BUTTON
     * @param dimEPin pin. eg: DigitalPin.P2
     * @param event event. eg: DigitalInputEvent.Clicked
	 */
    //% group="Input"
    //% blockId=YFSENSORS_onevent weight=89 blockGap=15
    //% block="%dimE on %dimEPin| %event"
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
    
    ///////////////////// Input DHT11 Sensors ///////////////////////
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param pin pin. eg: DigitalPin.P2
     * @param dht11state echo pin. eg: DHT11_state.DHT11_temperature_C
     */
    //% blockId=YFSENSORS_read_dht11
    //% block="DHT11 sensor %pin %dht11state value" weight=82 blockGap=15
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% dht11state.fieldEditor="gridpicker" dht11state.fieldOptions.columns=1
    //% inlineInputMode=inline
    export function dht11Sensor(pin: DigitalPin, dht11state: DHT11_state): number {
        //initialize
        basic.pause(1000)
        let _temperature: number = -999.0
        let _humidity: number = -999.0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        //let pin = DigitalPin.P1
        //pin = RJpin_to_digital(Rjpin)
        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)

        pins.setPull(pin, PinPullMode.PullUp)
        pins.digitalWritePin(pin, 0) //begin protocol, pull down pin
        basic.pause(18)
        pins.digitalReadPin(pin) //pull up pin
        control.waitMicros(40)
        while (pins.digitalReadPin(pin) == 0); //sensor response
        while (pins.digitalReadPin(pin) == 1); //sensor response

        //read data (5 bytes)
        for (let index = 0; index < 40; index++) {
            while (pins.digitalReadPin(pin) == 1);
            while (pins.digitalReadPin(pin) == 0);
            control.waitMicros(28)
            //if sensor still pull up data pin after 28 us it means 1, otherwise 0
            if (pins.digitalReadPin(pin) == 1) dataArray[index] = true
        }
        //convert byte number array to integer
        for (let index = 0; index < 5; index++)
            for (let index2 = 0; index2 < 8; index2++)
                if (dataArray[8 * index + index2]) resultArray[index] += 2 ** (7 - index2)
        //verify checksum
        checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
        checksum = resultArray[4]
        if (checksumTmp >= 512) checksumTmp -= 512
        if (checksumTmp >= 256) checksumTmp -= 256
        switch (dht11state) {
            case DHT11_state.DHT11_temperature_C:
                _temperature = resultArray[2] + resultArray[3] / 100
                return _temperature
            case DHT11_state.DHT11_humidity:
                _humidity = resultArray[0] + resultArray[1] / 100
                return _humidity
        }
        return 0
    }
    
    ///////////////////// Input Sonar Sensors ///////////////////////
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig trigger pin. eg: DigitalPin.P2
     * @param echo echo pin. eg: DigitalPin.P8
     * @param unit desired conversion unit. eg: PingUnit.Centimeters
     * @param maxCmDistance maximum distance in centimeters (default is 450)
     */
    //% blockId=YFSENSORS_sonar_ping weight=79 blockGap=15
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
    //% blockId="YFSENSORS_infrared_connect_receiver" weight=15 blockGap=15
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
    //% blockId=YFSENSORS_infrared_on_ir_button weight=13 blockGap=15
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
    //% blockId=YFSENSORS_infrared_ir_button_pressed weight=10 blockGap=15
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
    //% blockId=YFSENSORS_infrared_was_any_button_pressed weight=7 blockGap=15
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
    //% blockId=YFSENSORS_infrared_button_code weight=5 blockGap=15
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
    //% blockId=YFSENSORS_infrared_on_ir_button_handle weight=30 blockGap=15
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
    //% blockId=YFSENSORS_infrared_button_code_handle weight=2 blockGap=15
    //% block="Handle Type IR button code %button"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function irButtonCode_Handle(button: IrButton_Handle): number {
        return button as number;
    }
    /////////////////////// IR ///////////////////////
}
