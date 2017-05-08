import { Component, Input, OnDestroy } from '@angular/core';

// originally based on https://manuel-rauber.com/2016/01/05/angular-2-spinner-component/

@Component({
    selector: 'spinner',
    styleUrls: ['./spinner.css'],
    template: `
<div [hidden]="!isDelayedRunning" class="spinner shiro">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>`
})
export class SpinnerComponent implements OnDestroy {  
    private currentTimeout;
    private isDelayedRunning: boolean = false;

    @Input()
    public delay: number = 200;

    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
            return;
        }

        if (this.currentTimeout) {
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }

    private cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }

    ngOnDestroy(): any {
        this.cancelTimeout();
    }
}
