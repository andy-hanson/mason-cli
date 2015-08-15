"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","mason/dist/private/boot-order","argh","mason/dist/compare","mason-compile/dist/CompileError","process","fs","../package","./compile-warn-and-throw","./evaluate"],(exports,boot_45order_0,argh_1,compare_2,CompileError_3,process_4,fs_5,package_6,compile_45warn_45and_45throw_7,evaluate_8)=>{
	_ms.getModule(boot_45order_0);
	const argh=_ms.getDefaultExport(argh_1),_$5=_ms.getModule(compare_2),_61_63=_ms.get(_$5,"=?"),CompileError=_ms.getDefaultExport(CompileError_3),_$7=_ms.getModule(process_4),exit=_ms.get(_$7,"exit"),_$8=_ms.getModule(fs_5),readFileSync=_ms.get(_$8,"readFileSync"),_$9=_ms.getModule(package_6),version=_ms.get(_$9,"version"),compile_45warn_45and_45throw=_ms.getDefaultExport(compile_45warn_45and_45throw_7),evaluate=_ms.getDefaultExport(evaluate_8);
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
				evaluate(_ms.unlazy(in_45file),options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21hc29uLWNsaS9zcmMvaW5kZXgubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FZQSxjQUFVLGlCQUFBLFFBQ087RUFBaEIsY0FBYztFQUNkLEtBQUs7Q0FBQTtDQUVOLGVBQ1csbUJBQUE7RUFBVixRQUFPOztDQWpCUix3QkFBQTtpQkFvQkUsSUFBQTtFQUFELFdBQU87RUFFUCxLQUFRLFVBQ1M7R0FBaEI7RUFBQTtFQUVEO1VBQ1UsS0FBQTtJQUFULEtBQVEsT0FBRyxFQUFFLGtCQUNnQjtLQUE1QjtJQUFBO21CQUNELFVBQVU7R0FBQTtFQUFBO0VBRVgsY0FDUyxLQUFBOztHQUFSLDBCQUFRO0dBQ1IsK0NBQWU7OztFQUVYLFFBQUEsS0FBQSxZQUFZLE1BQ0k7R0FBcEIsa0JBQVMsQ0FBRyxPQUFPLFNBQVMsaUJBQXBCLEdBQ29DO0lBQTNDO0dBQUE7RUFBQTtFQUVNLGVBQUEsVUFBVTtHQUNqQixLQUFDLFVBQ1E7SUFBUixVQUFNLG1DQUFzQjtJQUM1QixVQUNZO1NBQ1I7YUFBRiw2QkFBdUIsMEJBQVk7S0FBQSxDQUNwQyxNQUNLLEVBQUE7YUFFQTtPQUFILGdCQUFDLGFBQUQsR0FDYTtlQUFaLFFBQVMsZ0JBQWlCLFlBQVcsUUFBUztjQUUzQztRQUFILGdCQUFPO09BQUE7TUFBQTtLQUFBO0lBQUE7SUFDWCxZQUFZOzs7R0FDYixLQUFDLE1BQ0k7SUFBSiwrQkFBaUI7OztHQUNsQixLQUFDLFVBQ1E7SUFBUixZQUFZOzs7V0FFWjtFQUFBO0NBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==