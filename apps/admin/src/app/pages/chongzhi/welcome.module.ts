import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { CommonModule } from '@angular/common';
import { NzTableModule, NzDividerModule } from 'ng-zorro-antd';
@NgModule({
    imports: [WelcomeRoutingModule, CommonModule, NzTableModule, NzDividerModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
