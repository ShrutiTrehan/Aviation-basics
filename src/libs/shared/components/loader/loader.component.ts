import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../utils/loader.service';

/**
 *component for spinner loader
 *
 * @export
 * @class LoaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  /**
   *state of loader
   *
   * @type {Subject<boolean>}
   * @memberof LoaderComponent
   */
  isLoading: Subject<boolean>;

  /**
   *Creates an instance of LoaderComponent.
   * @param {LoaderService} loaderService
   * @memberof LoaderComponent
   */
  constructor(private loaderService: LoaderService) { }

  /**
   *set the state of loader
   *
   * @memberof LoaderComponent
   */
  ngOnInit() {
    this.isLoading = this.loaderService.isLoading;
  }

}
