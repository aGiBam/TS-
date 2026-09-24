class ValueHolder<T> {
    value: T;
}

const numberWrapper = (value: number) : number[] => {
    return [value];
}

const stringWrapper = (value: string) : string[] => {
    return [value];
}

const booleanWrapper = (value: boolean) : boolean[] => {
    return [value];
}

const valueWrapper = <T>(value: T) : T[] => {
    return [value];
}

valueWrapper<number>(14); // [14]