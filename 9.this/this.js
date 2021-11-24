console.log(this)

function sample(){
    console.log(this)
}

sample()

var b = function(){
    console.log(this)
}
b()

function a(){
    console.log(this)
    this.aSimpleVaribale = "Hello"
}
a()
console.log(aSimpleVaribale)

var obj = {
    name: 'uma',
    log: function(){
        var self = this; // Workaround
        console.log(self)
        self.name = "mahesh"
        console.log(self)

        var setName = function(){
            self.name = "umesh"
        }

        setName()
        console.log(self)
    }
}

console.log(obj.log())