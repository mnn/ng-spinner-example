angular.module('app', [])
.controller('MainCtrl', function($timeout) {
  this.onChange = () => {
    this.state = 'changed';
    $timeout(() => { this.loading = true; this.state = 'loading'; },1000);
    $timeout(() => { this.loading = false; this.state = 'done'; },2000);
  };
  this.state = 'initial';
});
