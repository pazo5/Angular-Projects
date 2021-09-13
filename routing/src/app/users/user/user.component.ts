import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  // If you know that the params don't change during lifetime of the component,
  // you don't need a subscription and can use the simpler syntax provided by the snapshot.
  // If the params may change during lifetime, you will have to use the subscription
  // (using a snapshot additionally is not required then).
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }


  // We don't have to do this,Angular will do this for you regarding these route observables.
  // But if you add your own observables a you have to unsubscribe on your own.
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
