"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","argh","fs","mason-compile/lib/Compiler","mason-compile/lib/CompileError","mason-node-util/lib/compile-warn-and-throw","mason-node-util/lib/register","process","fs","./../package"],(exports,_boot,argh_0,fs_1,Compiler_2,CompileError_3,compile_45warn_45and_45throw_4,register_5,process_6,fs_7,package_8)=>{
	_ms.getModule(_boot);
	let argh=_ms.getDefaultExport(argh_0),_$0=_ms.getModule(fs_1),realpathSync=_ms.get(_$0,"realpathSync"),Compiler=_ms.getDefaultExport(Compiler_2),CompileError=_ms.getDefaultExport(CompileError_3),compile_45warn_45and_45throw=_ms.getDefaultExport(compile_45warn_45and_45throw_4),register=_ms.getDefaultExport(register_5),_$1=_ms.getModule(process_6),exit=_ms.get(_$1,"exit"),_$2=_ms.getModule(fs_7),readFileSync=_ms.get(_$2,"readFileSync"),_$3=_ms.getModule(package_8),version=_ms.get(_$3,"version");
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
			if(! _ms.eq(2,args.argv.length)){
				usage_33()
			};
			return _ms.sub(args.argv,1)
		})());
		let options=(()=>{
			let built={};
			let checks=built.checks=args.checks;
			let includeAmdefine=built.includeAmdefine=true;
			let mslPath=built.mslPath="msl/lib";
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
						} else {
							throw _
						}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21hc29uLWNsaS9zcmMvaW5kZXgubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FZQSxZQUFVLGlCQUFBLFFBQ087RUFBaEIsY0FBYztFQUNkLEtBQUs7Q0FBQTtDQUVOLGFBQ1csbUJBQUE7RUFBVixRQUFPOztpQkFHTixJQUFBO0VBQUQsU0FBTztFQUVBLEtBQUEsVUFDUztHQUFmO0VBQUE7RUFFRCwwQkFDVyxLQUFBO0dBQUgsWUFBRyxFQUFFLGtCQUNnQjtJQUEzQjtHQUFBO2tCQUNELFVBQVU7RUFBQTtFQUVYLFlBQ1MsS0FBQTs7R0FBUix3QkFBUTtHQUNSLDBDQUFpQjtHQUNqQiwwQkFBVTtHQUNWLDhCQUFXOzs7RUFFUixRQUFBLEtBQUEsWUFBWSxNQUNJO0dBQVoscUJBQUMsQ0FBRSxPQUFNLFVBQVQsR0FDZ0I7SUFBdEI7R0FBQTtFQUFBO0VBRUssZUFBQSxVQUFVO0dBQ2hCLEtBQUMsVUFDTztJQUFQLFNBQU8sa0NBQXVCO0lBQzlCLGFBQVcsS0FBSSxVQUFTO0lBQ3hCLFFBQ1k7U0FDUjthQUFGLDZCQUF1QixTQUFTOztzQkFDMUIsZ0JBQVA7Y0FDQyxRQUFVLGdCQUFnQixZQUFXLFFBQVM7Ozs7OztJQUNoRCxZQUFZOzs7R0FDYixLQUFDLE1BQ0c7SUFBSCxTQUFTLEtBQUksVUFBUztJQUN0QixRQUFTOzs7R0FDVixLQUFDLFVBQ087SUFBUCxZQUFZOzs7R0FFVCxRQUFIO0VBQUE7Q0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
