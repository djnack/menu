function StringMoreHeader(string = '') {

    const width = window.screen.width / 12;
    const len = string.length
    if (len > width) {
        return string.slice(0, width-4) + ' ...';
    }
    return string;
}

export default StringMoreHeader;