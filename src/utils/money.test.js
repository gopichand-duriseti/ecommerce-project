import {it,expect,describe} from 'vitest'; 
//expect checks if the result is correct or not
//describe=group tests together,group of tests is called as "test suite" Sounds like: test sweet
import { formatMoney } from './money';

describe('formatMoney',()=>{
    it('formats 1999 cents as $19.99',()=>{//some name given in the string
    expect(formatMoney(1999)).toBe('$19.99');
});

it('displays two decimals',()=>{
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(100)).toBe('$1.00');
});
})


