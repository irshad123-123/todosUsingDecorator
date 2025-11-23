import { Component, OnInit } from '@angular/core';
import { IstdArr } from '../../models/student1';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student1-dashboard',
  templateUrl: './student1-dashboard.component.html',
  styleUrls: ['./student1-dashboard.component.scss']
})
export class Student1DashboardComponent implements OnInit {

  constructor(private _matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
    setLocalStorage(){
    localStorage.setItem('dataArr', JSON.stringify(this.stdArr))
  }

  stdArr: Array<IstdArr> = JSON.parse(localStorage.getItem('dataArr')!) || []
  editStdObj !: IstdArr
  newStd(newStd: IstdArr) {
    this.stdArr = [...this.stdArr, newStd]
    this.setLocalStorage()
  }
  onEditStd(msg: IstdArr) {
    this.editStdObj = msg
  }

  onRemoveStd(stdId: string) {
    let isConfirm = confirm('Are you sure want to remove this student detials !!!')
    if (isConfirm) {
      let getIndex = this.stdArr.findIndex(id => id.stdId === stdId)
      this.stdArr.splice(getIndex, 1)
      this._matSnackBar.open('The student detials removed successfully !!!', 'close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
      this.setLocalStorage()
    }
  }

  onUpdatedObj(obj: IstdArr) {
    let getIndex = this.stdArr.findIndex(t => t.stdId === obj.stdId)
    this.stdArr[getIndex] = obj
    // console.log(obj)
    this.setLocalStorage()

  }

}
