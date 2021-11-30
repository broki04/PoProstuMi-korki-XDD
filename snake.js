var snakeCore = ["\x2E\x63\x61\x6E\x76\x61\x73", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x68\x65\x69\x67\x68\x74", "\x77\x69\x64\x74\x68", "\x78", "\x79", "\x78\x53\x70\x65\x65\x64", "\x79\x53\x70\x65\x65\x64", "\x74\x6F\x74\x61\x6C", "\x4F\x62\x6B\x74\x4F\x67\x6E", "\x64\x72\x61\x77", "\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65", "\x23\x30\x30\x66\x66\x66\x66", "\x6C\x65\x6E\x67\x74\x68", "\x66\x69\x6C\x6C\x52\x65\x63\x74", "\x75\x70\x64\x61\x74\x65", "\x63\x64", "\x55\x70", "\x44\x6F\x77\x6E", "\x4C\x65\x66\x74", "\x52\x69\x67\x68\x74", "\x6A\x64\x7A", "\x63\x68\x6B\x43\x6C\x6C\x73\x6E", "\x70\x63\x6B\x4C\x63\x74", "\x72\x61\x6E\x64\x6F\x6D", "\x66\x6C\x6F\x6F\x72", "\x23\x66\x66\x30\x30\x30\x30", "\x63\x6C\x65\x61\x72\x52\x65\x63\x74", "\x69\x6E\x6E\x65\x72\x54\x65\x78\x74", "\x2E\x73\x63\x6F\x72\x65", "\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C", "\x6B\x65\x79\x64\x6F\x77\x6E", "\x41\x72\x72\x6F\x77", "", "\x72\x65\x70\x6C\x61\x63\x65", "\x6B\x65\x79", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];
const canvas = document[snakeCore[1]](snakeCore[0]);
const ctx = canvas[snakeCore[3]](snakeCore[2]);
const scale = 10;
const wrs = canvas[snakeCore[4]] / scale;
const klm = canvas[snakeCore[5]] / scale;
var snakeObject;

function snakeObject() {
    this[snakeCore[6]] = this[snakeCore[7]] = this[snakeCore[9]] = this[snakeCore[10]] = 0;
    this[snakeCore[8]] = scale * 1;
    this[snakeCore[11]] = [];

    this[snakeCore[12]] = function () {
        ctx[snakeCore[13]] = snakeCore[14];
        for(let i = 0; i < this[snakeCore[11]][snakeCore[15]]; i++) { ctx[snakeCore[16]](this[snakeCore[11]][i][snakeCore[6]], this[snakeCore[11]][i][snakeCore[7]], scale, scale) };
        ctx[snakeCore[16]](this[snakeCore[6]], this[snakeCore[7]], scale, scale)
    };

    this[snakeCore[17]] = function () {
        for(let i = 0; i < this[snakeCore[11]][snakeCore[15]] - 1; i++) { this[snakeCore[11]][i] = this[snakeCore[11]][i + 1] };
       
        this[snakeCore[11]][this[snakeCore[10]] - 1] = {
            x: this[snakeCore[6]],
            y: this[snakeCore[7]]
        };
        this[snakeCore[6]] += this[snakeCore[8]];
        this[snakeCore[7]] += this[snakeCore[9]];
        
        if(this[snakeCore[6]] > canvas[snakeCore[5]]) this[snakeCore[6]] = 0
        if(this[snakeCore[7]] > canvas[snakeCore[4]]) this[snakeCore[7]] = 0
        if(this[snakeCore[6]] < 0) this[snakeCore[6]] = canvas[snakeCore[5]]
        if(this[snakeCore[7]] < 0) this[snakeCore[7]] = canvas[snakeCore[4]]
    };
    this[snakeCore[18]] = function (id) {
        switch (id) {
            case snakeCore[19]:
                this[snakeCore[8]] = 0;
                this[snakeCore[9]] = -scale * 1;
                break;
            case snakeCore[20]:
                this[snakeCore[8]] = 0;
                this[snakeCore[9]] = scale * 1;
                break;
            case snakeCore[21]:
                this[snakeCore[8]] = -scale * 1;
                this[snakeCore[9]] = 0;
                break;
            case snakeCore[22]:
                this[snakeCore[8]] = scale * 1;
                this[snakeCore[9]] = 0;
                break
        }
    };
    this[snakeCore[23]] = function (snakeTarget) {
        if (this[snakeCore[6]] === snakeTarget[snakeCore[6]] && this[snakeCore[7]] === snakeTarget[snakeCore[7]]) {
            this[snakeCore[10]]++;
            return true
        };
        return false
    };
    this[snakeCore[24]] = function () {
        for (var i = 0; i < this[snakeCore[11]][snakeCore[15]]; i++) {
            if (this[snakeCore[6]] === this[snakeCore[11]][i][snakeCore[6]] && this[snakeCore[7]] === this[snakeCore[11]][i][snakeCore[7]]) {
                this[snakeCore[10]] = 0;
                this[snakeCore[11]] = []
            }
        }
    }
}

function snakeTarget() {
    this[snakeCore[6]];
    this[snakeCore[7]];
    this[snakeCore[25]] = function () {
        this[snakeCore[6]] = (Math[snakeCore[27]](Math[snakeCore[26]]() * klm - 1) + 1) * scale;
        this[snakeCore[7]] = (Math[snakeCore[27]](Math[snakeCore[26]]() * wrs - 1) + 1) * scale
    };
    this[snakeCore[12]] = function () {
        ctx[snakeCore[13]] = snakeCore[28];
        ctx[snakeCore[16]](this[snakeCore[6]], this[snakeCore[7]], scale, scale)
    }
} (function setup() {
    snakeObject = new snakeObject();
    snakeTarget = new snakeTarget();
    snakeTarget[snakeCore[25]]();
    
    window[snakeCore[32]](() => {
        ctx[snakeCore[29]](0, 0, canvas[snakeCore[5]], canvas[snakeCore[4]]);
        snakeTarget[snakeCore[12]]();
        snakeObject[snakeCore[17]]();
        snakeObject[snakeCore[12]]();
        if (snakeObject[snakeCore[23]](snakeTarget)) {
            snakeTarget[snakeCore[25]]()
        };
        snakeObject[snakeCore[24]]();
        document[snakeCore[1]](snakeCore[31])[snakeCore[30]] = snakeObject[snakeCore[10]]
    }, 250)
}());

window[snakeCore[38]](snakeCore[33], ((i) => {
    const id = i[snakeCore[37]][snakeCore[36]](snakeCore[34], snakeCore[35]);
    snakeObject[snakeCore[18]](id)
}))