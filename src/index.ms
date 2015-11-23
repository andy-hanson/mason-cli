import
	global require
	argh
	fs realpathSync
	mason-compile.dist.Compiler
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

	~filename =
		unless =? 2 args.argv.length
			usage!()
		args.argv[1]

	options =
		checks. args.checks
		includeAmdefine. true
		mslPath. 'msl/dist
		useStrict. true

	for Object.keys args
		unless :['argv 'checks]
			usage!()

	switch args.argv[0]
		'compile
			code = readFileSync filename 'utf-8
			compiler = new Compiler options
			res = except
				try
					compile-warn-and-throw compiler code filename
				catch :CompileError
					fail! (((_.message.split "\n").slice 1).join "\n")
			console.log res.code
		'run
			register new Compiler options
			require (realpathSync filename)
		'version
			console.log version
		else
			usage!()
