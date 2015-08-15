use!
	mason.dist.private.boot-order
use
	argh
	msl.dist.compare =?
	mason-compile.dist.CompileError
	process exit
	fs readFileSync
	..package version
	.compile-warn-and-throw
	.evaluate

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
			evaluate in-file options
		"version"
			console.log version
		else
			usage!()
