use
	mason-compile.dist.compile
	mason-compile.dist.CompileError
	mason-compile.dist.node-only.formatCompileErrorForConsole _ formatWarningForConsole

compile-warn-and-throw. |mason-source in-file-path options
	warnings result = compile mason-source
		inFile. in-file-path
		includeAmdefine. true
		includeSourceMap. true
		includeModuleName. true
		forceNonLazyModule. true
		useStrict. true
		checks. options.checks
		warn-as-error. options.warn-as-error

	case result
		:CompileError
			formatted-message = formatCompileErrorForConsole result in-file-path
			result.stack := result.stack.replace result.message formatted-message
			result.messsage := formatted-message
			throw! result
		else
			for! warnings
				console.warn (formatWarningForConsole _ in-file-path)
			result
