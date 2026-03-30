import { Component } from '@angular/core';
import { WorkComponent } from "../work/work.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [WorkComponent]
})
export class AboutComponent {

}
