function Counter() {
    return {
        scope: {},
        template: `
			<div class="counter">
				<h3>Counter: {{ counter.count }}</h3>
				<a class="counter__increment" href="" ng-click="counter.increment()">Increment Counter</a> -
				<a class="counter__decrement" href="" ng-click="counter.decrement()">Decrement Counter</a>
			</div>
		`,
        controller: 'CounterController as counterDirective'
    }
}

angular
    .module('app')
    .directive('counterDirective', Counter);
