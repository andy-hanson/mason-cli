"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["msl/dist/private/boot","exports","fs","mason-node-util/dist/compile-warn-and-throw","msl/dist/at/q","source-map-support","msl/dist/at/Map/Id-Map","msl/dist/at/Map/Map"],(_boot,exports,fs_0,compile_45warn_45and_45throw_1,_63_2,source_45map_45support_3,Id_45Map_4,Map_5)=>{
	_ms.getModule(_boot);
	const _$1=_ms.getModule(fs_0),readFileSync=_ms.get(_$1,"readFileSync"),realpathSync=_ms.get(_$1,"realpathSync"),compile_45warn_45and_45throw=_ms.getDefaultExport(compile_45warn_45and_45throw_1),_$2=_ms.getModule(_63_2),Some=_ms.get(_$2,"Some"),_$3=_ms.getModule(source_45map_45support_3),install=_ms.get(_$3,"install"),retrieveSourceMap=_ms.get(_$3,"retrieveSourceMap"),Id_45Map=_ms.getDefaultExport(Id_45Map_4),_$4=_ms.getModule(Map_5),_63get=_ms.get(_$4,"?get");
	const source_45maps=new (Id_45Map)();
	const old_45retrieveSourceMap=retrieveSourceMap;
	install((()=>{
		const built={};
		const retrieveSourceMap=built.retrieveSourceMap=function retrieveSourceMap(source){
			return (()=>{
				const _=_63get(source_45maps,source);
				{
					const _$=_ms.extract(Some,_);
					if((_$!==null)){
						const _=_$[0];
						const built={};
						const url=built.url=null;
						const map=built.map=_;
						return built
					} else {
						return old_45retrieveSourceMap(source)
					}
				}
			})()
		};
		return built
	})());
	let compile_45options=null;
	const compile_45and_45register_45source_45map=function compile_45and_45register_45source_45map(ms_45src,in_45file_45path){
		const _$0=compile_45warn_45and_45throw(ms_45src,in_45file_45path,compile_45options),code=_$0.code,sourceMap=_$0.sourceMap;
		const full_45in_45path=realpathSync(in_45file_45path);
		_ms.setSub(source_45maps,full_45in_45path,sourceMap,"init");
		return code
	};
	const evaluate=exports.default=function evaluate(in_45file_45path,options){
		compile_45options=options;
		return require(realpathSync(in_45file_45path))
	};
	_ms.newProperty(require.extensions,`.ms`,(new_45module,filename)=>{
		const ms=readFileSync(filename,"utf-8");
		const code=compile_45and_45register_45source_45map(ms,filename);
		new_45module._compile(code,filename)
	});
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21hc29uLWNsaS9zcmMvZXZhbHVhdGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FPQSxvQkFBYyxLQUFJO0NBRWxCLDhCQUF3QjtDQUN4QixRQUNPLEtBQUE7O0VBQU4sZ0RBQW9CLDJCQUFBO1VBQ2Q7SUFBQSxRQUFBLE9BQUssY0FBWTtJQUNyQjswQkFBQyxLQUFEO29CQUNPOzs7TUFBTixvQkFBSztNQUNMLG9CQUFLOztZQUVGO2FBQUgsd0JBQXNCO0tBQUE7SUFBQTtHQUFBO0VBQUE7OztDQUcxQixzQkFBb0I7Q0FFcEIsOENBQW1DLGlEQUFBLFNBQU87RUFDekMsVUFBaUIsNkJBQXVCLFNBQU8saUJBQWE7RUFDNUQsdUJBQWUsYUFBYTthQUM1QixjQUFZLGlCQUFnQjtTQUM1QjtDQUFBO0NBRUQsK0JBQVcsa0JBQUEsaUJBQWE7b0JBQ0o7U0FDbkIsUUFBUyxhQUFhO0NBQUE7aUJBRXZCLG1CQUFvQixNQUFTLENBQUEsYUFBVztFQUN2QyxTQUFLLGFBQWEsU0FBVTtFQUM1QixXQUFPLHdDQUFnQyxHQUFHO0VBQzFDLHNCQUFvQixLQUFLO0NBQUEiLCJmaWxlIjoiZXZhbHVhdGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
