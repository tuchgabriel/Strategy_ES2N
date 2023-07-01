class Sorter {
  sortAscending(data: number[]): number[] {
    return data.sort((a, b) => a - b);
  }

  sortDescending(data: number[]): number[] {
    return data.sort((a, b) => b - a);
  }
}
const sorter = new Sorter();
const data = [5, 2, 8, 1, 9];

const ascendingResult = sorter.sortAscending(data);
console.log("Ordenação ascendente:", ascendingResult);

const descendingResult = sorter.sortDescending(data);
console.log("Ordenação descendente:", descendingResult);