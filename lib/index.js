"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["msl/dist/private/boot","exports","argh","fs","mason-compile/dist/CompileError","mason-node-util/dist/compile-warn-and-throw","mason-node-util/dist/register","process","fs","./../package","msl/dist/compare"],(_boot,exports,argh_0,fs_1,CompileError_2,compile_45warn_45and_45throw_3,register_4,process_5,fs_6,package_7,compare_8)=>{
	_ms.getModule(_boot);
	const argh=_ms.getDefaultExport(argh_0),_$0=_ms.getModule(fs_1),realpathSync=_ms.get(_$0,"realpathSync"),CompileError=_ms.getDefaultExport(CompileError_2),compile_45warn_45and_45throw=_ms.getDefaultExport(compile_45warn_45and_45throw_3),register=_ms.getDefaultExport(register_4),_$1=_ms.getModule(process_5),exit=_ms.get(_$1,"exit"),_$2=_ms.getModule(fs_6),readFileSync=_ms.get(_$2,"readFileSync"),_$3=_ms.getModule(package_7),version=_ms.get(_$3,"version"),_$4=_ms.getModule(compare_8),_61_63=_ms.get(_$4,"=?");
	const fail_33=function fail_33(message){
		console.error(message);
		exit(1)
	};
	const usage_33=function usage_33(){
		fail_33(`Usage: mason (compile|run|version) file-name [--checks]`)
	};
	const index=exports.default=function index(){
		const args=argh.argv;
		if(! args.argv){
			usage_33()
		};
		const in_45file=_ms.lazy(()=>(()=>{
			if(! _61_63(2,args.argv.length)){
				usage_33()
			};
			return _ms.sub(args.argv,1)
		})());
		const options=(()=>{
			const built={};
			const checks=built.checks=args.checks;
			const includeAmdefine=built.includeAmdefine=true;
			const mslPath=built.mslPath="msl/dist";
			const useStrict=built.useStrict=true;
			return built
		})();
		for(let _ of Object.keys(args)){
			if(! _ms.contains(["argv","checks"],_)){
				usage_33()
			}
		};
		switch(_ms.sub(args.argv,0)){
			case "compile":{
				const src=readFileSync(_ms.unlazy(in_45file),"utf-8");
				const res=(()=>{
					try {
						return compile_45warn_45and_45throw(src,_ms.unlazy(in_45file),options)
					}catch(_){
						return (()=>{
							if(_ms.contains(CompileError,_)){
								return fail_33(_.message.split(`\n`).slice(1).join(`\n`))
							} else {
								throw _
							}
						})()
					}
				})();
				console.log(res.code);
				break
			}
			case "run":{
				register(options);
				require(realpathSync(_ms.unlazy(in_45file)));
				break
			}
			case "version":{
				console.log(version);
				break
			}
			default:usage_33()
		}
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21hc29uLWNsaS9zcmMvaW5kZXgubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FXQSxjQUFVLGlCQUFBO0VBQ1QsY0FBYztFQUNkLEtBQUs7Q0FBQTtDQUVOLGVBQ1c7RUFBVixRQUFPOztDQUxSLDRCQVFFO0VBQUQsV0FBTztFQUVQLEtBQU8sVUFDUztHQUFmO0VBQUE7RUFFRCw2QkFDVSxLQUFBO0dBQVQsS0FBTyxPQUFHLEVBQUUsa0JBQ2dCO0lBQTNCO0dBQUE7a0JBQ0QsVUFBVTtFQUFBO0VBRVgsY0FDUyxLQUFBOztHQUFSLDBCQUFRO0dBQ1IsNENBQWlCO0dBQ2pCLDRCQUFVO0dBQ1YsZ0NBQVc7OztFQUVQLFFBQUEsS0FBQSxZQUFZLE1BQ0k7R0FBcEIsa0JBQVEsQ0FBRSxPQUFNLFVBQVQsR0FDZ0I7SUFBdEI7R0FBQTtFQUFBO0VBRUssZUFBQSxVQUFVO1FBQ2YsVUFDTztJQUFQLFVBQU0sbUNBQXNCO0lBQzVCLFVBQ1k7U0FDUjthQUFGLDZCQUF1QiwwQkFBWTtLQUFBLENBQ3BDLE1BQ0ssRUFBQTthQUVBO09BQUgsZ0JBQUMsYUFBRCxHQUNhO2VBQVosUUFBUyxnQkFBaUIsWUFBVyxRQUFTO2NBRTNDO1FBQUgsTUFBTTtPQUFBO01BQUE7S0FBQTtJQUFBO0lBQ1YsWUFBWTs7O1FBQ1osTUFDRztJQUFILFNBQVM7SUFDVCxRQUFTOzs7UUFDVCxVQUNPO0lBQVAsWUFBWTs7O1dBRVo7RUFBQTtDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
