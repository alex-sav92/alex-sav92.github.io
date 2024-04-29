import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkComponent } from "../work/work.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [RouterLink, WorkComponent]
})
export class AboutComponent {

}
