
import {NgModule} from '@angular/core'
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs'
import {MatSidenavModule} from '@angular/material/sidenav'
@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule
    
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule
  ]
})
export class MaterialModule {}