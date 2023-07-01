function compareByAge(person1, person2) {
    return person1.age - person2.age;
  }
  
  // Estratégia de comparação para ordenar por nome
  function compareByName(person1, person2) {
    return person1.name.localeCompare(person2.name);
  }
  
  // Função de ordenação que utiliza uma estratégia de comparação
  function sortArray(array, compareStrategy) {
    return array.sort(compareStrategy);
  }
  
  // Array de objetos de pessoas
  var people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  // Classificando o array de pessoas por idade usando a estratégia compareByAge
  var sortedByAge = sortArray(people, compareByAge);
  console.log(sortedByAge);
  
  // Classificando o array de pessoas por nome usando a estratégia compareByName
  var sortedByName = sortArray(people, compareByName);
  console.log(sortedByName);