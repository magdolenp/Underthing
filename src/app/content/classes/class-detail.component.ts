import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ClassEnum } from '../../shared/enums/class.enum';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss'],
})
export class ClassDetailComponent {
  classType: ClassEnum | null = null;
  classTypeEnum = ClassEnum;

  constructor(private readonly route: ActivatedRoute) {
    this.route.params.pipe(take(1)).subscribe(params => {
      const classType = params['class'];
      if (this.isClassEnum(classType)) {
        this.classType = classType;
      }
    });
  }

  isClassEnum(classType: string): classType is ClassEnum {
    return Object.values(ClassEnum).includes(classType as ClassEnum);
  }
}
