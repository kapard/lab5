let column_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let column_2 = [6, 5, 4, 7, 8, 9, 3, 2, 1, 8, 5, 2, 3, 10, 9, 7, 4, 1, 3, 5, 7, 1, 5, 9, 6, 4, 8, 2, 7, 10];
let column_3 = [41, 50, 62, 85, 73, 95, 64, 81, 44, 52, 98, 87, 63, 46, 78, 96, 100, 53, 61, 89, 74, 63, 54, 69, 78, 68, 97, 55, 88, 66];
let column_4 = [51, 40, 96, 65, 57, 78, 82, 46, 63, 51, 78, 96, 54, 65, 52, 84, 75, 65, 84, 73, 60, 80, 94, 52, 86, 49, 75, 63, 52, 41];


let sum_1 = 0;
for (const value of column_1) {
  sum_1 += value;
};

let sum_2 = 0;
for (const value of column_2) {
  sum_2 += value;
};

let sum_3 = 0;
for (const value of column_3) {
  sum_3 += value;
};

let sum_4 = 0;
for (const value of column_4) {
  sum_4 += value;
}

let sums = [sum_1, sum_2, sum_3, sum_4];
let total_score =sum_1 + sum_2 + sum_3 + sum_4;

const results = {
	col1: column_1,	
	col2: column_2,   	
	col3: column_3,	
	col4: column_4,	
	sums: sums, 	
	total_score: total_score,	

}
