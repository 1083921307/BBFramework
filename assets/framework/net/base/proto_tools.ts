export default class proto_tools{
    public static header_size: number =  10;

	// cmd_buf dataview
    public static read_int8(cmd_buf, offset) {
        // return cmd_buf.readInt8(offset);
        return cmd_buf.getInt8(offset);
    }

    public static write_int8(cmd_buf, offset, value) {
        // cmd_buf.writeInt8(value, offset);
        cmd_buf.setInt8(offset, value);
    }

    public static read_int16(cmd_buf, offset) {
        return cmd_buf.getInt16(offset, true);
    }

    public static write_int16(cmd_buf, offset, value) {
        // cmd_buf.writeInt16LE(value, offset);
        cmd_buf.setInt16(offset, value, true);
    }

    public static read_int32(cmd_buf, offset) {
        // return cmd_buf.readInt32LE(offset);
        return cmd_buf.getInt32(offset, true);
    }

    public static write_int32(cmd_buf, offset, value) {
        // cmd_buf.writeInt32LE(value, offset);
        cmd_buf.setInt32(offset, value, true);
    }

    public static read_uint32(cmd_buf, offset) {
        return cmd_buf.getUint32(offset, true);
    }

    public static write_uint32(cmd_buf, offset, value) {
        cmd_buf.setUint32(offset, value, true);
    }

    public static read_str(cmd_buf, offset, byte_len) {
        // return cmd_buf.toString("utf8", offset, offset + byte_len);
        return cmd_buf.read_utf8(offset, byte_len);
    }

    public static write_str(cmd_buf, offset, str) {
        // cmd_buf.write(str, offset);
        cmd_buf.write_utf8(offset, str);
    }

    public static read_float(cmd_buf, offset) {
        // return cmd_buf.readFloatLE(offset);
        return cmd_buf.getFloat32(offset, true);
    }

    public static write_float(cmd_buf, offset, value) {
        // cmd_buf.writeFloatLE(value, offset);
        cmd_buf.setFloat32(offset, value, true);
    }

    public static alloc_buffer(total_len) {
        // return Buffer.allocUnsafe(total_len);
        var buf = new ArrayBuffer(total_len);
        var dataview = new DataView(buf);

        return dataview;
    }

    public static write_cmd_header_inbuf(cmd_buf, stype, ctype) {
        this.write_int16(cmd_buf, 0, stype);
        this.write_int16(cmd_buf, 2, ctype);
        this.write_uint32(cmd_buf, 4, 0);
        return this.header_size;
    }

    public static write_prototype_inbuf(cmd_buf, proto_type) {
        this.write_int16(cmd_buf, 8, proto_type);
    }

    public static write_str_inbuf(cmd_buf, offset, str, byte_len) {
        // 写入2个字节字符串长度信息;
        this.write_int16(cmd_buf, offset, byte_len);
        offset += 2;

        this.write_str(cmd_buf, offset, str);
        offset += byte_len;

        return offset;
    }

    // 返回 str, offset
    public static read_str_inbuf(cmd_buf, offset) {
        var byte_len = this.read_int16(cmd_buf, offset);
        offset += 2;
        var str = this.read_str(cmd_buf, offset, byte_len);
        offset += byte_len;

        return [str, offset];
    }

    public static decode_empty_cmd(cmd_buf) {
        var cmd = {};
        cmd[0] = this.read_int16(cmd_buf, 0);
        cmd[1] = this.read_int16(cmd_buf, 2);
        cmd[2] = null;
        return cmd;
    }

    public static encode_empty_cmd(stype, ctype, body) {
        var cmd_buf = this.alloc_buffer(this.header_size);
        this.write_cmd_header_inbuf(cmd_buf, stype, ctype);
        return cmd_buf;
    }

    public static encode_status_cmd(stype, ctype, status) {
        var cmd_buf = this.alloc_buffer(this.header_size + 2);
        this.write_cmd_header_inbuf(cmd_buf, stype, ctype);
        this.write_int16(cmd_buf, this.header_size, status);
        return cmd_buf;
    }

    public static decode_status_cmd(cmd_buf) {
        var cmd = {};
        cmd[0] = this.read_int16(cmd_buf, 0);
        cmd[1] = this.read_int16(cmd_buf, 2);
        cmd[2] = this.read_int16(cmd_buf, this.header_size);

        return cmd;
    }

    public static encode_str_cmd(stype, ctype, str) {
        var byte_len = str.utf8_byte_len();
        var total_len = this.header_size + 2 + byte_len;
        var cmd_buf = this.alloc_buffer(total_len);
        var offset = this.write_cmd_header_inbuf(cmd_buf, stype, ctype);
        offset = this.write_str_inbuf(cmd_buf, offset, str, byte_len);
        return cmd_buf;
    }

    public static decode_str_cmd(cmd_buf) {
        var cmd = {};
        cmd[0] = this.read_int16(cmd_buf, 0);
        cmd[1] = this.read_int16(cmd_buf, 2);
        var ret = this.read_str_inbuf(cmd_buf, this.header_size);
        cmd[2] = ret[0];
        return cmd;
    }
}

