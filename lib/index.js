"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","argh","fs","mason-compile/dist/Compiler","mason-compile/dist/CompileError","mason-node-util/dist/compile-warn-and-throw","mason-node-util/dist/register","process","fs","./../package","msl/dist/compare"],(exports,_boot,argh_0,fs_1,Compiler_2,CompileError_3,compile_45warn_45and_45throw_4,register_5,process_6,fs_7,package_8,compare_9)=>{
	_ms.getModule(_boot);
	let argh=_ms.getDefaultExport(argh_0),_$0=_ms.getModule(fs_1),realpathSync=_ms.get(_$0,"realpathSync"),Compiler=_ms.getDefaultExport(Compiler_2),CompileError=_ms.getDefaultExport(CompileError_3),compile_45warn_45and_45throw=_ms.getDefaultExport(compile_45warn_45and_45throw_4),register=_ms.getDefaultExport(register_5),_$1=_ms.getModule(process_6),exit=_ms.get(_$1,"exit"),_$2=_ms.getModule(fs_7),readFileSync=_ms.get(_$2,"readFileSync"),_$3=_ms.getModule(package_8),version=_ms.get(_$3,"version"),_$4=_ms.getModule(compare_9),_61_63=_ms.get(_$4,"=?");
	let fail_33=function fail_33(message){
		console.error(message);
		exit(1)
	};
	let usage_33=function usage_33(){
		fail_33(`Usage: mason (compile|run|version) file-name [--checks]`)
	};
	exports.default=()=>{
		let args=argh.argv;
		if(! args.argv){
			usage_33()
		};
		let filename=_ms.lazy(()=>(()=>{
			if(! _61_63(2,args.argv.length)){
				usage_33()
			};
			return _ms.sub(args.argv,1)
		})());
		let options=(()=>{
			let built={};
			let checks=built.checks=args.checks;
			let includeAmdefine=built.includeAmdefine=true;
			let mslPath=built.mslPath="msl/dist";
			let useStrict=built.useStrict=true;
			return built
		})();
		for(let _ of Object.keys(args)){
			if(! _ms.hasInstance(["argv","checks"],_)){
				usage_33()
			}
		};
		switch(_ms.sub(args.argv,0)){
			case "compile":{
				let code=readFileSync(_ms.unlazy(filename),"utf-8");
				let compiler=new (Compiler)(options);
				let res=(()=>{
					try {
						return compile_45warn_45and_45throw(compiler,code,_ms.unlazy(filename))
					}catch(_){
						if(_ms.contains(CompileError,_)){
							return fail_33(_.message.split(`\n`).slice(1).join(`\n`))
						} else throw _
					}
				})();
				console.log(res.code);
				break
			}
			case "run":{
				register(new (Compiler)(options));
				require(realpathSync(_ms.unlazy(filename)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21hc29uLWNsaS9zcmMvaW5kZXgubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FZQSxZQUFVLGlCQUFBO0VBQ1QsY0FBYztFQUNkLEtBQUs7Q0FBQTtDQUVOLGFBQ1c7RUFBVixRQUFPOztpQkFHTjtFQUFELFNBQU87RUFFQSxLQUFBLFVBQ1M7R0FBZjtFQUFBO0VBRUQsMEJBQ1csS0FBQTtHQUFILEtBQUEsT0FBRyxFQUFFLGtCQUNnQjtJQUEzQjtHQUFBO2tCQUNELFVBQVU7RUFBQTtFQUVYLFlBQ1MsS0FBQTs7R0FBUix3QkFBUTtHQUNSLDBDQUFpQjtHQUNqQiwwQkFBVTtHQUNWLDhCQUFXOzs7RUFFUixRQUFBLEtBQUEsWUFBWSxNQUNJO0dBQVoscUJBQUMsQ0FBRSxPQUFNLFVBQVQsR0FDZ0I7SUFBdEI7R0FBQTtFQUFBO0VBRUssZUFBQSxVQUFVO1FBQ2YsVUFDTztJQUFQLFNBQU8sa0NBQXVCO0lBQzlCLGFBQVcsS0FBSSxVQUFTO0lBQ3hCLFFBQ1k7U0FDUjthQUFGLDZCQUF1QixTQUFTOztzQkFDMUIsZ0JBQVA7Y0FDQyxRQUFVLGdCQUFnQixZQUFXLFFBQVM7Ozs7SUFDaEQsWUFBWTs7O1FBQ1osTUFDRztJQUFILFNBQVMsS0FBSSxVQUFTO0lBQ3RCLFFBQVM7OztRQUNULFVBQ087SUFBUCxZQUFZOzs7V0FFWjtFQUFBO0NBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
