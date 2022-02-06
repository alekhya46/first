import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp'
})
export class EmpPipe implements PipeTransform {

  transform(employees,searchItem) {
    if(!employees||!searchItem){
    return employees;
  }
  return employees.filter((emp) => {
    return emp.empName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
  })

}
}
