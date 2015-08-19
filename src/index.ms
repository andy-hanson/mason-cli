# TODO: Shouldn't be necessary
use!
	msl.dist.private.boot-order
use
	argh
	fs realpathSync
	msl.dist.compare =?
	mason-compile.dist.CompileError
	mason-node-util.dist.compile-warn-and-throw
	mason-node-util.dist.register
	process exit
	fs readFileSync
	..package version

fail! = !|message
	console.error message
	exit 1

usage! = !|
	fail! "Usage: mason (compile|run|version) file-name [--checks] [--warn-as-error]"

!|
	args = argh.argv

	unless! args.argv
		usage!()

	~in-file =
		unless! =? 2 args.argv.length
			usage!()
		args.argv[1]

	options =
		checks. args.checks
		warn-as-error. args.warn-as-error
		includeAmdefine. true
		includeSourceMap. true
		includeModuleName. true
		forceNonLazyModule. true
		useStrict. true

	for! Object.keys args
		unless! :[ "argv" "checks" "warn-as-error" ]
			usage!()

	switch! args.argv[0]
		"compile"
			src = readFileSync in-file "utf-8"
			res = except
				try
					compile-warn-and-throw src in-file options
				catch
					# TODO:SYNTAX catch _:CompileError
					case
						:CompileError
							fail! (((_.message.split "\n").slice 1).join "\n")
						else
							throw! _
			console.log res.code
		"run"
			register options
			require (realpathSync in-file)
		"version"
			console.log version
		else
			usage!()
