# YFSENSORS
 This is a MakeCode graphics programming extension for YFROBOT's sensors(lego) module.

Support Motorbit, digital tube display module, ultrasonic module, collision switch, cruise sensor, and rocker module. 

支持 
Input Sensors：按键模块、触摸传感器、磁控开关、震动传感器、红外感应器、热释电传感器、碰撞检测开关、角度传感器、温湿度传感器、旋转编码器、超声波测距、巡线模块、温度传感器、声音传感器、电位器模块、环境光传感器、摇杆模块、土壤湿度检测、手势传感器、颜色传感器、陀螺仪传感器、血氧传感器。

Output Sensors：食人鱼模块、有源蜂鸣器、继电器模块、振动模块、风扇模块、数码管显示模块。

[Sensors(lego) To Buy](https://item.taobao.com/item.htm?id=636842099248)

## Basic usage

* Set the direction and speed of YFSENSORS motor

```blocks
 YFSENSORS.motorRun(YFSENSORS.Motors.ML, YFSENSORS.Dir.CW, 120)
 YFSENSORS.motorRun(YFSENSORS.Motors.MR, YFSENSORS.Dir.CCW, 120)
```

* Stop the YFSENSORS motor 

```blocks
YFSENSORS.motorStop(YFSENSORS.Motors.ML)
```

* Move forward

```blocks
YFSENSORS.forward(128)
```

* Move back

```blocks
YFSENSORS.back(128)
```

* Turn left

```blocks
YFSENSORS.turnLeft(128)
```

* Turn right

```blocks
YFSENSORS.turnRight(128)
```

* Read IR sensor value

```blocks
basic.showNumber(YFSENSORS.irButtonCode())
```


## License

MIT

Copyright (c) 2021, YFROBOT  


## Supported targets

* for PXT/microbit
  (The metadata above is needed for package search.)