// Função para trocar os valores de duas posições de um vetor
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
    return array;
};

// Função Bubble Sort para ordenar um vetor de inteiros
const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

// Função Selection Sort para ordenar um vetor de inteiros
const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};

// Função Quick Sort para ordenar um vetor de inteiros
const quick_sort = (array, low, high) => {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quick_sort(array, low, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, high);
    }
    return array;
};

// Função de particionamento para o Quick Sort
const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};

// Exportando as funções para serem utilizadas em outros arquivos, se necessário
module.exports = {
    swap,
    shuffle,
    bubble_sort,
    selection_sort,
    quick_sort
};