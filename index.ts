class NumberHolder {
    value: number;
}
class StringHolder {
    value: string;
}
class BooleanHolder {
    value: boolean;
}

class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty;
    //generic class can be used to create a class that can hold any type of value, and the type of the value can be specified when creating an instance of the class. This allows for greater flexibility and reusability of the class, as it can be used to hold different types of values without having to create separate classes for each type.
}

const numberHolder = new ValueHolder<number>();

// const booleanHolder = new BooleanHolder();
// booleanHolder.value = true;

// const numberHolder = new NumberHolder();
// numberHolder.value = 42;

// const stringHolder = new StringHolder();
// stringHolder.value = "Hello, World!";