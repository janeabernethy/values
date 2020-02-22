
export interface InputtedValues {
    one?: string,
    two?: string,
    three?: string,
    four?: string,
    five?: string,
    six?: string,
    seven?: string,
    eight?: string,
    nine?: string,
    ten?: string,
}

export function updateInputValue(values: InputtedValues, key: string, newValue?: string) {
    switch(key) {
        case "one": values.one = newValue ; break;
        case "two": values.two = newValue; break;
        case "three": values.three = newValue; break;
        case "four": values.four = newValue; break;
        case "five": values.five = newValue; break;
        case "six": values.six = newValue; break;
        case "seven": values.seven = newValue; break;
        case "eight": values.eight = newValue; break;
        case "nine": values.nine = newValue; break;
        case "ten": values.ten = newValue; break;
        default: break;
    }
    return values
}

export function valuesToArray(values: InputtedValues) {
    var arr = new Array();
    if (values.one != null) {
        arr.push(values.one)
    }
    if (values.two != null) {
        arr.push(values.two)
    }
    if (values.three != null) {
        arr.push(values.three)
    }
    if (values.four != null) {
        arr.push(values.four)
    }
    if (values.five != null) {
        arr.push(values.five)
    }
    if (values.six != null) {
        arr.push(values.six)
    }
    if (values.seven != null) {
        arr.push(values.seven)
    }
    if (values.eight != null) {
        arr.push(values.eight)
    }
    if (values.nine != null) {
        arr.push(values.nine)
    }
    if (values.ten != null) {
        arr.push(values.ten)
    }
    return arr
}

export function valuesCount(values: InputtedValues) {
    var count = 0
    if (values.one != null) {
        count++
    }
    if (values.two != null) {
        count++
    }
    if (values.three != null) {
        count++
    }
    if (values.four != null) {
        count++
    }
    if (values.five != null) {
        count++
    }
    if (values.six != null) {
        count++
    }
    if (values.seven != null) {
        count++
    }
    if (values.eight != null) {
        count++
    }
    if (values.nine != null) {
        count++
    }
    if (values.ten != null) {
        count++
    }
    console.log(count)
    return count
}