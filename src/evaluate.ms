use
	fs readFileSync realpathSync
	mason-node-util.dist.compile-warn-and-throw
	msl.dist.@.? Some
	msl.dist.@.Map.Id-Map
	msl.dist.@.Map.Map assoc! ?get
	msl.dist.Object p+! send!
	source-map-support install retrieveSourceMap

source-maps = new Id-Map

old-retrieveSourceMap = retrieveSourceMap
install
	retrieveSourceMap. |source
		case ?get source-maps source
			:Some _
				url. null
				map. _
			else
				old-retrieveSourceMap source

# Store compile options globally so that we can use them during require.
compile-options ::= null

compile-and-register-source-map = |ms-src in-file-path
	code sourceMap = compile-warn-and-throw ms-src in-file-path compile-options
	full-in-path = realpathSync in-file-path
	assoc! source-maps full-in-path sourceMap
	code

evaluate. |in-file-path options
	compile-options := options
	require (realpathSync in-file-path)

p+! require.extensions ".ms" !|new-module filename
	ms = readFileSync filename "utf-8"
	code = compile-and-register-source-map ms filename
	send! new-module "_compile" code filename
