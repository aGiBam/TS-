const Component = (target: any) => { 
console.log(target);

};

@Component
class Car {}

//Component doesn't get called a second time because decorators are only called once when the class is defined.
new Car();