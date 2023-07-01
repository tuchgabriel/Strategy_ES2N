interface SortingStrategy {
  sort(data: number[]): number[];
}

class AscendingSortingStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    return [...data].sort((a, b) => a - b);
  }
}

class DescendingSortingStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    return [...data].sort((a, b) => b - a);
  }
}

class Sorter {
  private strategy: SortingStrategy = new AscendingSortingStrategy();

  setStrategy(strategy: SortingStrategy): void {
    this.strategy = strategy;
  }

  sortData(data: number[]): number[] {
    return this.strategy.sort([...data]);
  }
}

const sorter = new Sorter();
const data = [5, 2, 8, 1, 9];

sorter.setStrategy(new AscendingSortingStrategy());
const ascendingResult = sorter.sortData(data);
console.log("Ordenação ascendente:", ascendingResult);

sorter.setStrategy(new DescendingSortingStrategy());
const descendingResult = sorter.sortData(data);
console.log("Ordenação descendente:", descendingResult);
