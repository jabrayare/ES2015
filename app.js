// Iterator Example.
function nameIterator(names){
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false} :
      {done: true}
    }
  }
}

// Create an array of names.
const namesArr = ["Jibril", "Mohamed","Yare"];
const names = nameIterator(namesArr);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

//Generators -> They can return multiple values.

function* sayName(){
  yield 'Jibril';
  yield 'Japan';
  yield 'Korea';
}

const name = sayName();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);