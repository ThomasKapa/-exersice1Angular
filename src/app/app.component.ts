import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/homePage/components/navbar/navbar.component";
import { FooterComponent } from "./pages/homePage/components/footer/footer.component";
import { LeftSideComponent } from "./pages/homePage/components/left-side/left-side.component";
import { RightSideComponent } from "./pages/homePage/components/right-side/right-side.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LeftSideComponent, RightSideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Exercise1';
}
