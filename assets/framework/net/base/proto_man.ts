import proto_tools from './proto_tools';

export default class proto_man {
    // buf协议的编码/解码管理  stype, ctype --> encoder/decoder
    static decoders = {}; // 保存当前我们buf协议所有的解码函数, stype,ctype --> decoder;
    static encoders = {}; // 保存当前我们buf协议所有的编码函数, stype, ctype --> encoder

    static PROTO_JSON: number = 1; 
    static PROTO_BUF: number = 2;

    // 加密
    static encrypt_cmd(str_of_buf) {
        return str_of_buf;
    }

    // 解密
    static decrypt_cmd(str_of_buf) {
        return str_of_buf;
    }

    static _json_encode(stype, ctype, body) {
        var cmd = {};
        cmd[0] = body;

        var str = JSON.stringify(cmd);

        var cmd_buf = proto_tools.encode_str_cmd(stype, ctype, str);
        return cmd_buf;
    }

    static _json_decode(cmd_buf) {
        var cmd = proto_tools.decode_str_cmd(cmd_buf);
        var cmd_json = cmd[2];
        try {
            var body_set = JSON.parse(cmd_json);
            cmd[2] = body_set[0];
        }
        catch(e) {
            return null;
        }
        if (!cmd || 
            typeof(cmd[0])=="undefined" ||
            typeof(cmd[1])=="undefined" ||
            typeof(cmd[2])=="undefined") {
            return null;
        }
        return cmd;
    } 

    // key, value, stype + ctype -->key: value
    static get_key(stype, ctype) {
        return (stype * 65536 + ctype);
    }

    // 参数1: 协议类型 json, buf协议;
    // 参数2: 服务类型 
    // 参数3: 命令号;
    // 参数4: 发送的数据本地，js对象/js文本，...
    // 返回是一段编码后的数据;
    static encode_cmd(proto_type, stype, ctype, body) {
        var buf = null;
        var dataview;
        if (proto_type == proto_man.PROTO_JSON) {
            dataview = this._json_encode(stype, ctype, body);
        }
        else { // buf协议
            var key = this.get_key(stype, ctype);
            if (!this.encoders[key]) {
                return null;
            }
            // end 
            dataview = this.encoders[key](stype, ctype, body);
        }

        proto_tools.write_prototype_inbuf(dataview, proto_type);
        
        buf = dataview.buffer;
        if (buf) {
            buf = this.encrypt_cmd(buf); // 加密	
        }
        
        return buf;
    }

    // 参数1: 协议类型
    // 参数2: 接手到的数据命令
    // 返回: {0: stype, 1, ctype, 2: body}
    static decode_cmd(proto_type, str_or_buf) {
        str_or_buf = this.decrypt_cmd(str_or_buf); // 解密
        var cmd = null; 
        var dataview = new DataView(str_or_buf);
        if (dataview.byteLength < proto_tools.header_size) {
            return null;
        }

        if (proto_type == proto_man.PROTO_JSON) {
            return this._json_decode(dataview);
        }

        /*if (str_or_buf.length < 4) {
            return null;
        }*/

        
        var stype = proto_tools.read_int16(dataview, 0);
        var ctype = proto_tools.read_int16(dataview, 2);
        var key = this.get_key(stype, ctype);
        
        if (!this.decoders[key]) {
            return null;
        }
        // cmd = decoders[key](str_or_buf);
        cmd = this.decoders[key](dataview);
        return cmd;
    }


    // encode_func(body) return 二进制bufffer对象
    static reg_buf_encoder(stype, ctype, encode_func) {
        var key = this.get_key(stype, ctype);
        if (this.encoders[key]) { // 已经注册过了，是否搞错了
            // log.warn("stype: " + stype + " ctype: " + ctype + "is reged!!!");
        }

        this.encoders[key] = encode_func;
    }

    // decode_func(cmd_buf) return cmd { 0: 服务号, 1: 命令号, 2: body};
    static reg_buf_decoder(stype, ctype, decode_func) {
        var key = this.get_key(stype, ctype);
        if (this.decoders[key]) { // 已经注册过了，是否搞错了
            // log.warn("stype: " + stype + " ctype: " + ctype + "is reged!!!");
        }

        this.decoders[key] = decode_func;
    }
}