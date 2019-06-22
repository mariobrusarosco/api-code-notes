const PromiseTryCatch  = (fn) => {
	// return function() {
		console.log('------->', fn)
		fn()
		// return function() {
		// 	fn()
		// 		.then(() => {})
		// }
		// fn()
		// 	.then(() => {
		// 		'Chamei msm!!'
		// 	})
			// .catch(e => console.error(e))
	// }
}

module.exports = PromiseTryCatch
