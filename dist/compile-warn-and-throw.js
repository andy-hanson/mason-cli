"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","mason-compile/dist/compile","mason-compile/dist/CompileError","mason-compile/dist/node-only/formatCompileErrorForConsole"],(exports,compile_0,CompileError_1,formatCompileErrorForConsole_2)=>{
	const compile=_ms.getDefaultExport(compile_0),CompileError=_ms.getDefaultExport(CompileError_1),formatCompileErrorForConsole=_ms.getDefaultExport(formatCompileErrorForConsole_2),_$4=_ms.getModule(formatCompileErrorForConsole_2),formatWarningForConsole=_ms.get(_$4,"formatWarningForConsole");
	const compile_45warn_45and_45throw=function compile_45warn_45and_45throw(mason_45source,in_45file_45path,options){
		const _$7=compile(mason_45source,(()=>{
			const built={};
			const inFile=built.inFile=in_45file_45path;
			const includeAmdefine=built.includeAmdefine=true;
			const includeSourceMap=built.includeSourceMap=true;
			const includeModuleName=built.includeModuleName=true;
			const forceNonLazyModule=built.forceNonLazyModule=true;
			const useStrict=built.useStrict=true;
			const checks=built.checks=options.checks;
			const warn_45as_45error=built["warn-as-error"]=options["warn-as-error"];
			return built
		})()),warnings=_$7.warnings,result=_$7.result;
		return (()=>{
			const _=result;
			if(_ms.contains(CompileError,_)){
				const formatted_45message=formatCompileErrorForConsole(result,in_45file_45path);
				result.stack=result.stack.replace(result.message,formatted_45message);
				result.messsage=formatted_45message;
				throw _ms.error(result)
			} else {
				for(let _ of warnings){
					console.warn(formatWarningForConsole(_,in_45file_45path))
				};
				return result
			}
		})()
	};
	const name=exports.name=`compile-warn-and-throw`;
	exports.default=compile_45warn_45and_45throw;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21hc29uLWNsaS9zcmMvY29tcGlsZS13YXJuLWFuZC10aHJvdy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBS0EsbUNBQXlCLHNDQUFBLGVBQWEsaUJBQWEsUUFDTztFQUF6RCxVQUFrQixRQUFRLGVBQ1ksS0FBQTs7R0FBckMsMEJBQVE7R0FDUiw0Q0FBaUI7R0FDakIsOENBQWtCO0dBQ2xCLGdEQUFtQjtHQUNuQixrREFBb0I7R0FDcEIsZ0NBQVc7R0FDWCwwQkFBUTtHQUNSLCtDQUFlOzs7U0FFWDtHQUFBLFFBQUE7R0FDSixnQkFBQyxhQUFELEdBQ2E7SUFBWiwwQkFBb0IsNkJBQTZCLE9BQU87SUFDeEQsYUFBZ0IscUJBQXFCLGVBQWU7SUFDcEQsZ0JBQW1CO0lBQ25CLGdCQUFPO0dBQUEsT0FFSjtJQUFFLFFBQUEsS0FBQSxTQUNRO0tBQVosYUFBYyx3QkFBd0IsRUFBRTtJQUFBO1dBQ3pDO0dBQUE7RUFBQTtDQUFBO0NBekJILHdCQUFBO2lCQUtBIiwiZmlsZSI6ImNvbXBpbGUtd2Fybi1hbmQtdGhyb3cuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==