// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]


export function multiplicationTable (size: number): number[][] {
    const multiplication_table: number[][] = [];
    
    for(let i = 1; i <= size; i++) {
        const sub_table: number[] = [];
        let value: number = i;
        
        for(let j = 0; j < size; j++) {  
            sub_table.push(value);
            value += i;
        }
        
        multiplication_table.push(sub_table);
    }
    
    return multiplication_table;
}
