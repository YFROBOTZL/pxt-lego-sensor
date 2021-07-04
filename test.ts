// tests go here; this will not be compiled when this package is used as a library
basic.forever(function() {
    YFE06.motorRun(YFE06.Motors.MAll, YFE06.Dir.CW, 120)
    basic.pause(500)
    YFE06.motorStop(YFE06.Motors.MAll)
    basic.pause(500)
    YFE06.motorRun(YFE06.Motors.MAll, YFE06.Dir.CCW, 120)
    basic.pause(500)
    YFE06.motorStop(YFE06.Motors.MAll)
    basic.pause(500)
})