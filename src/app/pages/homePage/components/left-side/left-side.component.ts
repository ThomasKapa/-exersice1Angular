import { Component } from '@angular/core';
import { user } from '../../../../Shared/Model/user';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss'
})
export class LeftSideComponent {

  users: user[]=[
{id:1, firstName:"thomas", lastName:"Kapa",address:"Aberof 3",dateOfBirth:"10/10/10"},
{id:2, firstName:"thomas", lastName:"Kapa",address:"Aberof 3",dateOfBirth:"10/10/10"},
{id:3, firstName:"thomas", lastName:"Kapa",address:"Aberof 3",dateOfBirth:"10/10/10"}

];

}
