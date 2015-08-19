"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot-order","argh","fs","msl/dist/compare","mason-compile/dist/CompileError","mason-node-util/dist/compile-warn-and-throw","mason-node-util/dist/register","process","fs","../package"],(exports,boot_45order_0,argh_1,fs_2,compare_3,CompileError_4,compile_45warn_45and_45throw_5,register_6,process_7,fs_8,package_9)=>{
	_ms.getModule(boot_45order_0);
	const argh=_ms.getDefaultExport(argh_1),_$6=_ms.getModule(fs_2),realpathSync=_ms.get(_$6,"realpathSync"),_$7=_ms.getModule(compare_3),_61_63=_ms.get(_$7,"=?"),CompileError=_ms.getDefaultExport(CompileError_4),compile_45warn_45and_45throw=_ms.getDefaultExport(compile_45warn_45and_45throw_5),register=_ms.getDefaultExport(register_6),_$11=_ms.getModule(process_7),exit=_ms.get(_$11,"exit"),_$12=_ms.getModule(fs_8),readFileSync=_ms.get(_$12,"readFileSync"),_$13=_ms.getModule(package_9),version=_ms.get(_$13,"version");
	const fail_33=function fail_33(message){
		console.error(message);
		exit(1)
	};
	const usage_33=function usage_33(){
		fail_33(`Usage: mason (compile|run|version) file-name [--checks] [--warn-as-error]`)
	};
	const name=exports.name=`index`;
	exports.default=()=>{
		const args=argh.argv;
		if(! args.argv){
			usage_33()
		};
		const in_45file=_ms.lazy(()=>{
			return (()=>{
				if(! _61_63(2,args.argv.length)){
					usage_33()
				};
				return _ms.sub(args.argv,1)
			})()
		});
		const options=(()=>{
			const built={};
			const checks=built.checks=args.checks;
			const warn_45as_45error=built["warn-as-error"]=args["warn-as-error"];
			const includeAmdefine=built.includeAmdefine=true;
			const includeSourceMap=built.includeSourceMap=true;
			const includeModuleName=built.includeModuleName=true;
			const forceNonLazyModule=built.forceNonLazyModule=true;
			const useStrict=built.useStrict=true;
			return _ms.setName(built,"options")
		})();
		for(let _ of Object.keys(args)){
			if(! _ms.contains([`argv`,`checks`,`warn-as-error`],_)){
				usage_33()
			}
		};
		switch(_ms.sub(args.argv,0)){
			case `compile`:{
				const src=readFileSync(_ms.unlazy(in_45file),`utf-8`);
				const res=(()=>{
					try {
						return compile_45warn_45and_45throw(src,_ms.unlazy(in_45file),options)
					}catch(_){
						return (()=>{
							if(_ms.contains(CompileError,_)){
								return fail_33(_.message.split(`\n`).slice(1).join(`\n`))
							} else {
								throw _ms.error(_)
							}
						})()
					}
				})();
				console.log(res.code);
				break
			}
			case `run`:{
				register(options);
				require(realpathSync(_ms.unlazy(in_45file)));
				break
			}
			case `version`:{
				console.log(version);
				break
			}
			default:usage_33()
		}
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21hc29uLWNsaS9zcmMvaW5kZXgubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FjQSxjQUFVLGlCQUFBLFFBQ087RUFBaEIsY0FBYztFQUNkLEtBQUs7Q0FBQTtDQUVOLGVBQ1csbUJBQUE7RUFBVixRQUFPOztDQW5CUix3QkFBQTtpQkFzQkUsSUFBQTtFQUFELFdBQU87RUFFUCxLQUFRLFVBQ1M7R0FBaEI7RUFBQTtFQUVEO1VBQ1UsS0FBQTtJQUFULEtBQVEsT0FBRyxFQUFFLGtCQUNnQjtLQUE1QjtJQUFBO21CQUNELFVBQVU7R0FBQTtFQUFBO0VBRVgsY0FDUyxLQUFBOztHQUFSLDBCQUFRO0dBQ1IsK0NBQWU7R0FDZiw0Q0FBaUI7R0FDakIsOENBQWtCO0dBQ2xCLGdEQUFtQjtHQUNuQixrREFBb0I7R0FDcEIsZ0NBQVc7OztFQUVQLFFBQUEsS0FBQSxZQUFZLE1BQ0k7R0FBcEIsa0JBQVMsQ0FBRyxPQUFPLFNBQVMsaUJBQXBCLEdBQ29DO0lBQTNDO0dBQUE7RUFBQTtFQUVNLGVBQUEsVUFBVTtHQUNqQixLQUFDLFVBQ1E7SUFBUixVQUFNLG1DQUFzQjtJQUM1QixVQUNZO1NBQ1I7YUFBRiw2QkFBdUIsMEJBQVk7S0FBQSxDQUNwQyxNQUNLLEVBQUE7YUFFQTtPQUFILGdCQUFDLGFBQUQsR0FDYTtlQUFaLFFBQVMsZ0JBQWlCLFlBQVcsUUFBUztjQUUzQztRQUFILGdCQUFPO09BQUE7TUFBQTtLQUFBO0lBQUE7SUFDWCxZQUFZOzs7R0FDYixLQUFDLE1BQ0k7SUFBSixTQUFTO0lBQ1QsUUFBUzs7O0dBQ1YsS0FBQyxVQUNRO0lBQVIsWUFBWTs7O1dBRVo7RUFBQTtDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=