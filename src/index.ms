import
	global require
	argh
	fs realpathSync
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
	fail! "Usage: mason (compile|run|version) file-name [--checks]"

!|
	args = argh.argv

	unless args.argv
		usage!()

	~in-file =
		unless =? 2 args.argv.length
			usage!()
		args.argv[1]

	options =
		checks. args.checks
		includeAmdefine. true
		mslPath. 'msl/dist
		useStrict. true

	for! Object.keys args
		unless :['argv 'checks]
			usage!()

	switch args.argv[0]
		'compile
			src = readFileSync in-file 'utf-8
			res = except
				try
					compile-warn-and-throw src in-file options
				catch
					| TODO:SYNTAX catch _:CompileError
					case
						:CompileError
							fail! (((_.message.split "\n").slice 1).join "\n")
						else
							throw _
			console.log res.code
		'run
			register options
			require (realpathSync in-file)
		'version
			console.log version
		else
			usage!()
